'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQQuestion {
    id: string;
    question: string;
    answer: string;
    relatedArticles?: string[];
    keywords?: string[];
}

interface FAQCategory {
    id: string;
    name: string;
    questions: FAQQuestion[];
}

interface FAQAccordionProps {
    categories: FAQCategory[];
}

export function FAQAccordion({ categories }: FAQAccordionProps) {
    const [activeCategory, setActiveCategory] = useState(categories[0]?.id || '');
    const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());
    const [searchQuery, setSearchQuery] = useState('');

    const toggleQuestion = (questionId: string) => {
        const newOpen = new Set(openQuestions);
        if (newOpen.has(questionId)) {
            newOpen.delete(questionId);
        } else {
            newOpen.add(questionId);
        }
        setOpenQuestions(newOpen);
    };

    const activeQuestions = categories.find(c => c.id === activeCategory)?.questions || [];
    const filteredQuestions = searchQuery
        ? activeQuestions.filter(q =>
            q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : activeQuestions;

    return (
        <div className="w-full">
            {/* Search Bar */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-6 border-b border-slate-200 dark:border-slate-700">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`px-4 py-2 text-sm font-semibold transition-colors border-b-2 ${activeCategory === category.id
                                ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                                : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400'
                            }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Questions */}
            <div className="space-y-3">
                {filteredQuestions.length === 0 ? (
                    <p className="text-center text-slate-500 dark:text-slate-400 py-8">
                        No FAQs found matching your search.
                    </p>
                ) : (
                    filteredQuestions.map((question) => (
                        <div
                            key={question.id}
                            className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleQuestion(question.id)}
                                className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                            >
                                <span className="text-lg font-semibold text-slate-900 dark:text-white pr-4">
                                    {question.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform ${openQuestions.has(question.id) ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            {openQuestions.has(question.id) && (
                                <div className="px-5 py-4 pt-0 border-t border-slate-200 dark:border-slate-700">
                                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                                        {question.answer}
                                    </p>

                                    {question.relatedArticles && question.relatedArticles.length > 0 && (
                                        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                                            <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-2">
                                                Related Articles:
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {question.relatedArticles.map((slug) => (
                                                    <a
                                                        key={slug}
                                                        href={`/blog/${slug}`}
                                                        className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                                                    >
                                                        Read more →
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>

            {/* CTA */}
            <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Still have questions?
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Use our SBA 7(a) loan calculator to see if you pre-qualify and get instant payment estimates.
                </p>
                <a
                    href="/"
                    className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                    Calculate My Loan Payment
                </a>
            </div>
        </div>
    );
}
