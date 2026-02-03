import { FAQAccordion } from '@/components/content/FAQAccordion';
import { FAQSchema } from '@/components/seo/FAQSchema';
import faqData from '@/content/faqs/sba-faqs.json';

export const metadata = {
    title: 'SBA 7(a) Loan FAQ | Common Questions Answered',
    description: 'Get answers to the most common questions about SBA 7(a) loans, including eligibility, interest rates, fees, DSCR requirements, and the application process.',
    keywords: 'SBA loan FAQ, 7(a) questions, SBA eligibility, guaranty fee, DSCR, loan calculator help',
    alternates: {
        canonical: '/faq',
    },
};

export default function FAQPage() {
    return (
        <>
            <FAQSchema categories={faqData.categories} />

            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            Everything you need to know about SBA 7(a) loans
                        </p>
                    </div>

                    {/* FAQ Component */}
                    <FAQAccordion categories={faqData.categories} />

                    {/* Bottom CTA */}
                    <div className="mt-12 text-center">
                        <p className="text-slate-600 dark:text-slate-400 mb-4">
                            Can't find what you're looking for?
                        </p>
                        <a
                            href="/"
                            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-lg"
                        >
                            Try Our SBA Loan Calculator
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
