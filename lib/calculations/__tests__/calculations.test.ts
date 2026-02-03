/**
 * Unit Tests for SBA 7(a) Loan Calculation Functions
 * 
 * Tests core calculation accuracy against:
 * - SBA official fee tables (FY 2026)
 * - Standard financial formulas
 * - Edge cases and boundary conditions
 */

import { calculateGuarantyFee, calculateClosingCosts, getFeeTierPercent } from '../guaranty-fee';
import { calculateMonthlyPayment, generateAmortizationSchedule, calculateTotalInterest, calculateAPR, compareFixedVsVariable } from '../payment';
import { calculateDSCR, calculateMinimumEBITDA, calculateMaxLoanPayment } from '../dscr';

describe('Guaranty Fee Calculator', () => {
    it('should calculate correct fee for loan under $150k (2.0% tier)', () => {
        const fee = calculateGuarantyFee(100000);
        expect(fee).toBe(2000); // 100,000 * 2%
    });

    it('should calculate correct fee for loan $150k-$700k (3.0% tier)', () => {
        const fee = calculateGuarantyFee(500000);
        expect(fee).toBe(15000); // 500,000 * 3%
    });

    it('should calculate correct fee for loan $700k-$1M (3.5% tier)', () => {
        const fee = calculateGuarantyFee(800000);
        expect(fee).toBe(28000); // 800,000 * 3.5%
    });

    it('should calculate correct fee for loan over $1M (tiered: 3.5% + 3.75%)', () => {
        const fee = calculateGuarantyFee(1500000);
        // First $1M at 3.5% = $35,000
        // Remaining $500k at 3.75% = $18,750
        // Total = $53,750
        expect(fee).toBe(53750);
    });

    it('should handle edge case: multiple loans within 90 days', () => {
        // New loan: $200k, previous: $400k
        // Aggregate: $600k -> 3.0% tier
        const fee = calculateGuarantyFee(200000, 400000);
        expect(fee).toBe(18000); // 600,000 * 3%
    });

    it('should handle edge case: multiple loans crossing $1M threshold', () => {
        const fee = calculateGuarantyFee(600000, 600000);
        // Aggregate: $1.2M
        // First $1M at 3.5% = $35,000
        // Remaining $200k at 3.75% = $7,500
        expect(fee).toBe(42500);
    });

    it('should return 0 for invalid loan amounts', () => {
        expect(calculateGuarantyFee(0)).toBe(0);
        expect(calculateGuarantyFee(-5000)).toBe(0);
    });
});

describe('Payment Calculator', () => {
    it('should calculate correct monthly payment (standard loan)', () => {
        // Example: $250k loan at 7.5% for 10 years
        const payment = calculateMonthlyPayment(250000, 7.5, 10);
        // Expected: ~$2,959
        expect(payment).toBeGreaterThan(2950);
        expect(payment).toBeLessThan(2970);
    });

    it('should calculate correct monthly payment (25-year term)', () => {
        // Example: $500k loan at 6.5% for 25 years
        const payment = calculateMonthlyPayment(500000, 6.5, 25);
        // Expected: ~$3,378
        expect(payment).toBeGreaterThan(3370);
        expect(payment).toBeLessThan(3390);
    });

    it('should handle edge case: 0% interest rate', () => {
        const payment = calculateMonthlyPayment(120000, 0, 10);
        expect(payment).toBe(1000); // 120,000 / 120 months
    });

    it('should generate correct amortization schedule length', () => {
        const schedule = generateAmortizationSchedule(250000, 7.5, 10);
        expect(schedule.length).toBe(120); // 10 years * 12 months
    });

    it('should have final balance of zero in amortization schedule', () => {
        const schedule = generateAmortizationSchedule(250000, 7.5, 10);
        const finalRow = schedule[schedule.length - 1];
        expect(finalRow.balance).toBe(0);
    });

    it('should calculate total interest correctly', () => {
        const totalInterest = calculateTotalInterest(250000, 7.5, 10);
        const monthlyPayment = calculateMonthlyPayment(250000, 7.5, 10);
        const expected = (monthlyPayment * 120) - 250000;
        expect(Math.abs(totalInterest - expected)).toBeLessThan(1); // Allow rounding tolerance
    });

    it('should calculate APR higher than stated rate (due to fees)', () => {
        const statedRate = 7.5;
        const apr = calculateAPR(250000, statedRate, 10, 7500, 10000);
        expect(apr).toBeGreaterThan(statedRate); // APR should be higher due to fees
        expect(apr).toBeLessThan(statedRate + 1); // But not unreasonably higher
    });

    it('should compare fixed vs. variable rates correctly', () => {
        const comparison = compareFixedVsVariable(250000, 7.5, 5.5, 2.0, 10);

        expect(comparison.fixed.rate).toBe(7.5);
        expect(comparison.variable.rate).toBe(7.5); // 5.5 + 2.0
        expect(comparison.fixed.monthlyPayment).toBe(comparison.variable.monthlyPayment);
    });
});

