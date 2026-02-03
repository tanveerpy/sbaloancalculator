import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, AlertTriangle, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Disclaimer | SBA Loan Calculator',
    description: 'Important disclaimers about the SBA 7(a) Loan Calculator and its limitations',
    robots: 'noindex, nofollow',
    alternates: {
        canonical: '/disclaimer',
    },
};

export default function DisclaimerPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Breadcrumb */}
                <nav className="mb-8 text-sm flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Home
                    </Link>
                    <span>/</span>
                    <span className="text-slate-900 dark:text-white">Disclaimer</span>
                </nav>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-xl">
                            <AlertTriangle className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                        </div>
                        <time className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            Last updated: February 3, 2026
                        </time>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
                        Disclaimer
                    </h1>

                    <p className="text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                        Important information about our calculator&apos;s limitations and proper use
                    </p>
                </header>

                {/* Quick Navigation */}
                <div className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-3 mb-4">
                        <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">Other Legal Documents</h2>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <Link
                            href="/privacy"
                            className="px-4 py-2 bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="px-4 py-2 bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>

                {/* Warning Box */}
                <div className="mb-12 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-l-4 border-amber-500 dark:border-amber-600 rounded-xl p-8">
                    <div className="flex items-start gap-4">
                        <AlertTriangle className="w-8 h-8 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">The Bottom Line</h2>
                            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                                This calculator provides <strong className="font-bold text-slate-900 dark:text-white">estimates only</strong>. We are <strong className="font-bold text-slate-900 dark:text-white">NOT affiliated with the U.S. SBA</strong>. Always verify estimates with SBA-approved lenders before making financial decisions.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            Not Affiliated with U.S. Small Business Administration
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            <strong className="font-bold text-slate-900 dark:text-white">IMPORTANT:</strong> This website and calculator are <strong className="font-bold text-slate-900 dark:text-white">NOT affiliated with, endorsed by, or sponsored by the U.S. Small Business Administration (SBA)</strong> or any government agency.
                        </p>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            We are an independent educational resource providing information about SBA 7(a) loans. For official SBA information, visit <a href="https://www.sba.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">SBA.gov</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            Educational Purpose Only
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            This calculator and all website content are provided for <strong className="font-bold text-slate-900 dark:text-white">educational and informational purposes only</strong>. The information does not constitute:
                        </p>
                        <ul className="my-8 space-y-3 list-disc list-inside">
                            <li className="text-slate-700 dark:text-slate-300">Financial advice or recommendations</li>
                            <li className="text-slate-700 dark:text-slate-300">Legal counsel or tax guidance</li>
                            <li className="text-slate-700 dark:text-slate-300">Loan approval or pre-qualification</li>
                            <li className="text-slate-700 dark:text-slate-300">Offers to lend or broker loans</li>
                            <li className="text-slate-700 dark:text-slate-300">Professional consulting services</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            No Guarantee of Loan Approval
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            Meeting or exceeding the minimum DSCR threshold (typically 1.25) <strong className="font-bold text-slate-900 dark:text-white">does not guarantee loan approval</strong>. Lenders evaluate many additional factors, including:
                        </p>
                        <ul className="my-8 space-y-3 list-disc list-inside">
                            <li className="text-slate-700 dark:text-slate-300">Personal and business credit scores</li>
                            <li className="text-slate-700 dark:text-slate-300">Business financial history (typically 2+ years)</li>
                            <li className="text-slate-700 dark:text-slate-300">Industry risk and market conditions</li>
                            <li className="text-slate-700 dark:text-slate-300">Collateral value and quality</li>
                            <li className="text-slate-700 dark:text-slate-300">Owner equity investment and liquidity</li>
                            <li className="text-slate-700 dark:text-slate-300">Management experience and qualifications</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            Estimate Limitations
                        </h2>
                        <h3 className="text-2xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">Interest Rates May Vary</h3>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            While we use current SBA maximum allowable rates, actual rates offered by lenders depend on:
                        </p>
                        <ul className="my-8 space-y-3 list-disc list-inside">
                            <li className="text-slate-700 dark:text-slate-300">Your creditworthiness and financial profile</li>
                            <li className="text-slate-700 dark:text-slate-300">Individual lender&apos;s pricing policies</li>
                            <li className="text-slate-700 dark:text-slate-300">Current prime rate and market conditions</li>
                            <li className="text-slate-700 dark:text-slate-300">Loan term, amount, and purpose</li>
                        </ul>

                        <h3 className="text-2xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">Fees May Differ</h3>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            Our calculator uses official SBA guaranty fee schedules. However, total loan costs may include additional fees not included in our estimates:
                        </p>
                        <ul className="my-8 space-y-3 list-disc list-inside">
                            <li className="text-slate-700 dark:text-slate-300">Lender origination and processing fees</li>
                            <li className="text-slate-700 dark:text-slate-300">Third-party appraisal and environmental reports</li>
                            <li className="text-slate-700 dark:text-slate-300">Legal, title, and closing costs</li>
                            <li className="text-slate-700 dark:text-slate-300">Packaging and consulting fees (if using a loan packager)</li>
                        </ul>

                        <h3 className="text-2xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">Calculations Are Simplified</h3>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            The calculator uses standard amortization formulas but may not account for:
                        </p>
                        <ul className="my-8 space-y-3 list-disc list-inside">
                            <li className="text-slate-700 dark:text-slate-300">Variable or adjustable interest rates</li>
                            <li className="text-slate-700 dark:text-slate-300">Graduated payment structures</li>
                            <li className="text-slate-700 dark:text-slate-300">Interest-only periods</li>
                            <li className="text-slate-700 dark:text-slate-300">Prepayment penalties or balloon payments</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            Not a Lender or Loan Broker
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            We <strong className="font-bold text-slate-900 dark:text-white">do NOT</strong>:
                        </p>
                        <ul className="my-8 space-y-3 list-disc list-inside">
                            <li className="text-slate-700 dark:text-slate-300">Provide or originate loans</li>
                            <li className="text-slate-700 dark:text-slate-300">Match borrowers with lenders</li>
                            <li className="text-slate-700 dark:text-slate-300">Collect loan applications</li>
                            <li className="text-slate-700 dark:text-slate-300">Receive compensation from lenders</li>
                            <li className="text-slate-700 dark:text-slate-300">Make lending decisions</li>
                        </ul>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            To apply for an SBA loan, contact an <a href="https://www.sba.gov/funding-programs/loans/lender-match" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">SBA-approved lender</a> directly.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            Regulatory Changes
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            SBA policies, fee structures, and program rules change periodically. While we strive to keep information current, regulations may have changed since our last update. Always verify the most recent rules directly with:
                        </p>
                        <ul className="my-8 space-y-3 list-disc list-inside">
                            <li className="text-slate-700 dark:text-slate-300"><a href="https://www.sba.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Official SBA website</a></li>
                            <li className="text-slate-700 dark:text-slate-300">SBA-approved lenders</li>
                            <li className="text-slate-700 dark:text-slate-300">Licensed financial advisors</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            Professional Consultation Required
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            Before making any financial decisions or applying for financing, consult with:
                        </p>
                        <ul className="my-8 space-y-3 list-disc list-inside">
                            <li className="text-slate-700 dark:text-slate-300"><strong className="font-bold text-slate-900 dark:text-white">Licensed accountants</strong> for tax implications and financial analysis</li>
                            <li className="text-slate-700 dark:text-slate-300"><strong className="font-bold text-slate-900 dark:text-white">Business attorneys</strong> for legal and contract review</li>
                            <li className="text-slate-700 dark:text-slate-300"><strong className="font-bold text-slate-900 dark:text-white">Financial advisors</strong> for comprehensive financial planning</li>
                            <li className="text-slate-700 dark:text-slate-300"><strong className="font-bold text-slate-900 dark:text-white">SBA lenders</strong> for actual loan terms and qualifications</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            Your Responsibility
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            By using this calculator, you acknowledge that:
                        </p>
                        <ul className="my-8 space-y-3 list-disc list-inside">
                            <li className="text-slate-700 dark:text-slate-300">Results are estimates and not guarantees</li>
                            <li className="text-slate-700 dark:text-slate-300">You will verify all information with professional advisors</li>
                            <li className="text-slate-700 dark:text-slate-300">You understand the limitations of automated calculations</li>
                            <li className="text-slate-700 dark:text-slate-300">You will not rely solely on calculator results for financial decisions</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            Questions or Concerns
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            If you have questions about this disclaimer or our calculator, contact us at:
                        </p>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            <strong className="font-bold text-slate-900 dark:text-white">Email:</strong>{' '}
                            <a href="mailto:info@sbaloancalculator.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                                info@sbaloancalculator.com
                            </a>
                        </p>
                    </section>
                </div>
            </article>
        </div>
    );
}
