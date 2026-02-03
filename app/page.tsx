'use client';

import { useState, useEffect } from 'react';
import { calculateMonthlyPayment, generateAmortizationSchedule, calculateTotalInterest, calculateAPR, compareFixedVsVariable } from '@/lib/calculations/payment';
import { calculateGuarantyFee, calculateClosingCosts } from '@/lib/calculations/guaranty-fee';
import { calculateDSCR } from '@/lib/calculations/dscr';
import { PaymentBreakdownChart, MonthlyPaymentTrend } from '@/components/charts/LoanCharts';
import { IndustryTemplateSelector } from '@/components/templates/IndustryTemplateSelector';
import { industryTemplates, type IndustryTemplate } from '@/data/industry-templates';

export default function Home() {
  // Loan inputs
  const [loanAmount, setLoanAmount] = useState(250000);
  const [termYears, setTermYears] = useState(10);
  const [interestRate, setInterestRate] = useState(7.5);

  // DSCR inputs
  const [annualEBITDA, setAnnualEBITDA] = useState(150000);
  const [existingDebt, setExistingDebt] = useState(40000);

  // Handle industry template selection
  const handleTemplateSelect = (template: IndustryTemplate) => {
    setLoanAmount(template.averageLoanAmount);
    setTermYears(template.typicalTerm);
    setInterestRate(template.averageRate);
    setAnnualEBITDA(template.typicalEBITDA);
    setExistingDebt(template.existingDebt);
  };

  // Auto-load template from URL parameter
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const templateId = params.get('template');
    if (templateId) {
      const template = industryTemplates.find(t => t.id === templateId);
      if (template) {
        handleTemplateSelect(template);
      }
    }
  }, []);

  // Calculate results with safe fallbacks
  const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, termYears) || 0;
  const totalInterest = calculateTotalInterest(loanAmount, interestRate, termYears) || 0;
  const guarantyFee = calculateGuarantyFee(loanAmount) || 0;
  const closingCosts = calculateClosingCosts(loanAmount) || { total: 0, breakdown: {} };
  const apr = calculateAPR(loanAmount, interestRate, termYears, guarantyFee, closingCosts.total) || 0;

  const dscrResult = calculateDSCR({
    annualEBITDA,
    existingDebtPayments: existingDebt,
    proposedLoanPayment: monthlyPayment,
  }) || { dscr: 0, score: 'poor' as const, recommendation: 'Insufficient data' };

  const amortization = generateAmortizationSchedule(loanAmount, interestRate, termYears) || [];
  const firstYear = amortization.slice(0, 12);

  const comparison = compareFixedVsVariable(loanAmount, 7.5, 5.5, 2.0, termYears) || {
    fixedMonthly: monthlyPayment,
    variableMonthly: monthlyPayment,
    variableSavings: 0
  };

  // Color coding for DSCR
  const dscrColor = dscrResult.score === 'excellent' ? 'text-emerald-600 dark:text-emerald-400'
    : dscrResult.score === 'good' ? 'text-blue-600 dark:text-blue-400'
      : dscrResult.score === 'fair' ? 'text-amber-600 dark:text-amber-400'
        : 'text-red-600 dark:text-red-400';

  const dscrBgColor = dscrResult.score === 'excellent' ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800'
    : dscrResult.score === 'good' ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
      : dscrResult.score === 'fair' ? 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800'
        : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Compact Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            SBA 7(a) Loan Calculator
          </h1>
          <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm">
            Real-time calculations with DSCR pre-qualification
          </p>
        </div>

        {/* Industry Templates */}
        <IndustryTemplateSelector onSelectTemplate={handleTemplateSelect} />

        {/* Primary Hero Card -  Monthly Payment */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-900 rounded-2xl shadow-2xl p-8 mb-6 text-white">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium uppercase tracking-wide mb-1">Monthly Payment</p>
              <p className="text-5xl md:text-6xl font-bold">${monthlyPayment.toLocaleString()}</p>
              <p className="text-blue-100 mt-2 text-sm">APR: <span className="font-semibold">{apr.toFixed(2)}%</span> with fees</p>
            </div>
            <div className={`px-6 py-3 rounded-xl border-2 ${dscrBgColor}`}>
              <p className={`text-xs font-bold uppercase tracking-wide mb-1 ${dscrColor}`}>DSCR</p>
              <p className={`text-3xl font-bold ${dscrColor}`}>{dscrResult.dscr.toFixed(2)}</p>
              <p className={`text-xs uppercase font-semibold ${dscrColor}`}>{dscrResult.score}</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid - Asymmetric for visual interest */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
          {/* Left Side - Inputs (2/5 width) */}
          <div className="lg:col-span-2 space-y-4">
            {/* Loan Details - Compact */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-5 border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Loan Details</h3>

              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-1.5 block">
                    Amount
                  </label>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">${(loanAmount / 1000).toFixed(0)}K</div>
                  <input
                    type="range"
                    min="5000"
                    max="5000000"
                    step="5000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-xs text-slate-500 mt-1">
                    <span>$5K</span>
                    <span>$5M</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-1.5 block">
                      Term
                    </label>
                    <div className="text-xl font-bold text-slate-900 dark:text-white mb-2">{termYears} yr</div>
                    <input
                      type="range"
                      min="1"
                      max="25"
                      value={termYears}
                      onChange={(e) => setTermYears(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-1.5 block">
                      Rate
                    </label>
                    <div className="text-xl font-bold text-slate-900 dark:text-white mb-2">{interestRate.toFixed(1)}%</div>
                    <input
                      type="range"
                      min="4.0"
                      max="12.0"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full appearance-none cursor-pointer accent-blue-600"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* DSCR Inputs - Compact */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-5 border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Pre-Qualification</h3>

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-1.5 block">
                    Annual EBITDA
                  </label>
                  <input
                    type="number"
                    value={annualEBITDA}
                    onChange={(e) => setAnnualEBITDA(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white font-semibold focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-1.5 block">
                    Existing Debt (Annual)
                  </label>
                  <input
                    type="number"
                    value={existingDebt}
                    onChange={(e) => setExistingDebt(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white font-semibold focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className={`p-3 rounded-lg border-2 ${dscrBgColor}`}>
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-400">{dscrResult.recommendation}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Results (3/5 width) */}
          <div className="lg:col-span-3 space-y-4">
            {/* Cost Breakdown - Grid */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-5 border border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Cost Breakdown</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Interest</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">${(totalInterest / 1000).toFixed(0)}K</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">SBA Fee</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">${(guarantyFee / 1000).toFixed(1)}K</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">Closing</p>
                  <p className="text-lg font-bold text-slate-900 dark:text-white">${(closingCosts.total / 1000).toFixed(1)}K</p>
                </div>
                <div className="bg-blue-600 text-white rounded-lg p-3">
                  <p className="text-xs font-medium opacity-90 mb-1">Total Cost</p>
                  <p className="text-lg font-bold">${((loanAmount + totalInterest + guarantyFee + closingCosts.total) / 1000).toFixed(0)}K</p>
                </div>
              </div>

              <div className="h-96">
                <PaymentBreakdownChart
                  principal={loanAmount}
                  totalInterest={totalInterest}
                  guarantyFee={guarantyFee}
                  closingCosts={closingCosts.total}
                />
              </div>
            </div>

            {/* Fixed vs Variable - Compact Comparison */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-4">
                <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-2">Fixed Rate</p>
                <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">${comparison.fixed.monthlyPayment.toLocaleString()}</p>
                <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">Same every month</p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-800 rounded-xl p-4">
                <p className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wide mb-2">Variable Rate</p>
                <p className="text-2xl font-bold text-amber-900 dark:text-amber-100">${comparison.variable.monthlyPayment.toLocaleString()}</p>
                <p className="text-xs text-amber-700 dark:text-amber-300 mt-1">
                  {comparison.difference.monthlyPayment < 0 ? `Save $${Math.abs(comparison.difference.monthlyPayment).toLocaleString()}` : `Cost $${comparison.difference.monthlyPayment.toLocaleString()} more`}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Charts \u0026 Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Payment Trend Chart */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-5 border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Payment Trend</h3>
            <div className="h-64">
              <MonthlyPaymentTrend
                schedule={amortization.filter((_, i) => i % (termYears > 15 ? 12 : 6) === 0).slice(0, 20)}
              />
            </div>
          </div>

          {/* First Year Amortization - Compact Table */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-5 border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">First Year Breakdown</h3>
            <div className="max-h-64 overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-slate-100 dark:bg-slate-900">
                  <tr className="text-xs uppercase text-slate-600 dark:text-slate-400">
                    <th className="text-left py-2 px-2">Mo</th>
                    <th className="text-right py-2 px-2">Principal</th>
                    <th className="text-right py-2 px-2">Interest</th>
                    <th className="text-right py-2 px-2">Balance</th>
                  </tr>
                </thead>
                <tbody className="text-slate-900 dark:text-white">
                  {firstYear.map((row, idx) => (
                    <tr key={idx} className="border-t border-slate-200 dark:border-slate-700">
                      <td className="py-2 px-2 font-medium">{row.month}</td>
                      <td className="text-right py-2 px-2">${(row.principal / 1000).toFixed(1)}K</td>
                      <td className="text-right py-2 px-2 text-slate-600 dark:text-slate-400">${(row.interest / 1000).toFixed(1)}K</td>
                      <td className="text-right py-2 px-2 font-semibold">${(row.balance / 1000).toFixed(0)}K</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
