import type { DSCRInputs, EligibilityScore } from '@/types/loan';

/**
 * Calculate Debt-Service Coverage Ratio (DSCR) and return eligibility score
 * 
 * DSCR = EBITDA / Total Debt Payments
 * 
 * Eligibility Scoring:
 * - Excellent: DSCR ≥ 1.5 (Strong approval likelihood)
 * - Good: 1.25 ≤ DSCR < 1.5 (Likely approval)
 * - Fair: 1.15 ≤ DSCR < 1.25 (Marginal - may need justification)
 * - Poor: DSCR < 1.15 (High risk of denial)
 * 
 * Industry standard: Most SBA lenders require minimum DSCR of 1.15-1.25
 * 
 * @param inputs - DSCR calculation inputs
 * @returns Object with DSCR value, score, and personalized recommendation
 */
export function calculateDSCR(inputs: DSCRInputs): {
    dscr: number;
    score: EligibilityScore;
    recommendation: string;
} {
    const { annualEBITDA, existingDebtPayments, proposedLoanPayment } = inputs;

    // Calculate total annual debt service
    const totalDebtPayments = existingDebtPayments + (proposedLoanPayment * 12);

    // DSCR calculation
    const dscr = totalDebtPayments > 0
        ? Math.round((annualEBITDA / totalDebtPayments) * 100) / 100
        : 0;

    // Determine eligibility score
    let score: EligibilityScore;
    let recommendation: string;

    if (dscr >= 1.5) {
        score = 'excellent';
        recommendation = 'Strong position. Your business cash flow comfortably covers all debt obligations. Lenders will view this favorably.';
    } else if (dscr >= 1.25) {
        score = 'good';
        recommendation = 'Good position. You have adequate cash flow to cover debt payments with reasonable cushion. Approval is likely.';
    } else if (dscr >= 1.15) {
        score = 'fair';
        recommendation = 'Marginal position. You meet minimum requirements but with little room for error. Consider strengthening cash flow or reducing debt.';
    } else {
        score = 'poor';
        recommendation = 'Below lender thresholds. Work on increasing revenue, reducing expenses, or paying down existing debt before applying.';
    }

    return { dscr, score, recommendation };
}

/**
 * Calculate the minimum EBITDA required for a target DSCR
 * 
 * @param targetDSCR - Desired DSCR (typically 1.25)
 * @param totalDebtPayments - Annual debt service
 * @returns Required annual EBITDA
 */
export function calculateMinimumEBITDA(
    targetDSCR: number,
    totalDebtPayments: number
): number {
    return Math.round(totalDebtPayments * targetDSCR);
}

/**
 * Calculate maximum supportable loan payment for a given EBITDA
 * 
 * @param annualEBITDA - Annual earnings before interest, taxes, depreciation, and amortization
 * @param existingDebtPayments - Annual existing debt payments
 * @param targetDSCR - Target DSCR (typically 1.25)
 * @returns Maximum monthly loan payment
 */
export function calculateMaxLoanPayment(
    annualEBITDA: number,
    existingDebtPayments: number,
    targetDSCR: number = 1.25
): number {
    const availableCashFlow = annualEBITDA / targetDSCR;
    const maxAnnualDebtService = availableCashFlow - existingDebtPayments;
    const maxMonthlyPayment = maxAnnualDebtService / 12;

    return Math.max(0, Math.round(maxMonthlyPayment * 100) / 100);
}
