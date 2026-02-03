import { industryTemplates } from '@/data/industry-templates';

export async function generateStaticParams() {
    return industryTemplates.map((template) => ({
        industry: template.id,
    }));
}

export async function generateMetadata({ params }: { params: { industry: string } }) {
    const template = industryTemplates.find((t) => t.id === params.industry);

    if (!template) {
        return {
            title: 'Industry Not Found',
        };
    }

    return {
        title: `${template.name} SBA 7(a) Loan Calculator | Free Tool`,
        description: `Calculate SBA 7(a) loan payments for ${template.name} businesses. ${template.description}. Get instant quotes with typical ${template.name.toLowerCase()} loan terms.`,
        keywords: `${template.name} SBA loan, ${template.name} business loan calculator, SBA 7(a) ${template.name}, ${template.name} financing`,
    };
}

export default function IndustryPage({ params }: { params: { industry: string } }) {
    const template = industryTemplates.find((t) => t.id === params.industry);

    if (!template) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl">Industry not found</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* SEO-friendly header */}
                <div className="text-center mb-12">
                    <div className="text-6xl mb-4">{template.icon}</div>
                    <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        {template.name} SBA 7(a) Loan Calculator
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                        {template.description}
                    </p>
                </div>

                {/* Industry-specific insights */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                        Industry Insights for {template.name}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Typical Loan Amount</p>
                            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                ${(template.averageLoanAmount).toLocaleString()}
                            </p>
                        </div>
                        <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Average Term</p>
                            <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                                {template.typicalTerm} years
                            </p>
                        </div>
                        <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Typical Rate</p>
                            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                                {template.averageRate}%
                            </p>
                        </div>
                        <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Typical EBITDA</p>
                            <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                                ${template.typicalEBITDA.toLocaleString()}
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
                        <h3 className="font-semibold text-slate-800 dark:text-white mb-4">
                            Key Information for {template.name} Businesses
                        </h3>
                        <ul className="space-y-3">
                            {template.insights.map((insight, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-start text-slate-600 dark:text-slate-400"
                                >
                                    <svg
                                        className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    {insight}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CTA to main calculator */}
                <div className="text-center">
                    <a
                        href={`/?template=${template.id}`}
                        className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all text-lg"
                    >
                        Calculate Your {template.name} Loan →
                    </a>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
                        Pre-filled with typical {template.name.toLowerCase()} values
                    </p>
                </div>

                {/* SEO content */}
                <div className="mt-12 prose dark:prose-invert max-w-none">
                    <h2>About SBA 7(a) Loans for {template.name} Businesses</h2>
                    <p>
                        The SBA 7(a) loan program is one of the most popular financing options for {template.name.toLowerCase()}
                        businesses looking to expand, purchase equipment, or improve working capital. With loan amounts up to $5 million
                        and terms extending to 25 years for real estate, these government-backed loans offer competitive rates and
                        favorable terms.
                    </p>

                    <h3>Why Choose an SBA 7(a) Loan for Your {template.name} Business?</h3>
                    <ul>
                        <li><strong>Lower down payments:</strong> As little as 10% down compared to 20-30% for conventional loans</li>
                        <li><strong>Longer repayment terms:</strong> Reduce monthly payments with extended terms</li>
                        <li><strong>Government guarantee:</strong> Reduces lender risk, improving approval odds</li>
                        <li><strong>Flexible use of funds:</strong> Equipment, working capital, real estate, and more</li>
                    </ul>

                    <h3>How to Qualify</h3>
                    <p>
                        To qualify for an SBA 7(a) loan for your {template.name.toLowerCase()} business, you'll typically need:
                    </p>
                    <ul>
                        <li>For-profit business operating in the United States</li>
                        <li>Owner equity investment (typically 10-20%)</li>
                        <li>Demonstrated ability to repay (DSCR of 1.25 or higher)</li>
                        <li>Good personal and business credit history</li>
                        <li>No other financing options available on reasonable terms</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