describe('DSCR Calculator', () => {
    it('should calculate DSCR correctly', () => {
        const result = calculateDSCR({
            annualEBITDA: 150000,
            existingDebtPayments: 40000,
            proposedLoanPayment: 3000, // Monthly -> $36k annual
        });

        // DSCR = 150,000 / (40,000 + 36,000) = 1.97
        expect(result.dscr).toBeCloseTo(1.97, 1);
        expect(result.score).toBe('excellent');
    });

    it('should score DSCR thresholds correctly', () => {
        const excellent = calculateDSCR({ annualEBITDA: 150000, existingDebtPayments: 0, proposedLoanPayment: 8000 });
        expect(excellent.score).toBe('excellent'); // DSCR = 1.56

        const good = calculateDSCR({ annualEBITDA: 150000, existingDebtPayments: 0, proposedLoanPayment: 9500 });
        expect(good.score).toBe('good'); // DSCR = 1.32

        const fair = calculateDSCR({ annualEBITDA: 150000, existingDebtPayments: 0, proposedLoanPayment: 10700 });
        expect(fair.score).toBe('fair'); // DSCR = 1.16

        const poor = calculateDSCR({ annualEBITDA: 150000, existingDebtPayments: 0, proposedLoanPayment: 11000 });
        expect(poor.score).toBe('poor'); // DSCR = 1.14
    });

    it('should calculate minimum EBITDA for target DSCR', () => {
        const minEBITDA = calculateMinimumEBITDA(1.25, 100000);
        expect(minEBITDA).toBe(125000); // 100,000 * 1.25
    });

    it('should calculate maximum loan payment', () => {
        const maxPayment = calculateMaxLoanPayment(150000, 40000, 1.25);
        // Available cash flow: 150,000 / 1.25 = 120,000
        // Max annual debt service: 120,000 - 40,000 = 80,000
        // Max monthly payment: 80,000 / 12 = ~6,667
        expect(maxPayment).toBeCloseTo(6666.67, 1);
    });
});

describe('Edge Cases and Validation', () => {
    it('should handle zero and negative inputs gracefully', () => {
        expect(calculateMonthlyPayment(0, 7.5, 10)).toBe(0);
        expect(calculateMonthlyPayment(-1000, 7.5, 10)).toBe(0);
        expect(calculateMonthlyPayment(250000, -1, 10)).toBe(0);
        expect(calculateMonthlyPayment(250000, 7.5, 0)).toBe(0);
    });

    it('should maintain precision with large loan amounts', () => {
        const fee = calculateGuarantyFee(5000000);
        // First $1M at 3.5% = $35,000
        // Remaining $4M at 3.75% = $150,000
        // Total = $185,000
        expect(fee).toBe(185000);
    });

    it('should handle very short loan terms', () => {
        const payment = calculateMonthlyPayment(120000, 6.0, 1);
        expect(payment).toBeGreaterThan(10000);
        expect(payment).toBeLessThan(11000);
    });

    it('should handle maximum SBA loan amount ($5M)', () => {
        const fee = calculateGuarantyFee(5000000);
        const payment = calculateMonthlyPayment(5000000, 7.5, 25);

        expect(fee).toBeGreaterThan(0);
        expect(payment).toBeGreaterThan(0);
    });
});
