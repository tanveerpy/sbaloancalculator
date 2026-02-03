import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Scale, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Terms of Service | SBA Loan Calculator',
    description: 'Terms of Service for using the SBA 7(a) Loan Calculator',
    robots: 'noindex, nofollow',
    alternates: {
        canonical: '/terms',
    },
};

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Breadcrumb */}
                <nav className="mb-8 text-sm flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Home
                    </Link>
                    <span>/</span>
                    <span className="text-slate-900 dark:text-white">Terms of Service</span>
                </nav>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                            <Scale className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <time className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            Last updated: February 3, 2026
                        </time>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
                        Terms of Service
                    </h1>

                    <p className="text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                        Please read these terms carefully before using our SBA loan calculator
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
                            href="/disclaimer"
                            className="px-4 py-2 bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                        >
                            Disclaimer
                        </Link>
                    </div>
                </div>

                {/* Content */}
                <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            Acceptance of Terms
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            By accessing and using the SBA Loan Calculator website (&quot;Service&quot;), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            Description of Service
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            SBA Loan Calculator provides:
                        </p>
                        <ul className="my-8 space-y-3 list-disc list-inside">
                            <li className="text-slate-700 dark:text-slate-300">Free online calculator for SBA 7(a) loan payment estimates</li>
                            <li className="text-slate-700 dark:text-slate-300">DSCR (Debt Service Coverage Ratio) analysis tools</li>
                            <li className="text-slate-700 dark:text-slate-300">Educational content about SBA financing</li>
                            <li className="text-slate-700 dark:text-slate-300">Industry-specific loan templates and resources</li>
                        </ul>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            <strong className="font-bold text-slate-900 dark:text-white">Important:</strong> All calculations are performed client-side in your browser. We do not store your financial information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            Educational Purpose Only
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            <strong className="font-bold text-slate-900 dark:text-white">This Service provides educational information and calculation tools only.</strong> It does not constitute:
                        </p>
                        <ul className="my-8 space-y-3 list-disc list-inside">
                            <li className="text-slate-700 dark:text-slate-300">Financial advice or consulting</li>
                            <li className="text-slate-700 dark:text-slate-300">Legal advice</li>
                            <li className="text-slate-700 dark:text-slate-300">Tax advice</li>
                            <li className="text-slate-700 dark:text-slate-300">An offer to lend or broker loans</li>
                            <li className="text-slate-700 dark:text-slate-300">Professional services of any kind</li>
                        </ul>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            You should consult with qualified financial advisors, accountants, and attorneys before making any business financing decisions.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            No Guarantee of Accuracy
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            While we strive for accuracy, the calculator provides <strong className="font-bold text-slate-900 dark:text-white">estimates only</strong>. Actual loan terms, interest rates, fees, and qualification requirements may vary significantly based on:
                        </p>
                        <ul className="my-8 space-y-3 list-disc list-inside">
                            <li className="text-slate-700 dark:text-slate-300">Individual lender policies</li>
                            <li className="text-slate-700 dark:text-slate-300">Your specific financial situation and credit profile</li>
                            <li className="text-slate-700 dark:text-slate-300">Current market conditions and SBA regulations</li>
                            <li className="text-slate-700 dark:text-slate-300">Business type and industry factors</li>
                        </ul>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            <strong className="font-bold text-slate-900 dark:text-white">You must verify all calculations and terms with actual SBA-approved lenders.</strong>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            User Responsibilities
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            You agree to:
                        </p>
                        <ul className="my-8 space-y-3 list-disc list-inside">
                            <li className="text-slate-700 dark:text-slate-300">Use the Service for lawful purposes only</li>
                            <li className="text-slate-700 dark:text-slate-300">Verify all calculator results with qualified lenders and professionals</li>
                            <li className="text-slate-700 dark:text-slate-300">Not rely solely on calculator estimates for financial decisions</li>
                            <li className="text-slate-700 dark:text-slate-300">Understand that calculator results are based on inputs you provide</li>
                            <li className="text-slate-700 dark:text-slate-300">Not attempt to reverse-engineer, decompile, or extract source code</li>
                            <li className="text-slate-700 dark:text-slate-300">Not use the Service to harm, harass, or impersonate others</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            Intellectual Property
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            All content on this website, including but not limited to:
                        </p>
                        <ul className="my-8 space-y-3 list-disc list-inside">
                            <li className="text-slate-700 dark:text-slate-300">Calculator code and algorithms</li>
                            <li className="text-slate-700 dark:text-slate-300">Articles, guides, and educational content</li>
                            <li className="text-slate-700 dark:text-slate-300">Design, layout, and graphics</li>
                            <li className="text-slate-700 dark:text-slate-300">Trademarks and branding</li>
                        </ul>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            is owned by SBA Loan Calculator or its licensors and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without explicit permission.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            Limitation of Liability
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            <strong className="font-bold text-slate-900 dark:text-white">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</strong>
                        </p>
                        <ul className="my-8 space-y-3 list-disc list-inside">
                            <li className="text-slate-700 dark:text-slate-300">The Service is provided &quot;AS IS&quot; without warranties of any kind, express or implied</li>
                            <li className="text-slate-700 dark:text-slate-300">We are not liable for any financial losses, missed opportunities, or damages resulting from use of the calculator</li>
                            <li className="text-slate-700 dark:text-slate-300">We are not responsible for decisions made based on calculator estimates</li>
                            <li className="text-slate-700 dark:text-slate-300">We are not liable for technical errors, inaccuracies, or service interruptions</li>
                            <li className="text-slate-700 dark:text-slate-300">Total liability, if any, is limited to $100 USD</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            Third-Party Links and Resources
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            Our Service contains links to third-party websites (including SBA.gov and lender platforms). We:
                        </p>
                        <ul className="my-8 space-y-3 list-disc list-inside">
                            <li className="text-slate-700 dark:text-slate-300">Do not control or endorse these external sites</li>
                            <li className="text-slate-700 dark:text-slate-300">Are not responsible for their content, accuracy, or privacy practices</li>
                            <li className="text-slate-700 dark:text-slate-300">Provide links for convenience only</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            Service Availability
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            We strive to maintain uptime, but we:
                        </p>
                        <ul className="my-8 space-y-3 list-disc list-inside">
                            <li className="text-slate-700 dark:text-slate-300">Do not guarantee uninterrupted or error-free service</li>
                            <li className="text-slate-700 dark:text-slate-300">May modify, suspend, or discontinue features at any time</li>
                            <li className="text-slate-700 dark:text-slate-300">May perform maintenance without advance notice</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            Indemnification
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            You agree to indemnify and hold harmless SBA Loan Calculator from any claims, losses, or damages arising from:
                        </p>
                        <ul className="my-8 space-y-3 list-disc list-inside">
                            <li className="text-slate-700 dark:text-slate-300">Your use of the Service</li>
                            <li className="text-slate-700 dark:text-slate-300">Your violation of these Terms</li>
                            <li className="text-slate-700 dark:text-slate-300">Your violation of any third-party rights</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            Governing Law
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            These Terms are governed by the laws of the United States. Any disputes shall be resolved in accordance with U.S. federal law and applicable state laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            Changes to Terms
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            We reserve the right to modify these Terms at any time. The &quot;Last Updated&quot; date indicates when changes were made. Continued use of the Service after changes constitutes acceptance of the updated Terms.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            Severability
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            If any provision of these Terms is found to be unenforceable, the remaining provisions will remain in full effect.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            Contact Information
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            For questions about these Terms of Service, please contact:
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
