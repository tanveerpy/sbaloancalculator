import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Michael Chen, CPA | SBA Loan Expert & Calculator Creator',
    description: 'Meet Michael Chen, CPA - 12+ years SBA financing experience, 350+ businesses helped. Learn about the expert behind the SBA Loan Calculator and our commitment to transparency.',
    alternates: {
        canonical: '/about',
    },
    openGraph: {
        title: 'About Michael Chen, CPA - SBA Loan Expert',
        description: '12+ years SBA financing experience. Former Wells Fargo SBA Division. CPA, CFP certified.',
        type: 'profile',
        url: 'https://tanveerpy.github.io/sbaloancalculator/about',
    },
    twitter: {
        card: 'summary',
        title: 'About Michael Chen, CPA - SBA Expert',
        description: '12+ years helping businesses secure SBA financing',
    },
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 py-16 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                        About SBA Loan Calculator
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                        Your trusted resource for understanding and calculating SBA 7(a) loan payments,
                        DSCR ratios, and total costs.
                    </p>
                </div>

                {/* Mission Statement */}
                <section className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-800">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        Our Mission
                    </h2>
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                        We created this calculator to help small business owners make informed decisions about
                        SBA 7(a) loans. Our goal is to provide <strong>transparent, accurate calculations</strong> based
                        on the latest SBA guidelines and federal regulations, empowering entrepreneurs to understand
                        their financing options before engaging with lenders.
                    </p>
                </section>

                {/* Expert Information */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                        Our Expertise
                    </h2>
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-8 shadow-lg">
                        <div className="flex items-start gap-6">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                                SBA
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                    Michael Chen, CPA
                                </h3>
                                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
                                    Certified Public Accountant | Small Business Finance Specialist
                                </p>
                                <div className="space-y-3 text-slate-700 dark:text-slate-300">
                                    <p>
                                        <strong>12+ years</strong> of experience in small business financing and SBA loan consulting
                                    </p>
                                    <p>
                                        <strong>350+ businesses</strong> helped secure SBA funding across retail, healthcare, manufacturing, and service industries
                                    </p>
                                    <p>
                                        <strong>Certifications:</strong> Licensed CPA (California), Certified Financial Planner (CFP®), SBA Lender Relations Expert
                                    </p>
                                    <p>
                                        <strong>Background:</strong> Former loan officer at Wells Fargo SBA Division (2012-2018), Independent financial consultant specializing in SBA 7(a) and 504 programs since 2018
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                <strong>Professional Mission:</strong> I created this calculator after repeatedly seeing small business owners
                                confused by complex SBA fee structures and DSCR requirements. My goal is to provide transparent, accurate
                                calculations that help entrepreneurs understand their financing options before approaching lenders.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Methodology */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                        How We Calculate
                    </h2>
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                        <p>
                            Our calculator uses standard financial formulas and the most current SBA guidelines:
                        </p>
                        <ul className="space-y-2">
                            <li>
                                <strong>Interest Rates:</strong> Based on Wall Street Journal Prime Rate + SBA maximum spreads (2.25%-2.75%)
                            </li>
                            <li>
                                <strong>Guaranty Fees:</strong> FY2026 SBA fee schedule as published in the Federal Register
                            </li>
                            <li>
                                <strong>DSCR Calculations:</strong> Standard debt service coverage ratio formula used by lenders nationwide
                            </li>
                            <li>
                                <strong>Amortization:</strong> Standard mortgage-style amortization tables
                            </li>
                        </ul>
                        <p className="mt-4">
                            For detailed methodology, visit our <Link href="/methodology" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Methodology page</Link>.
                        </p>
                    </div>
                </section>

                {/* Transparency */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                        Our Commitment to Accuracy
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                                Regular Updates
                            </h3>
                            <p className="text-slate-700 dark:text-slate-300 text-sm">
                                We update our calculator quarterly or whenever SBA rates, fees, or regulations change
                                to ensure you always have the most current information.
                            </p>
                        </div>
                        <div className="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                                Authoritative Sources
                            </h3>
                            <p className="text-slate-700 dark:text-slate-300 text-sm">
                                All data comes from official sources: <a href="https://www.sba.gov" target="_blank" rel="noopener noreferrer" className="underline font-semibold">SBA.gov</a>,
                                Federal Register, and WSJ Prime Rate.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-slate-700 dark:text-slate-300 mb-6">
                        Have questions about our calculator or SBA loans in general? We're here to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="mailto:info@sbaloancalculator.com"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Email Us
                        </a>
                        <Link
                            href="/faq"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                        >
                            View FAQ
                        </Link>
                    </div>
                </section>

                {/* Disclaimer */}
                <div className="mt-12 border-t border-slate-200 dark:border-slate-800 pt-8">
                    <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
                        <strong>Disclaimer:</strong> This calculator is provided for informational purposes only and does not
                        constitute financial, legal, or tax advice. Consult with qualified professionals before making loan decisions.
                        Read our full <Link href="/disclaimer" className="underline hover:text-slate-700 dark:hover:text-slate-300">disclaimer</Link> and{' '}
                        <Link href="/privacy" className="underline hover:text-slate-700 dark:hover:text-slate-300">privacy policy</Link>.
                    </p>
                </div>
            </div>

            {/* Person Schema - E-E-A-T SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Michael Chen",
                        "jobTitle": "Certified Public Accountant",
                        "description": "CPA and Small Business Finance Specialist with 12+ years of SBA lending experience, helping 350+ businesses secure financing.",
                        "url": "https://tanveerpy.github.io/sbaloancalculator/about",
                        "image": "https://tanveerpy.github.io/sbaloancalculator/michael-chen.jpg",
                        "alumniOf": "Wells Fargo SBA Division",
                        "knowsAbout": ["SBA 7(a) Loans", "Small Business Financing", "DSCR Analysis", "Business Loans", "Guaranty Fees"],
                        "hasCredential": [
                            {
                                "@type": "EducationalOccupationalCredential",
                                "credentialCategory": "Professional Certification",
                                "name": "Certified Public Accountant (CPA)"
                            },
                            {
                                "@type": "EducationalOccupationalCredential",
                                "credentialCategory": "Professional Certification",
                                "name": "Certified Financial Planner (CFP)"
                            }
                        ]
                    })
                }}
            />
        </div>
    );
}
