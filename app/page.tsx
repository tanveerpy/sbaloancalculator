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

        {/* SEO Content Section - Added for search engines and user education */}
        <div className="mt-12 max-w-5xl mx-auto space-y-8 pb-12">
          {/* What is SBA 7(a) */}
          <section className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              What is an SBA 7(a) Loan?
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              The SBA 7(a) loan program is the Small Business Administration's most popular financing option, providing up to <strong>$5 million</strong> in funding for small businesses. These government-backed loans offer competitive interest rates, longer repayment terms (up to 25 years), and lower down payments than conventional bank loans.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              SBA 7(a) loans can be used for working capital, equipment purchases, real estate acquisition, business expansion, inventory, and refinancing existing debt. The SBA guarantees a portion of the loan (up to 85%), which reduces risk for lenders and makes approval more accessible for small business owners.
            </p>
          </section>

          {/* How the Calculator Works */}
          <section className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              How Our SBA Loan Calculator Works
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Our calculator provides <strong>instant, accurate estimates</strong> of your monthly payment, total interest costs, SBA guaranty fees, and closing costs. Simply adjust the loan amount (up to $5M), term length (1-25 years), and interest rate to see real-time calculations.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              All calculations happen directly in your browser - we don't collect or store your financial information. The calculator uses official SBA fee schedules and standard amortization formulas to ensure accuracy. Results include APR calculations that factor in all fees, giving you a complete picture of your loan costs.
            </p>
          </section>

          {/* DSCR Explanation */}
          <section className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Understanding DSCR (Debt Service Coverage Ratio)
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              DSCR is the <strong>most important metric</strong> SBA lenders use to evaluate loan applications. It measures your business's ability to cover debt payments from operating income. The standard minimum DSCR requirement is <strong>1.25</strong>, meaning your business should generate $1.25 for every $1.00 of debt obligations.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Our calculator computes DSCR using your annual EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization) and existing debt payments. A higher DSCR improves your approval chances and may qualify you for better interest rates. Ratios above 1.5 are considered excellent, while 1.25-1.5 is good, and below 1.25 typically requires additional collateral or a co-signer.
            </p>
            <div className="grid md:grid-cols-4 gap-4 mt-6">
              <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-lg p-4 text-center">
                <p className="text-sm font-semibold text-red-600 dark:text-red-400 mb-1">Poor</p>
                <p className="text-2xl font-bold text-red-700 dark:text-red-300">&lt; 1.25</p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 border-2 border-amber-200 dark:border-amber-800 rounded-lg p-4 text-center">
                <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 mb-1">Fair</p>
                <p className="text-2xl font-bold text-amber-700 dark:text-amber-300">1.25-1.35</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg p-4 text-center">
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">Good</p>
                <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">1.35-1.5</p>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 border-2 border-emerald-200 dark:border-emerald-800 rounded-lg p-4 text-center">
                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-1">Excellent</p>
                <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">&gt; 1.5</p>
              </div>
            </div>
          </section>

          {/* Industry Use Cases */}
          <section className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-8 border border-slate-200 dark:border-slate-700">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              SBA 7(a) Loans by Industry
            </h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              Different industries have unique financing needs and typical loan structures. Our calculator includes industry-specific templates with average loan amounts, interest rates, and EBITDA benchmarks to help you compare your situation with industry standards.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border-2 border-slate-200 dark:border-slate-700 rounded-lg p-5">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Restaurants</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-3">Avg. Loan: $350K-$750K</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">Equipment, renovations, working capital for new locations or expansions.</p>
              </div>
              <div className="border-2 border-slate-200 dark:border-slate-700 rounded-lg p-5">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Healthcare</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-3">Avg. Loan: $500K-$2M</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">Practice acquisition, medical equipment, facility expansion, technology upgrades.</p>
              </div>
              <div className="border-2 border-slate-200 dark:border-slate-700 rounded-lg p-5">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Manufacturing</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-3">Avg. Loan: $750K-$5M</p>
                <p className="text-sm text-slate-700 dark:text-slate-300">Production equipment, facility purchase, inventory financing, expansion projects.</p>
              </div>
            </div>
          </section>

          {/* Key Benefits */}
          <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl p-8 border-2 border-blue-200 dark:border-blue-800">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Why Use Our Free SBA Calculator?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400">✓</span> Instant Pre-Qualification
                </h3>
                <p className="text-slate-700 dark:text-slate-300">Check your DSCR score immediately to see if you meet lender requirements before applying.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400">✓</span> Complete Cost Breakdown
                </h3>
                <p className="text-slate-700 dark:text-slate-300">See all fees including SBA guaranty fees, closing costs, and true APR with fees included.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400">✓</span> Industry Benchmarks
                </h3>
                <p className="text-slate-700 dark:text-slate-300">Compare your loan structure with industry-specific templates and average rates.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400">✓</span> Private & Secure
                </h3>
                <p className="text-slate-700 dark:text-slate-300">All calculations run in your browser. We never collect or store your financial information.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
