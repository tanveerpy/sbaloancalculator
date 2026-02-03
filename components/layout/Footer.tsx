import Link from 'next/link';
import { Calculator, Mail, ExternalLink } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        resources: [
            { name: 'SBA Loan Calculator', href: '/' },
            { name: 'Blog & Guides', href: '/blog' },
            { name: 'FAQ', href: '/faq' },
            { name: 'About Us', href: '/about' },
            { name: 'Methodology', href: '/methodology' },
        ],
        articles: [
            { name: 'Complete SBA 7(a) Guide', href: '/blog/complete-guide-sba-7a-loans' },
            { name: 'SBA 7(a) vs 504', href: '/blog/sba-7a-vs-504-comparison' },
            { name: 'Understanding Guaranty Fees', href: '/blog/understanding-sba-guaranty-fees' },
        ],
        legal: [
            { name: 'Privacy Policy', href: '/privacy' },
            { name: 'Terms of Service', href: '/terms' },
            { name: 'Disclaimer', href: '/disclaimer' },
        ],
        external: [
            { name: 'SBA.gov', href: 'https://www.sba.gov/', external: true },
            { name: 'SBA Lender Match', href: 'https://www.sba.gov/funding-programs/loans/lender-match', external: true },
        ],
    };

    return (
        <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-3 group mb-4">
                            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg">
                                <Calculator className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                                    SBA Loan Calculator
                                </span>
                                <span className="text-xs text-slate-500 dark:text-slate-400">
                                    7(a) Loan Tools & Resources
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            Free SBA 7(a) loan calculator with DSCR analysis, payment estimates, and comprehensive guides to help small businesses secure financing.
                        </p>
                        <a
                            href="mailto:info@sbaloancalculator.com"
                            className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            <Mail className="w-4 h-4" />
                            info@sbaloancalculator.com
                        </a>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Popular Articles Column */}
                    <div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                            Popular Articles
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.articles.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Official Resources Column */}
                    <div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">
                            Official Resources
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.external.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1"
                                    >
                                        {link.name}
                                        <ExternalLink className="w-3 h-3" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 mt-6">
                            Legal
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-slate-500 dark:text-slate-400 text-center md:text-left">
                            © {currentYear} SBA Loan Calculator. All rights reserved.
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 text-center md:text-right max-w-2xl">
                            Disclaimer: This calculator provides estimates only. Actual loan terms may vary. Not affiliated with the U.S. Small Business Administration.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
