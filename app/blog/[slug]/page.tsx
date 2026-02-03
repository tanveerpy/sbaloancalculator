import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {
    CheckCircle2,
    TrendingUp,
    Clock,
    DollarSign,
    FileText,
    Calculator,
    AlertCircle,
    ArrowRight,
    ExternalLink
} from 'lucide-react';

// Article content with proper markdown
const articles: Record<string, {
    title: string;
    excerpt: string;
    content: string;
    category: string;
    publishedDate: string;
    keywords: string[];
    wordCount: number;
    readTime: number;
}> = {
    'complete-guide-sba-7a-loans': {
        title: 'Complete Guide to SBA 7(a) Loans in 2026',
        excerpt: 'Everything you need to know about SBA 7(a) loans: eligibility, rates, fees, application process, and DSCR requirements.',
        category: 'Guides',
        publishedDate: '2026-02-03',
        keywords: ['SBA 7(a) loan guide', 'small business financing', 'SBA eligibility'],
        wordCount: 3200,
        readTime: 14,
        content: `
## What is an SBA 7(a) Loan?

An **SBA 7(a) loan** is the most popular and versatile financing program offered by the U.S. Small Business Administration. The program helps small businesses secure loans from participating lenders by **guaranteeing 75-85% of the loan amount**, which significantly reduces the lender's risk.

This government backing makes it easier for businesses to qualify compared to conventional bank loans, especially for companies that may not meet traditional lending criteria.

### Why Choose an SBA 7(a) Loan?

| Benefit | Description |
|---------|-------------|
| **Lower down payments** | 10-20% vs 20-30% for conventional loans |
| **Longer repayment terms** | Up to 25 years for real estate |
| **Competitive rates** | Prime + 2.25-2.75% vs higher conventional rates |
| **Flexible use** | Working capital, equipment, real estate, debt refinancing |
| **Larger loan amounts** | Up to $5 million (vs typical $500K-$1M commercial loans) |

[Calculate your SBA 7(a) loan payment now →](/)

---

## Who Qualifies for an SBA 7(a) Loan?

Not every business will qualify for an SBA 7(a) loan. The SBA has specific eligibility requirements to ensure taxpayer funds are protected.

### Business Eligibility Requirements

Your business must meet **all** of the following criteria:

1. **For-profit business** operating in the United States
2. **Meets SBA size standards** (typically < 500 employees or < $7.5M annual revenue)
3. **Demonstrates ability to repay** the loan (DSCR ≥ 1.25)
4. **Has reasonable owner equity** to invest (10-20% down payment)
5. **Has exhausted other financing options** (SBA is lender of last resort)
6. **Sound business purpose** (no speculation or passive investments)

### Owner Requirements

Business owners with 20%+ ownership must have:

- **Good personal credit:** Typically 680+ FICO score (some lenders require 700+)
- **Relevant business experience:** Industry knowledge or management experience
- **Personal guarantee:** Willingness to personally guarantee the loan
- **U.S. citizenship or legal residency:** Valid work authorization

[Check if you qualify with our DSCR calculator →](/)

---

## Loan Amounts and Repayment Terms

The SBA sets **maximum loan terms** based on how you'll use the funds:

| Use of Funds | Maximum Term | Typical Loan Amount |
|--------------|--------------|---------------------|
| **Working capital** | 10 years | $50,000 - $500,000 |
| **Equipment** | 10 years (or useful life) | $100,000 - $1,000,000 |
| **Real estate** | 25 years | $500,000 - $5,000,000 |
| **Business acquisition** | 10 years | $200,000 - $2,000,000 |
| **Debt refinancing** | 10-25 years | Varies |

### Loan Amount Limits

- **Maximum:** $5,000,000 per borrower
- **SBA Express:** $500,000 maximum
- **SBA guarantee:** 85% for loans ≤ $150,000, 75% for loans > $150,000

---

## Interest Rates: How They're Calculated

SBA 7(a) loan interest rates are **not fixed by the government**. Instead, the SBA sets **maximum allowable rates** that lenders can charge.

### Rate Formula

\`\`\`
Interest Rate = Prime Rate + Lender's Margin
\`\`\`

**Current rates (2026):**
- **Prime Rate:** 6.75% (as of December 2025)
- **Allowed margin:** +2.25% to +4.75% depending on loan size and term

### Maximum Margin Breakdown

| Loan Amount | Term ≤ 7 Years | Term > 7 Years |
|-------------|----------------|----------------|
| **≤ $25,000** | Prime + 4.75% | Prime + 4.75% |
| **$25,001 - $50,000** | Prime + 3.50% | Prime + 3.50% |
| **> $50,000** | Prime + 2.25% | Prime + 2.75% |

### Example Rate Calculation

For a **$250,000 loan with a 10-year term:**
- Prime Rate: 6.75%
- Lender's margin: +2.75% (max for >$50K, >7 years)
- **Total rate: 9.50%**

[Use our calculator to see your exact rate →](/)

---

## Fees Breakdown: Understanding Total Loan Cost

SBA 7(a) loans include several fees beyond the interest rate. Understanding these costs is critical for accurate budgeting.

### SBA Guaranty Fee (FY 2026)

The **guaranty fee** is a one-time fee charged by the SBA to guarantee a portion of your loan.

| Guaranteed Amount | Fee Rate |
|-------------------|----------|
| **≤ $150,000** | 0% (no fee) |
| **$150,001 - $700,000** | 3.5% on guaranteed portion |
| **> $700,000 (portion ≤ $1M)** | 3.5% on first $1M guaranteed |
| **> $700,000 (portion > $1M)** | 3.75% on amount above $1M |

[Calculate your exact guaranty fee →](/)

---

## DSCR: The Key to Pre-Qualification

**Debt Service Coverage Ratio (DSCR)** is the single most important metric lenders use to evaluate your ability to repay an SBA loan.

### What is DSCR?

DSCR measures whether your business generates enough cash flow to cover **all debt obligations** (existing debts + proposed new loan).

\`\`\`
DSCR = Annual EBITDA ÷ Total Annual Debt Payments
\`\`\`

### DSCR Requirements

| DSCR Range | Qualification Status | Approval Likelihood |
|------------|----------------------|---------------------|
| **< 1.0** | Poor | Likely denial - unable to cover debt |
| **1.0 - 1.24** | Fair | Possible with strong collateral/guarantors |
| **1.25 - 1.49** | Good | Meets minimum requirements |
| **≥ 1.50** | Excellent | Strong approval odds, better terms |

**Most SBA lenders require DSCR ≥ 1.25**

[Check your DSCR instantly with our calculator →](/)

---

## Next Steps: Calculate Your SBA 7(a) Loan

Ready to see if an SBA 7(a) loan is right for your business? Our advanced calculator provides instant estimates.

### Related Resources

- [SBA 7(a) vs 504: Which Loan is Right for You?](/blog/sba-7a-vs-504-comparison)
- [Understanding SBA Guaranty Fees & Closing Costs](/blog/understanding-sba-guaranty-fees)
- [DSCR for SBA Loans: The Ultimate Guide](/blog/dscr-sba-loans-prequalification-guide)
- [Frequently Asked Questions](/faq)
    `,
    },
};

