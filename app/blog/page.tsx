import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

// Article metadata type
interface Article {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    publishedDate: string;
    image: string;
    imageAlt: string;
}

// Article list (this will be dynamically generated from MDX files later)
const articles: Article[] = [
    {
        slug: 'complete-guide-sba-7a-loans',
        title: 'Complete Guide to SBA 7(a) Loans in 2026',
        excerpt: 'Everything you need to know about SBA 7(a) loans: eligibility, rates, fees, application process, and DSCR requirements. Your comprehensive resource for SBA financing.',
        category: 'Guides',
        readTime: '12 min read',
        publishedDate: '2026-02-03',
        image: '/images/blog/sba-loan-guide.png',
        imageAlt: 'SBA 7(a) loan concept illustration',
    },
    {
        slug: 'sba-7a-vs-504-comparison',
        title: 'SBA 7(a) vs 504: Choosing the Right Loan for Your Business',
        excerpt: 'Compare SBA 7(a) and 504 loans to determine which program best fits your business needs. Includes decision tree and real-world scenarios.',
        category: 'Comparisons',
        readTime: '10 min read',
        publishedDate: '2026-02-03',
        image: '/images/blog/sba-7a-vs-504.png',
        imageAlt: 'SBA 7(a) vs 504 comparison',
    },
    {
        slug: 'understanding-sba-guaranty-fees',
        title: 'Understanding SBA Guaranty Fees & Closing Costs (2026 Guide)',
        excerpt: 'Learn how SBA guaranty fees are calculated for FY 2026, what closing costs to expect, and how these fees impact your total loan cost.',
        category: 'Fees & Costs',
        readTime: '8 min read',
        publishedDate: '2026-02-03',
        image: '/images/blog/guaranty-fees.png',
        imageAlt: 'SBA guaranty fee structure',
    },
    {
        slug: 'dscr-requirements-pre-qualification',
        title: 'DSCR for SBA Loans: The Ultimate Pre-Qualification Guide',
        excerpt: 'Master DSCR calculations and learn how to pre-qualify for SBA loans. Includes industry benchmarks and strategies to improve your debt service coverage ratio.',
        category: 'Pre-Qualification',
        readTime: '11 min read',
        publishedDate: '2026-02-03',
        image: '/images/blog/dscr-guide.png',
        imageAlt: 'DSCR calculation dashboard',
    },
    {
        slug: 'industry-specific-sba-loan-strategies',
        title: 'Industry-Specific SBA 7(a) Loan Strategies',
        excerpt: 'Tailored SBA loan strategies for 12 industries including restaurants, retail, manufacturing, healthcare, and more. Use our industry templates to get started.',
        category: 'Industry Guides',
        readTime: '14 min read',
        publishedDate: '2026-02-03',
    },
];

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SBA Loan Guides & Expert Articles | Calculator Blog 2026',
    description: 'Expert guides on SBA 7(a) loans, DSCR requirements, guaranty fees, and financing strategies. Written by CPA Michael Chen. Learn how to qualify and maximize your SBA financing.',
    keywords: ['SBA loan guides', '7(a) resources', 'SBA eligibility', 'DSCR guide', 'guaranty fees', 'business financing', 'SBA 7a vs 504'],
    alternates: {
        canonical: '/blog',
    },
    openGraph: {
        title: 'SBA Loan Expert Guides & Resources',
        description: 'Comprehensive guides on SBA financing, DSCR pre-qualification, and small business loans by CPA Michael Chen',
        type: 'website',
        url: 'https://tanveerpy.github.io/sbaloancalculator/blog',
    },
    twitter: {
        card: 'summary',
        title: 'SBA Loan Guides & Resources',
        description: 'Expert guides on SBA 7(a) loans and small business financing',
    },
};

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                        SBA Loan Guides & Resources
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Expert insights on SBA 7(a) loans to help you make informed financing decisions
                    </p>
                </div>

                {/* Article Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {articles.map((article) => (
                        <Link
                            key={article.slug}
                            href={`/blog/${article.slug}`}
                            className="group bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700 overflow-hidden"
                        >
                            {/* Thumbnail Image */}
                            <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-700">
                                <Image
                                    src={article.image}
                                    alt={article.imageAlt}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                                        {article.category}
                                    </span>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">
                                        {article.readTime}
                                    </span>
                                </div>

                                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {article.title}
                                </h2>

                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">
                                    {article.excerpt}
                                </p>

                                <div className="flex items-center justify-between">
                                    <time className="text-xs text-slate-500 dark:text-slate-400">
                                        {new Date(article.publishedDate).toLocaleDateString('en-US', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric',
                                        })}
                                    </time>
                                    <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold group-hover:underline">
                                        Read more →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center p-8 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-900 rounded-2xl shadow-xl text-white">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Ready to Calculate Your SBA Loan?
                    </h2>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        Use our advanced calculator to see monthly payments, DSCR, and total costs—including 2026 guaranty fees.
                    </p>
                    <Link
                        href="/"
                        className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors text-lg"
                    >
                        Calculate My Loan Payment
                    </Link>
                </div>
            </div>
        </div>
    );
}
