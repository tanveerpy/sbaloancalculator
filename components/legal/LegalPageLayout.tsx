import Link from 'next/link';
import { FileText, ArrowLeft } from 'lucide-react';
import { ReactNode } from 'react';

interface LegalPageLayoutProps {
    title: string;
    lastUpdated: string;
    children: ReactNode;
}

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
    const legalPages = [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Disclaimer', href: '/disclaimer' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Back to Home */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-6"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Calculator
                </Link>

                {/* Header */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-8 mb-6">
                    <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex-shrink-0">
                            <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                                {title}
                            </h1>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Last updated: <time className="font-semibold">{lastUpdated}</time>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quick Navigation */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-6">
                    <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-3">
                        Legal Documents
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {legalPages.map((page) => (
                            <Link
                                key={page.href}
                                href={page.href}
                                className="inline-flex items-center px-3 py-1.5 bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                            >
                                {page.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <article className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 p-8 md:p-12 prose prose-slate dark:prose-invert max-w-none">
                    {children}
                </article>

                {/* Footer Note */}
                <div className="mt-6 text-center">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Questions about this document?{' '}
                        <a
                            href="mailto:info@sbaloancalculator.com"
                            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                        >
                            Contact us
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
