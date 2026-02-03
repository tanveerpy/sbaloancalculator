/**
 * Monte Carlo Simulation for Variable Rate Loan Scenarios
 * 
 * Simulates multiple interest rate paths to estimate risk and payment variability
 * for variable-rate SBA 7(a) loans tied to prime rate
 */

import { calculateMonthlyPayment, calculateTotalInterest } from './payment';

export interface MonteCarloResult {
    scenarios: number;
    timeHorizonYears: number;
    currentRate: number;
    percentiles: {
        p10: MonteCarloStats;
        p25: MonteCarloStats;
        p50: MonteCarloStats;
        p75: MonteCarloStats;
        p90: MonteCarloStats;
    };
    worstCase: MonteCarloStats;
    bestCase: MonteCarloStats;
    expected: MonteCarloStats;
}

export interface MonteCarloStats {
    avgPayment: number;
    maxPayment: number;
    minPayment: number;
    totalInterest: number;
    totalCost: number;
}

/**
 * Run Monte Carlo simulation for variable rate loan
 * 
 * Assumptions:
 * - Prime rate follows random walk with mean reversion
 * - Historical volatility: ~2% annual std deviation
 * - Long-run mean: ~5% (adjustable)
 * - Rate changes are correlated period-to-period
 * 
 * @param principal - Loan amount in dollars
 * @param currentPrimeRate - Current prime rate as percentage
 * @param margin - Lender's margin over prime as percentage
 * @param termYears - Loan term in years
 * @param scenarios - Number of simulations to run (default 10,000)
 * @param volatility - Annual volatility of prime rate (default 2%)
 * @param longRunMean - Long-run mean prime rate for mean reversion (default 5%)
 * @returns Monte Carlo simulation results
 */
export function runMonteCarloSimulation(
    principal: number,
    currentPrimeRate: number,
    margin: number,
    termYears: number,
    scenarios: number = 10000,
    volatility: number = 2.0,
    longRunMean: number = 5.0
): MonteCarloResult {
    const results: MonteCarloStats[] = [];
    const monthlyVolatility = volatility / Math.sqrt(12);
    const meanReversionSpeed = 0.1; // 10% reversion per period

    for (let s = 0; s < scenarios; s++) {
        let primeRate = currentPrimeRate;
        let totalPayment = 0;
        let minPayment = Infinity;
        let maxPayment = 0;

        for (let month = 1; month <= termYears * 12; month++) {
            // Mean-reverting random walk (Ornstein-Uhlenbeck process)
            const randomShock = (Math.random() - 0.5) * 2 * monthlyVolatility;
            const meanReversion = meanReversionSpeed * (longRunMean - primeRate) / 12;
            primeRate = Math.max(0.25, primeRate + meanReversion + randomShock);

            const effectiveRate = primeRate + margin;
            const monthlyPayment = calculateMonthlyPayment(
                principal,
                effectiveRate,
                termYears - (month - 1) / 12
            );

            totalPayment += monthlyPayment;
            minPayment = Math.min(minPayment, monthlyPayment);
            maxPayment = Math.max(maxPayment, monthlyPayment);
        }

        const avgPayment = totalPayment / (termYears * 12);
        const totalInterest = totalPayment - principal;
        const totalCost = totalPayment;

        results.push({
            avgPayment: Math.round(avgPayment * 100) / 100,
            maxPayment: Math.round(maxPayment * 100) / 100,
            minPayment: Math.round(minPayment * 100) / 100,
            totalInterest: Math.round(totalInterest * 100) / 100,
            totalCost: Math.round(totalCost * 100) / 100,
        });
    }

    // Sort by total cost for percentile calculation
    results.sort((a, b) => a.totalCost - b.totalCost);

    const getPercentile = (p: number): MonteCarloStats => {
        const index = Math.floor(results.length * p);
        return results[index];
    };

    const calculateExpected = (): MonteCarloStats => {
        const sum = results.reduce(
            (acc, r) => ({
                avgPayment: acc.avgPayment + r.avgPayment,
                maxPayment: acc.maxPayment + r.maxPayment,
                minPayment: acc.minPayment + r.minPayment,
                totalInterest: acc.totalInterest + r.totalInterest,
                totalCost: acc.totalCost + r.totalCost,
            }),
            { avgPayment: 0, maxPayment: 0, minPayment: 0, totalInterest: 0, totalCost: 0 }
        );

        return {
            avgPayment: Math.round((sum.avgPayment / scenarios) * 100) / 100,
            maxPayment: Math.round((sum.maxPayment / scenarios) * 100) / 100,
            minPayment: Math.round((sum.minPayment / scenarios) * 100) / 100,
            totalInterest: Math.round((sum.totalInterest / scenarios) * 100) / 100,
            totalCost: Math.round((sum.totalCost / scenarios) * 100) / 100,
        };
    };

    return {
        scenarios,
        timeHorizonYears: termYears,
        currentRate: currentPrimeRate + margin,
        percentiles: {
            p10: getPercentile(0.1),
            p25: getPercentile(0.25),
            p50: getPercentile(0.5),
            p75: getPercentile(0.75),
            p90: getPercentile(0.9),
        },
        worstCase: results[results.length - 1],
        bestCase: results[0],
        expected: calculateExpected(),
    };
}

/**
 * Calculate value at risk (VaR) - the maximum loss at a given confidence level
 * 
 * @param monteCarloResult - Monte Carlo simulation results
 * @param baselineCost - Total cost under fixed rate scenario
 * @param confidenceLevel - Confidence level (0.9 for 90%, 0.95 for 95%)
 * @returns VaR amount (additional cost above baseline)
 */
export function calculateValueAtRisk(
    monteCarloResult: MonteCarloResult,
    baselineCost: number,
    confidenceLevel: number = 0.9
): number {
    const percentileKey = `p${Math.round(confidenceLevel * 100)}` as keyof typeof monteCarloResult.percentiles;
    const percentile = monteCarloResult.percentiles[percentileKey];

    if (!percentile) {
        throw new Error(`Invalid confidence level: ${confidenceLevel}`);
    }

    return Math.round((percentile.totalCost - baselineCost) * 100) / 100;
}
