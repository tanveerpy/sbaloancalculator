export interface IndustryTemplate {
    id: string;
    name: string;
    icon: string;
    description: string;
    averageLoanAmount: number;
    typicalTerm: number;
    averageRate: number;
    typicalEBITDA: number;
    existingDebt: number;
    insights: string[];
}

export const industryTemplates: IndustryTemplate[] = [
    {
        id: 'restaurant',
        name: 'Restaurant & Food Service',
        icon: '🍽️',
        description: 'Full-service restaurants, cafes, food trucks, and catering businesses',
        averageLoanAmount: 350000,
        typicalTerm: 10,
        averageRate: 8.5,
        typicalEBITDA: 120000,
        existingDebt: 30000,
        insights: [
            'Average SBA 7(a) loan for restaurants: $250K-$500K',
            'Typical use: Equipment, renovation, working capital',
            'DSCR requirement: Minimum 1.25 (1.5+ preferred)',
            'Term: 10 years for equipment, 25 years for real estate',
        ],
    },
    {
        id: 'retail',
        name: 'Retail Store',
        icon: '🛍️',
        description: 'Brick-and-mortar retail, e-commerce, specialty shops',
        averageLoanAmount: 275000,
        typicalTerm: 10,
        averageRate: 8.0,
        typicalEBITDA: 95000,
        existingDebt: 25000,
        insights: [
            'Average SBA 7(a) loan for retail: $150K-$400K',
            'Typical use: Inventory, fixtures, expansion',
            'Seasonal businesses: Factor in cash flow variations',
            'E-commerce: Lower DSCR acceptable with proven online sales',
        ],
    },
    {
        id: 'healthcare',
        name: 'Healthcare & Medical',
        icon: '🏥',
        description: 'Medical practices, dental offices, urgent care, veterinary clinics',
        averageLoanAmount: 500000,
        typicalTerm: 15,
        averageRate: 7.5,
        typicalEBITDA: 200000,
        existingDebt: 50000,
        insights: [
            'Average SBA 7(a) loan for healthcare: $400K-$750K',
            'Typical use: Medical equipment, practice acquisition',
            'Strong approval rates due to recession-resistant sector',
            'Equipment financing: Up to 100% loan-to-value',
        ],
    },
    {
        id: 'professional-services',
        name: 'Professional Services',
        icon: '💼',
        description: 'Consulting, legal, accounting, marketing agencies',
        averageLoanAmount: 200000,
        typicalTerm: 7,
        averageRate: 8.25,
        typicalEBITDA: 150000,
        existingDebt: 20000,
        insights: [
            'Average SBA 7(a) loan for services: $100K-$300K',
            'Typical use: Working capital, technology, talent acquisition',
            'Lower collateral requirements for established firms',
            'Personal guarantee typically required',
        ],
    },
    {
        id: 'manufacturing',
        name: 'Manufacturing',
        icon: '🏭',
        description: 'Light manufacturing, assembly, production facilities',
        averageLoanAmount: 750000,
        typicalTerm: 20,
        averageRate: 7.75,
        typicalEBITDA: 300000,
        existingDebt: 80000,
        insights: [
            'Average SBA 7(a) loan for manufacturing: $500K-$1.5M',
            'Typical use: Machinery, facility expansion, automation',
            'Longer terms available for real estate and heavy equipment',
            'Strong collateral position with equipment and inventory',
        ],
    },
    {
        id: 'construction',
        name: 'Construction & Trades',
        icon: '🔨',
        description: 'General contractors, specialty trades, landscaping',
        averageLoanAmount: 400000,
        typicalTerm: 10,
        averageRate: 8.75,
        typicalEBITDA: 140000,
        existingDebt: 45000,
        insights: [
            'Average SBA 7(a) loan for construction: $250K-$600K',
            'Typical use: Equipment, vehicles, bonding capacity',
            'Requires: 2+ years in business, strong backlog',
            'Seasonal cash flow: Factor in payment timing',
        ],
    },
    {
        id: 'hospitality',
        name: 'Hospitality & Lodging',
        icon: '🏨',
        description: 'Hotels, motels, bed & breakfasts, event venues',
        averageLoanAmount: 1200000,
        typicalTerm: 25,
        averageRate: 7.5,
        typicalEBITDA: 350000,
        existingDebt: 100000,
        insights: [
            'Average SBA 7(a) loan for hospitality: $750K-$2M',
            'Typical use: Property acquisition, renovation, expansion',
            'Real estate portion: Up to 25-year term',
            'RevPAR and occupancy rates critical for approval',
        ],
    },
    {
        id: 'franchise',
        name: 'Franchise Business',
        icon: '⭐',
        description: 'Fast food, fitness, automotive, cleaning franchises',
        averageLoanAmount: 450000,
        typicalTerm: 10,
        averageRate: 8.0,
        typicalEBITDA: 160000,
        existingDebt: 35000,
        insights: [
            'Average SBA 7(a) loan for franchises: $300K-$700K',
            'Typical use: Franchise fee, build-out, equipment',
            'Must be on SBA Franchise Directory for streamlined approval',
            'Territory exclusivity and brand recognition boost approval odds',
        ],
    },
];
