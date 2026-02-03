import type { AmortizationRow } from '@/types/loan';

/**
 * Calculate monthly payment using standard loan formula
 * M = P * [r(1+r)^n] / [(1+r)^n - 1]
 * 
 * @param principal - Loan amount in dollars
 * @param annualRate - Annual interest rate as percentage (e.g., 6.75)
 * @param termYears - Loan term in years
 * @returns Monthly payment amount
 */
export function calculateMonthlyPayment(
    principal: number,
    annualRate: number,
    termYears: number
): number {
    if (principal <= 0 || annualRate < 0 || termYears <= 0) {
        return 0;
    }

    const monthlyRate = annualRate / 100 / 12;
    const numPayments = termYears * 12;

    // Handle 0% interest rate edge case
    if (monthlyRate === 0) {
        return principal / numPayments;
    }

    const payment =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
        (Math.pow(1 + monthlyRate, numPayments) - 1);

    return Math.round(payment * 100) / 100;
}

/**
 * Generate full amortization schedule
 * 
 * @param principal - Loan amount in dollars
 * @param annualRate - Annual interest rate as percentage
 * @param termYears - Loan term in years
 * @returns Array of amortization rows for each month
 */
export function generateAmortizationSchedule(
    principal: number,
    annualRate: number,
    termYears: number
): AmortizationRow[] {
    const schedule: AmortizationRow[] = [];
    const monthlyPayment = calculateMonthlyPayment(principal, annualRate, termYears);
    const monthlyRate = annualRate / 100 / 12;
    const numPayments = termYears * 12;

    let balance = principal;

    for (let month = 1; month <= numPayments; month++) {
        const interestPayment = balance * monthlyRate;
        const principalPayment = monthlyPayment - interestPayment;
        balance -= principalPayment;

        // Ensure balance doesn't go negative due to rounding
        if (month === numPayments) {
            balance = 0;
        }

        schedule.push({
            month,
            payment: Math.round(monthlyPayment * 100) / 100,
            principal: Math.round(principalPayment * 100) / 100,
            interest: Math.round(interestPayment * 100) / 100,
            balance: Math.max(0, Math.round(balance * 100) / 100),
        });
    }

    return schedule;
}

/**
 * Calculate total interest paid over loan term
 */
export function calculateTotalInterest(
    principal: number,
    annualRate: number,
    termYears: number
): number {
    const monthlyPayment = calculateMonthlyPayment(principal, annualRate, termYears);
    const totalPayments = monthlyPayment * termYears * 12;
    return Math.round((totalPayments - principal) * 100) / 100;
}

/**
 * Calculate APR including all fees (guaranty fee, closing costs)
 * 
 * APR calculation accounts for:
 * - Guaranty fee (typically financed into loan)
 * - Closing costs (typically paid upfront)
 * - Interest rate
 * 
 * Uses Newton-Raphson iterative method to solve for APR
 * 
 * @param principal - Loan amount in dollars
 * @param annualRate - Annual interest rate as percentage
 * @param termYears - Loan term in years
 * @param guarantyFee - SBA guaranty fee in dollars
 * @param closingCosts - Total closing costs in dollars
 * @returns APR as percentage
 */
export function calculateAPR(
    principal: number,
    annualRate: number,
    termYears: number,
    guarantyFee: number,
    closingCosts: number
): number {
    // Total amount financed (principal + guaranty fee)
    const totalFinanced = principal + guarantyFee;

    // Net loan proceeds (what borrower actually receives)
    const netProceeds = principal - closingCosts;

    // Calculate monthly payment on total financed amount
    const monthlyPayment = calculateMonthlyPayment(totalFinanced, annualRate, termYears);
    const numberOfPayments = termYears * 12;

    // Use Newton-Raphson method to solve for APR
    // Starting guess: use the stated interest rate
    let apr = annualRate / 100;
    const tolerance = 0.0001;
    const maxIterations = 100;

    for (let i = 0; i < maxIterations; i++) {
        const monthlyAPR = apr / 12;

        // Present value of all payments at current APR guess
        const pv = monthlyPayment *
            ((1 - Math.pow(1 + monthlyAPR, -numberOfPayments)) / monthlyAPR);

        // Derivative for Newton-Raphson
        const pvDerivative = monthlyPayment *
            (numberOfPayments * Math.pow(1 + monthlyAPR, -numberOfPayments - 1) / monthlyAPR -
                (1 - Math.pow(1 + monthlyAPR, -numberOfPayments)) / (monthlyAPR * monthlyAPR));

        const diff = pv - netProceeds;

        if (Math.abs(diff) < tolerance) {
            break;
        }

        // Update APR estimate
        apr = apr - (diff / pvDerivative) / 12;
    }

    return Math.round(apr * 100 * 100) / 100; // Convert to percentage with 2 decimals
}

/**
 * Calculate effective interest rate for variable rate loans
 * 
 * @param primeRate - Current prime rate as percentage
 * @param margin - Lender's margin over prime as percentage
 * @returns Effective variable rate
 */
export function calculateVariableRate(
    primeRate: number,
    margin: number
): number {
    return Math.round((primeRate + margin) * 100) / 100;
}

/**
 * Compare fixed vs. variable rate loan scenarios
 * 
 * @param principal - Loan amount in dollars
 * @param fixedRate - Fixed annual interest rate as percentage
 * @param primeRate - Current prime rate as percentage
 * @param margin - Lender's margin over prime as percentage
 * @param termYears - Loan term in years
 * @returns Comparison object with both scenarios
 */
export function compareFixedVsVariable(
    principal: number,
    fixedRate: number,
    primeRate: number,
    margin: number,
    termYears: number
) {
    const variableRate = calculateVariableRate(primeRate, margin);

    const fixedPayment = calculateMonthlyPayment(principal, fixedRate, termYears);
    const variablePayment = calculateMonthlyPayment(principal, variableRate, termYears);

    const fixedTotalInterest = calculateTotalInterest(principal, fixedRate, termYears);
    const variableTotalInterest = calculateTotalInterest(principal, variableRate, termYears);

    return {
        fixed: {
            rate: fixedRate,
            monthlyPayment: fixedPayment,
            totalInterest: fixedTotalInterest,
            totalCost: principal + fixedTotalInterest,
        },
        variable: {
            rate: variableRate,
            monthlyPayment: variablePayment,
            totalInterest: variableTotalInterest,
            totalCost: principal + variableTotalInterest,
        },
        difference: {
            monthlyPayment: Math.round((fixedPayment - variablePayment) * 100) / 100,
            totalInterest: Math.round((fixedTotalInterest - variableTotalInterest) * 100) / 100,
            totalCost: Math.round(((principal + fixedTotalInterest) - (principal + variableTotalInterest)) * 100) / 100,
        },
    };
}
