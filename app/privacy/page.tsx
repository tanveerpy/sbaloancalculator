import { Metadata } from 'next';
import Link from 'next/link';
import { FileText, Shield, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Privacy Policy | SBA Loan Calculator',
    description: 'Privacy policy for the SBA 7(a) Loan Calculator - Learn how we handle your information',
    robots: 'noindex, nofollow',
    alternates: {
        canonical: '/privacy',
    },
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Breadcrumb */}
                <nav className="mb-8 text-sm flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Home
                    </Link>
                    <span>/</span>
                    <span className="text-slate-900 dark:text-white">Privacy Policy</span>
                </nav>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                            <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <time className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            Last updated: February 3, 2026
                        </time>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
                        Privacy Policy
                    </h1>

                    <p className="text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                        Learn how we handle your information and protect your privacy when using our calculator
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
                            href="/terms"
                            className="px-4 py-2 bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                        >
                            Terms of Service
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
                            Introduction
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            Welcome to SBA Loan Calculator. We respect your privacy and are committed to being transparent about how our website works. This Privacy Policy explains our practices regarding data on our website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            Information We Collect
                        </h2>

                        <h3 className="text-2xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">Calculator Data</h3>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            <strong className="font-bold text-slate-900 dark:text-white">Important:</strong> All loan calculations are performed <strong className="font-bold text-slate-900 dark:text-white">entirely in your browser</strong> (client-side). We do not collect, store, or transmit any of your loan calculation inputs or results to our servers. Your financial information stays on your device.
                        </p>

                        <h3 className="text-2xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">Analytics Information</h3>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            We may use analytics services (such as Google Analytics) to understand how visitors use our website. This may include:
                        </p>
                        <ul className="my-8 space-y-3 list-disc list-inside">
                            <li className="text-slate-700 dark:text-slate-300">Pages visited and time spent on each page</li>
                            <li className="text-slate-700 dark:text-slate-300">Browser type, operating system, and device information</li>
                            <li className="text-slate-700 dark:text-slate-300">Approximate geographic location (city/region level)</li>
                            <li className="text-slate-700 dark:text-slate-300">Referring websites and search terms</li>
                        </ul>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            This information is aggregated and anonymized. It helps us improve the calculator and create better content.
                        </p>

                        <h3 className="text-2xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">Cookies</h3>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            Our website may use cookies for:
                        </p>
                        <ul className="my-8 space-y-3 list-disc list-inside">
                            <li className="text-slate-700 dark:text-slate-300"><strong className="font-bold text-slate-900 dark:text-white">Theme Preference:</strong> Storing your dark/light mode preference</li>
                            <li className="text-slate-700 dark:text-slate-300"><strong className="font-bold text-slate-900 dark:text-white">Analytics:</strong> Google Analytics cookies (if analytics are enabled)</li>
                        </ul>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            You can disable cookies in your browser settings, though this may affect some functionality like theme preferences.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            How We Use Information
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            Any information we collect through analytics is used solely to:
                        </p>
                        <ul className="my-8 space-y-3 list-disc list-inside">
                            <li className="text-slate-700 dark:text-slate-300">Understand which features are most useful to visitors</li>
                            <li className="text-slate-700 dark:text-slate-300">Identify and fix technical issues</li>
                            <li className="text-slate-700 dark:text-slate-300">Create educational content that addresses common questions</li>
                            <li className="text-slate-700 dark:text-slate-300">Improve the overall user experience</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            Information Sharing
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            <strong className="font-bold text-slate-900 dark:text-white">We do not sell, rent, or share your personal information with third parties</strong>, except:
                        </p>
                        <ul className="my-8 space-y-3 list-disc list-inside">
                            <li className="text-slate-700 dark:text-slate-300"><strong className="font-bold text-slate-900 dark:text-white">Analytics providers</strong> (e.g., Google Analytics) who process data on our behalf under strict privacy agreements</li>
                            <li className="text-slate-700 dark:text-slate-300">When required by law or to protect our legal rights</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            Third-Party Links
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            Our website contains links to third-party websites, including official SBA resources (SBA.gov) and lender platforms. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            Data Security
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            Since we do not collect or store your loan calculation data, there is no risk of that information being compromised. For any analytics data we collect, we use industry-standard security practices.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            Your Rights
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            You have the right to:
                        </p>
                        <ul className="my-8 space-y-3 list-disc list-inside">
                            <li className="text-slate-700 dark:text-slate-300">Use our calculator without providing any personal information</li>
                            <li className="text-slate-700 dark:text-slate-300">Disable cookies in your browser</li>
                            <li className="text-slate-700 dark:text-slate-300">Request information about any analytics data we may have collected</li>
                            <li className="text-slate-700 dark:text-slate-300">Contact us with any privacy-related questions</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            Children&apos;s Privacy
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            Our service is not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            Changes to This Policy
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            We may update this Privacy Policy from time to time. The &quot;Last Updated&quot; date at the top indicates when changes were last made. Continued use of the website after changes constitutes acceptance of the updated policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                            Contact Us
                        </h2>
                        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                            If you have questions about this Privacy Policy, please contact us at:
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
