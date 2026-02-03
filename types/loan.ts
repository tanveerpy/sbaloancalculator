// Core loan calculation types

export interface LoanInputs {
    amount: number;
    termYears: number;
    interestRate: number;
    isVariableRate: boolean;
    primeRate: number;
    margin: number;
}

export interface GuarantyFeeSchedule {
    threshold: number;
    feePercent: number;
}

export interface DSCRInputs {
    annualEBITDA: number;
    existingDebtPayments: number;
    proposedLoanPayment: number;
}

export interface AmortizationRow {
    month: number;
    payment: number;
    principal: number;
    interest: number;
    balance: number;
}

export interface CalculationResults {
    monthlyPayment: number;
    totalPayments: number;
    totalInterest: number;
    totalPrincipal: number;
    guarantyFee: number;
    closingCosts: number;
    effectiveAPR: number;
    dscr: number | null;
    eligibilityScore: 'excellent' | 'good' | 'fair' | 'poor' | null;
    amortizationSchedule: AmortizationRow[];
}

export type EligibilityScore = 'excellent' | 'good' | 'fair' | 'poor';
