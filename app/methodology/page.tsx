import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Methodology | SBA Loan Calculator',
    description: 'Learn about our calculation methods, data sources, and quality standards for the SBA 7(a) Loan Calculator.',
    alternates: {
        canonical: '/methodology',
    },
};

export default function MethodologyPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 py-16 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <nav className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-slate-900 dark:text-white">Methodology</span>
                    </nav>
                    <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                        Calculation Methodology
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300">
                        Transparency in how we calculate your SBA loan estimates
                    </p>
                </div>

                {/* Overview */}
                <section className="mb-12 bg-blue-50 dark:bg-blue-950/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        Our Approach
                    </h2>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        Our calculator uses <strong>standard financial formulas</strong> and <strong>official SBA guidelines</strong> to
                        provide accurate estimates. All calculations are based on publicly available data from regulatory authorities
                        and industry standards used by lending institutions nationwide.
                    </p>
                </section>

                {/* Monthly Payment Calculation */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b-2 border-slate-200 dark:border-slate-800">
                        1. Monthly Payment Calculation
                    </h2>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <h3 className="text-xl font-bold mt-6 mb-3">Formula</h3>
                        <p>We use the standard amortization formula:</p>
                        <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 font-mono text-sm my-4">
                            M = P × [r(1 + r)^n] / [(1 + r)^n - 1]
                        </div>
                        <p>Where:</p>
                        <ul>
                            <li><strong>M</strong> = Monthly payment</li>
                            <li><strong>P</strong> = Principal loan amount</li>
                            <li><strong>r</strong> = Monthly interest rate (annual rate / 12)</li>
                            <li><strong>n</strong> = Total number of payments (years × 12)</li>
                        </ul>

                        <h3 className="text-xl font-bold mt-8 mb-3">Interest Rate Sources</h3>
                        <p>Interest rates are based on:</p>
                        <ul>
                            <li>
                                <strong>Prime Rate:</strong> Current WSJ Prime Rate (updated monthly)
                            </li>
                            <li>
                                <strong>SBA Spread:</strong> 2.25% - 2.75% over Prime (SBA maximum allowable spread)
                            </li>
                        </ul>
                    </div>
                </section>

                {/* DSCR Calculation */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b-2 border-slate-200 dark:border-slate-800">
                        2. Debt Service Coverage Ratio (DSCR)
                    </h2>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <h3 className="text-xl font-bold mt-6 mb-3">Formula</h3>
                        <div className="bg-slate-100 dark:bg-slate-900 rounded-lg p-4 font-mono text-sm my-4">
                            DSCR = Net Operating Income / Total Debt Service
                        </div>
                        <p>Where:</p>
                        <ul>
                            <li><strong>Net Operating Income:</strong> Annual EBITDA (Earnings Before Interest, Taxes, Depreciation, Amortization)</li>
                            <li><strong>Total Debt Service:</strong> Sum of all annual debt payments (existing + proposed loan)</li>
                        </ul>

                        <h3 className="text-xl font-bold mt-8 mb-3">DSCR Score Ranges</h3>
                        <table className="min-w-full border-collapse my-4">
                            <thead className="bg-slate-100 dark:bg-slate-800">
                                <tr>
                                    <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">DSCR</th>
                                    <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">Rating</th>
                                    <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">Likelihood</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">≥ 1.50</td>
                                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-semibold text-emerald-600">Excellent</td>
                                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Strong approval likelihood</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">1.25 - 1.49</td>
                                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-semibold text-blue-600">Good</td>
                                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Meets SBA minimum standards</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">1.10 - 1.24</td>
                                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-semibold text-amber-600">Fair</td>
                                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">Below ideal range</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">&lt; 1.10</td>
                                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-2 font-semibold text-red-600">Poor</td>
                                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">High risk of denial</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="text-sm mt-2">
                            <strong>Note:</strong> Most SBA lenders require a minimum DSCR of 1.25
                        </p>
                    </div>
                </section>

                {/* Guaranty Fees */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b-2 border-slate-200 dark:border-slate-800">
                        3. SBA Guaranty Fees
                    </h2>

                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <p>
                            Guaranty fees are calculated based on the <strong>FY2026 SBA fee schedule</strong> as published in the Federal Register:
                        </p>

                        <table className="min-w-full border-collapse my-4">
                            <thead className="bg-slate-100 dark:bg-slate-800">
                                <tr>
                                    <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">Guaranteed Portion</th>
                                    <th className="border border-slate-300 dark:border-slate-700 px-4 py-2 text-left">Fee Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">≤ $1,000,000</td>
                                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">3.5%</td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">$1,000,001 - $5,000,000</td>
                                    <td className="border border-slate-300 dark:border-slate-700 px-4 py-2">3.75%</td>
                                </tr>
                            </tbody>
                        </table>

                        <p>
                            <strong>Source:</strong> <a href="https://www.sba.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">SBA.gov</a> official fee schedule
                        </p>
                    </div>
                </section>

                {/* Data Sources */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b-2 border-slate-200 dark:border-slate-800">
                        Data Sources
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">
                                Official Sources
                            </h3>
                            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                <li>
                                    <a href="https://www.sba.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">
                                        SBA.gov
                                    </a> - Fee schedules, program rules
                                </li>
                                <li>
                                    <a href="https://www.wsj.com/market-data/bonds" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">
                                        Wall Street Journal
                                    </a> - Prime Rate
                                </li>
                                <li>
                                    <a href="https://www.federalregister.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">
                                        Federal Register
                                    </a> - Regulatory updates
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6">
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">
                                Update Frequency
                            </h3>
                            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                <li><strong>Interest Rates:</strong> Monthly</li>
                                <li><strong>Guaranty Fees:</strong> Annually (FY basis)</li>
                                <li><strong>Calculator Logic:</strong> As needed for SBA rule changes</li>
                                <li><strong>Content:</strong> Quarterly reviews</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Quality Standards */}
                <section className="mb-12 bg-slate-50 dark:bg-slate-900 rounded-xl p-8 border border-slate-200 dark:border-slate-800">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        Quality Standards
                    </h2>
                    <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                        <li className="flex items-start gap-3">
                            <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>All formulas verified against industry-standard financial calculators</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Regular audits against SBA.gov official documentation</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Cross-referenced with actual SBA lender requirements</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Content reviewed by professionals with SBA lending experience</span>
                        </li>
                    </ul>
                </section>

                {/* Back Link */}
                <div className="text-center pt-8 border-t border-slate-200 dark:border-slate-800">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Calculator
                    </Link>
                </div>
            </div>
        </div>
    );
}