export async function generateStaticParams() {
    return Object.keys(articles).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = articles[slug];

    if (!article) {
        return {
            title: 'Article Not Found',
        };
    }

    return {
        title: `${article.title} | SBA Loan Calculator`,
        description: article.excerpt,
        keywords: article.keywords.join(', '),
        openGraph: {
            title: article.title,
            description: article.excerpt,
            type: 'article',
            publishedTime: article.publishedDate,
        },
    };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = articles[slug];

    if (!article) {
        notFound();
    }

    const keyTakeaways = [
        { icon: DollarSign, text: 'SBA 7(a) loans provide up to $5 million in financing for small businesses with government backing' },
        { icon: TrendingUp, text: 'Interest rates range from 9-12% (Prime Rate + 2.25-2.75%) as of 2026' },
        { icon: FileText, text: 'Guaranty fees for FY 2026 are 3.5-3.75% on the guaranteed portion' },
        { icon: CheckCircle2, text: 'Minimum DSCR of 1.25 is typically required for approval' },
        { icon: Clock, text: 'Application timeline is 60-90 days from submission to funding' },
        { icon: Calculator, text: 'Use our SBA loan calculator to estimate payments and check DSCR instantly' },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Breadcrumb */}
                <nav className="mb-8 text-sm flex items-center gap-2 text-slate-600 dark:text-slate-400">
                    <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Home
                    </Link>
                    <span>/</span>
                    <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Blog
                    </Link>
                    <span>/</span>
                    <span className="text-slate-900 dark:text-white">{article.title}</span>
                </nav>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider rounded-full">
                            {article.category}
                        </span>
                        <time className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {new Date(article.publishedDate).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                            })}
                        </time>
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                            {article.readTime} min read
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
                        {article.title}
                    </h1>

                    <p className="text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                        {article.excerpt}
                    </p>
                </header>

                {/* Key Takeaways - Premium Design */}
                <div className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-800 shadow-xl shadow-blue-100/50 dark:shadow-none">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-600 rounded-lg">
                            <CheckCircle2 className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                            Key Takeaways
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {keyTakeaways.map((item, index) => (
                            <div key={index} className="flex items-start gap-3 bg-white/60 dark:bg-slate-900/40 rounded-lg p-4">
                                <div className="mt-0.5 p-1.5 bg-blue-100 dark:bg-blue-900/40 rounded-lg">
                                    <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                                    {index === 5 ? (
                                        <>
                                            Use our{' '}
                                            <Link href="/" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                                                SBA loan calculator
                                            </Link>
                                            {' '}to estimate payments and check DSCR instantly
                                        </>
                                    ) : (
                                        item.text
                                    )}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Content with Fixed Tailwind Typography */}
                <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                            // Custom link rendering
                            a: ({ href, children }) => {
                                if (href?.startsWith('/')) {
                                    return (
                                        <Link href={href} className="inline-flex items-center gap-1 group text-blue-600 dark:text-blue-400 font-semibold no-underline hover:underline">
                                            {children}
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    );
                                }
                                return (
                                    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400">
                                        {children}
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                );
                            },
                            // Fix table rendering with proper styling
                            table: ({ children }) => (
                                <div className="my-8 overflow-x-auto">
                                    <table className="min-w-full border-collapse bg-white dark:bg-slate-900 shadow-lg rounded-xl overflow-hidden">
                                        {children}
                                    </table>
                                </div>
                            ),
                            thead: ({ children }) => (
                                <thead className="bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
                                    {children}
                                </thead>
                            ),
                            tbody: ({ children }) => (
                                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                                    {children}
                                </tbody>
                            ),
                            tr: ({ children }) => (
                                <tr className="hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors">
                                    {children}
                                </tr>
                            ),
                            th: ({ children }) => (
                                <th className="px-6 py-4 text-left text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider border-b-2 border-slate-300 dark:border-slate-600">
                                    {children}
                                </th>
                            ),
                            td: ({ children }) => (
                                <td className="px-6 py-4 text-base text-slate-700 dark:text-slate-300">
                                    {children}
                                </td>
                            ),
                            // Better heading styles
                            h2: ({ children }) => (
                                <h2 className="text-4xl font-bold mt-16 mb-8 pb-4 border-b-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white tracking-tight">
                                    {children}
                                </h2>
                            ),
                            h3: ({ children }) => (
                                <h3 className="text-2xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">
                                    {children}
                                </h3>
                            ),
                            // Fix paragraph and list styling
                            p: ({ children }) => (
                                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                                    {children}
                                </p>
                            ),
                            ul: ({ children }) => (
                                <ul className="my-8 space-y-3 list-disc list-inside">
                                    {children}
                                </ul>
                            ),
                            ol: ({ children }) => (
                                <ol className="my-8 space-y-3 list-decimal list-inside">
                                    {children}
                                </ol>
                            ),
                            li: ({ children }) => (
                                <li className="text-slate-700 dark:text-slate-300">
                                    {children}
                                </li>
                            ),
                            // Code blocks
                            code: ({ inline, children }: any) => {
                                if (inline) {
                                    return (
                                        <code className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 rounded font-mono text-sm font-semibold">
                                            {children}
                                        </code>
                                    );
                                }
                                return (
                                    <code className="block bg-slate-900  dark:bg-slate-950 text-slate-100 p-6 rounded-xl overflow-x-auto font-mono text-base border border-slate-700">
                                        {children}
                                    </code>
                                );
                            },
                            strong: ({ children }) => (
                                <strong className="font-bold text-slate-900 dark:text-white">
                                    {children}
                                </strong>
                            ),
                        }}
                    >
                        {article.content}
                    </ReactMarkdown>
                </div>


                {/* Premium CTA Section */}
                <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-12 shadow-2xl">
                    {/* Decorative background pattern */}
                    <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>

                    <div className="relative z-10 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
                            <Calculator className="w-8 h-8 text-white" />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                            Calculate Your SBA 7(a) Loan Payment
                        </h2>

                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            See your monthly payment, DSCR score, and total costs including 2026 guaranty fees. Get instant pre-qualification status.
                        </p>

                        <Link
                            href="/"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all text-lg shadow-2xl hover:shadow-white/20 hover:scale-105 transform"
                        >
                            Use Calculator Now
                            <ArrowRight className="w-5 h-5" />
                        </Link>

                        <div className="mt-8 flex items-center justify-center gap-8 text-blue-100">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                <span className="text-sm">Free to use</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                <span className="text-sm">Instant results</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5" />
                                <span className="text-sm">No registration</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Articles - Premium Grid */}
                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                        Continue Learning
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: 'SBA 7(a) vs 504: Which Loan is Right for You?', href: '/blog/sba-7a-vs-504-comparison' },
                            { title: 'Understanding SBA Guaranty Fees & Closing Costs', href: '/blog/understanding-sba-guaranty-fees' },
                            { title: 'DSCR for SBA Loans: The Ultimate Guide', href: '/blog/dscr-sba-loans-prequalification-guide' },
                            { title: 'Frequently Asked Questions', href: '/faq' },
                        ].map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="group flex items-center justify-between p-6 bg-slate-50 dark:bg-slate-900 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-800 hover:shadow-lg"
                            >
                                <span className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {link.title}
                                </span>
                                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Back Link */}
                <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-semibold text-lg transition-colors"
                    >
                        <ArrowRight className="w-5 h-5 rotate-180" />
                        Back to all articles
                    </Link>
                </div>

                {/* Footer Meta */}
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500 dark:text-slate-400">
                    <p>Last updated: {new Date(article.publishedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} • {article.wordCount.toLocaleString()} words</p>
                </div>
            </article>
        </div>
    );
}
