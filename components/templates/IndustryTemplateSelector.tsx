'use client';

import { industryTemplates, type IndustryTemplate } from '@/data/industry-templates';
import { useState } from 'react';

interface IndustryTemplateSelectorProps {
    onSelectTemplate: (template: IndustryTemplate) => void;
}

export function IndustryTemplateSelector({ onSelectTemplate }: IndustryTemplateSelectorProps) {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const handleSelect = (template: IndustryTemplate) => {
        setSelectedId(template.id);
        onSelectTemplate(template);
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                Industry Templates
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
                Quick-start with pre-filled values based on typical loans for your industry
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {industryTemplates.map((template) => (
                    <button
                        key={template.id}
                        onClick={() => handleSelect(template)}
                        className={`
              p-4 rounded-lg border-2 text-left transition-all hover:shadow-md
              ${selectedId === template.id
                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                : 'border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600'
                            }
            `}
                    >
                        <div className="text-3xl mb-2">{template.icon}</div>
                        <h3 className="font-semibold text-slate-800 dark:text-white mb-1">
                            {template.name}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                            Avg. ${(template.averageLoanAmount / 1000).toFixed(0)}K
                        </p>
                    </button>
                ))}
            </div>

            {selectedId && (
                <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                    <h4 className="font-semibold text-slate-800 dark:text-white mb-3">
                        Industry Insights
                    </h4>
                    <ul className="space-y-2">
                        {industryTemplates
                            .find((t) => t.id === selectedId)
                            ?.insights.map((insight, idx) => (
                                <li
                                    key={idx}
                                    className="text-sm text-slate-600 dark:text-slate-400 flex items-start"
                                >
                                    <span className="text-blue-500 mr-2">•</span>
                                    {insight}
                                </li>
                            ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
