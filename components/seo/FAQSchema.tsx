interface FAQQuestion {
    id: string;
    question: string;
    answer: string;
}

interface FAQCategory {
    id: string;
    name: string;
    questions: FAQQuestion[];
}

interface FAQSchemaProps {
    categories: FAQCategory[];
}

export function FAQSchema({ categories }: FAQSchemaProps) {
    const allQuestions = categories.flatMap(category => category.questions);

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: allQuestions.map(q => ({
            '@type': 'Question',
            name: q.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: q.answer,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
