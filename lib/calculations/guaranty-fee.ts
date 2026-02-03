import type { GuarantyFeeSchedule } from '@/types/loan';
import feeSchedule from '@/data/fee-schedule.json';

/**
 * Calculate SBA guaranty fee based on loan amount and FY 2026 tiered schedule
 * 
 * FY 2026 Fee Tiers:
 * - Loans ≤ $150,000: 2.0%
 * - Loans $150,001–$700,000: 3.0%
 * - Loans $700,001–$1,000,000: 3.5%
 * - Loans > $1,000,000: 3.5% on first $1M + 3.75% on amount over $1M
 * 
 * Edge case: Multiple loans within 90 days are aggregated for fee calculation
 * 
 * @param loanAmount - Loan amount in dollars
 * @param previousLoansIn90Days - Total of previous SBA 7(a) loans in last 90 days
 * @returns Guaranty fee in dollars
 */
export function calculateGuarantyFee(
    loanAmount: number,
    previousLoansIn90Days: number = 0
): number {
    if (loanAmount <= 0) return 0;

    const aggregateAmount = loanAmount + previousLoansIn90Days;
    const tiers: GuarantyFeeSchedule[] = feeSchedule.guarantyFees as GuarantyFeeSchedule[];

    // Special handling for loans over $1M
    if (aggregateAmount > 1000000) {
        const feeOnFirstMillion = 1000000 * 0.035; // 3.5% on first $1M
        const feeOnExcess = (aggregateAmount - 1000000) * 0.0375; // 3.75% on amount over $1M
        return Math.round((feeOnFirstMillion + feeOnExcess) * 100) / 100;
    }

    // Standard tiered calculation
    for (const tier of tiers) {
        if (aggregateAmount <= tier.threshold) {
            return Math.round((aggregateAmount * (tier.feePercent / 100)) * 100) / 100;
        }
    }

    // Fallback (should never reach here with proper tiers)
    return Math.round((aggregateAmount * 0.0375) * 100) / 100;
}

/**
 * Get the applicable fee percentage for a given loan amount
 */
export function getFeeTierPercent(loanAmount: number): number {
    if (loanAmount <= 150000) return 2.0;
    if (loanAmount <= 700000) return 3.0;
    if (loanAmount <= 1000000) return 3.5;
    return 3.75; // Over $1M (simplified - actual calculation is tiered)
}

/**
 * Calculate estimated closing costs based on loan amount
 * Returns object with breakdown of typical costs
 */
export function calculateClosingCosts(loanAmount: number): {
    packagingFee: number;
    appraisalFee: number;
    environmentalReview: number;
    legalFees: number;
    total: number;
} {
    const costs = feeSchedule.closingCosts;

    // Use mid-range estimates, scaled slightly by loan size
    const scale = Math.min(loanAmount / 500000, 1.5); // Cap scaling at 1.5x

    const packagingFee = Math.round((costs.packagingFee.min + costs.packagingFee.max) / 2 * scale);
    const appraisalFee = Math.round((costs.appraisalFee.min + costs.appraisalFee.max) / 2 * scale);
    const environmentalReview = Math.round((costs.environmentalReview.min + costs.environmentalReview.max) / 2 * scale);
    const legalFees = Math.round((costs.legalFees.min + costs.legalFees.max) / 2 * scale);

    return {
        packagingFee,
        appraisalFee,
        environmentalReview,
        legalFees,
        total: packagingFee + appraisalFee + environmentalReview + legalFees,
    };
}
