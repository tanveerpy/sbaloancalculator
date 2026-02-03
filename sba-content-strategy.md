# SBA 7(a) Loan Calculator - Content Strategy Plan

## Project Type: WEB

## Overview
Implement a comprehensive content marketing strategy to establish the SBA 7(a) Loan Calculator as the **most authoritative, user-friendly, and conversion-optimized** SBA loan resource in 2026. The strategy leverages competitive audit insights to fill content gaps and differentiate through:

1. **Industry-specific templates** (unique competitive advantage)
2. **DSCR pre-qualification** (reduces application anxiety)
3. **Visual financial breakdowns** (superior UX vs. text-heavy competitors)
4. **Prime + margin education** (demystifies rate calculations)

## Success Criteria

| Metric | Target | Timeline | Verification |
|--------|--------|----------|--------------|
| **Organic traffic** | +200% from baseline | 6 months | Google Analytics |
| **Calculator engagement** | 60%+ of visitors use tool | 3 months | Event tracking |
| **FAQ interactions** | 40%+ read at least 1 FAQ | 3 months | Scroll depth + click tracking |
| **Article backlinks** | 15+ referring domains | 6 months | Ahrefs/SEMrush |
| **Conversion rate** | 5%+ (calculator → contact/apply) | 6 months | Form submissions |
| **Core Web Vitals** | All green (LCP < 2.5s, CLS < 0.1) | Immediate | Lighthouse |

## Strategic Decisions (Auto-Applied)

### 1. Content Goal & Conversion Path
**Decision:** Dual-funnel approach
- **SEO funnel:** Organic traffic → Educational content → Calculator → Apply
- **Direct funnel:** Calculator users → Contextual education → Apply

**Conversion path:**
```
Organic Search → Article/FAQ → Calculator (pre-filled) → Results → CTA ("Apply Now" / "Get Pre-Qualified")
```

### 2. Target Audience Segmentation

| Persona | Content Type | Intent | Priority |
|---------|--------------|--------|----------|
| **Researching borrowers** | Pillar articles, FAQs | "What is SBA 7(a)" | P1 (SEO) |
| **Active applicants** | Calculator-first, tooltips | "How much can I borrow" | P0 (Conversion) |
| **Comparing options** | Comparison articles | "7(a) vs 504" | P2 (Differentiation) |

### 3. Article Structure Strategy
**Mixed approach:**
- **5 Pillar articles** (2,000–3,000 words, comprehensive, link magnets)
- **10 Supporting articles** (800–1,200 words, topic-focused, internal links to pillars)

### 4. Technical Integration
**Yes to both:**
- Deep-link calculator pre-fills (e.g., `/calculator?template=restaurant&amount=250000`)
- Embedded mini-tools (guaranty fee calculator snippet in relevant articles)

### 5. Competitive Differentiation
**Unique angle:** "Industry-First Calculator"
- Competitors: Generic inputs → Our tool: Industry templates (12 sectors)
- Competitors: Payment only → Our tool: DSCR + pre-qualification
- Competitors: Tables → Our tool: Interactive charts (Recharts)

### 6. Homepage Priority
**Hero calculator dominates** (60% above-fold)
- Below fold: Industry templates → Educational content → Social proof

---

## Tech Stack

| Component | Technology | Rationale |
|-----------|------------|-----------|
| **Content management** | MDX files in `/content/articles/` | Static, fast, version-controlled |
| **Article routing** | Next.js App Router `/blog/[slug]` | SEO-friendly URLs, SSG |
| **FAQ component** | Accordion with `framer-motion` | Smooth UX, `<details>` semantic HTML |
| **Schema markup** | `next-seo` + JSON-LD | Rich snippets (FAQ, Article, BreadcrumbList) |
| **Analytics** | Google Analytics 4 + custom events | Track calculator → article → conversion flow |
| **Search functionality** | Client-side search (Fuse.js) or Algolia | Fast FAQ/article filtering |

---

## File Structure

```
d:\SBA 7(a) Loan Calculator\
├── app\
│   ├── blog\
│   │   ├── page.tsx                 # Blog index (article list)
│   │   └── [slug]\
│   │       └── page.tsx             # Article template (dynamic route)
│   ├── faq\
│   │   └── page.tsx                 # FAQ page
│   └── page.tsx                     # Homepage (update content)
├── components\
│   ├── content\
│   │   ├── ArticleCard.tsx          # Blog post preview card
│   │   ├── FAQAccordion.tsx         # Expandable FAQ component
│   │   ├── TableOfContents.tsx      # Article navigation
│   │   └── RelatedArticles.tsx      # Cross-linking widget
│   ├── seo\
│   │   ├── ArticleSchema.tsx        # JSON-LD for Article
│   │   └── FAQSchema.tsx            # JSON-LD for FAQ
│   └── embeds\
│       └── MiniGuarantyFeeCalc.tsx  # Embeddable mini-calculator
├── content\
│   ├── articles\
│   │   ├── complete-guide-sba-7a-loans.mdx
│   │   ├── sba-7a-vs-504-comparison.mdx
│   │   ├── understanding-sba-guaranty-fees.mdx
│   │   └── ...                      # (15 total MDX files)
│   └── faqs\
│       └── sba-faqs.json            # Structured FAQ data
├── lib\
│   ├── mdx.ts                       # MDX processing utilities
│   └── seo-config.ts                # Default SEO metadata
└── public\
    └── images\
        └── articles\                # Article hero images (generated)
```

---

## Homepage Content Architecture

### Section 1: Hero (Above Fold)
**Layout:** Calculator-first (full width)

```markdown
# SBA 7(a) Loan Calculator
### Real-time calculations with DSCR pre-qualification

[Industry Template Selector]
[Calculator Interface - already exists]
[Primary CTA: "See If You Qualify" → DSCR results]
```

### Section 2: Trust Signals (Immediate Below Fold)
**Layout:** 3-column grid

| Column | Content |
|--------|---------|
| **Accuracy** | "Includes 2026 SBA guaranty fees (3.5–3.75%)" |
| **Comprehensiveness** | "Closing costs, APR, amortization—all in one tool" |
| **Industry-specific** | "12 pre-loaded industry templates (Restaurant, Retail, Manufacturing...)" |

### Section 3: Industry Templates Showcase
**Layout:** Horizontal scroll cards

```
🍔 Restaurant ($250K avg) → 🏪 Retail ($350K avg) → 🏭 Manufacturing ($1.2M avg) → ...
```
Each card links to calculator with pre-filled values.

### Section 4: Educational Content Preview
**Layout:** 2-column (Featured article + FAQ teaser)

**Left:**
```markdown
## Featured Article
### Complete Guide to SBA 7(a) Loans in 2026
[Article preview card with CTA: "Read Full Guide"]
```

**Right:**
```markdown
## Frequently Asked Questions
- What is an SBA 7(a) loan?
- How do I calculate my DSCR?
- What are guaranty fees?
[CTA: "View All FAQs"]
```

### Section 5: How It Works (Process)
**Layout:** Timeline/stepper

```
1. Choose Industry → 2. Enter Details → 3. Review Results → 4. Apply for Pre-Qualification
```

### Section 6: Social Proof
**Layout:** Testimonial carousel (if available) OR stats

```
✅ "12 industry sectors supported"
✅ "Accurate 2026 SBA fee calculations"
✅ "DSCR pre-qualification in seconds"
```

### Section 7: CTA (Bottom)
```markdown
## Ready to Get Started?
Use our calculator to estimate your SBA 7(a) loan payment and see if you pre-qualify.

[Primary CTA: "Calculate My Loan Payment"]
```

---

## FAQ Section Design

### FAQ Taxonomy (20 Core Questions)

#### Category 1: Loan Basics (7 questions)
1. **What is an SBA 7(a) loan?**
   - **Keywords:** SBA 7(a) definition, small business loan
   - **Answer length:** 150 words
   - **Link to:** "Complete Guide to SBA 7(a) Loans" article

2. **Who qualifies for an SBA 7(a) loan?**
   - **Keywords:** SBA loan eligibility, qualifying requirements
   - **Answer length:** 200 words
   - **Link to:** "SBA Loan Eligibility Requirements 2026" article

3. **What can SBA 7(a) loans be used for?**
   - **Keywords:** SBA loan uses, working capital, equipment, real estate
   - **Answer length:** 150 words

4. **What is the maximum SBA 7(a) loan amount?**
   - **Keywords:** SBA loan limit, maximum loan amount
   - **Answer:** "$5 million is the maximum loan amount for most SBA 7(a) loans..."

5. **How long does SBA 7(a) approval take?**
   - **Keywords:** SBA approval timeline, processing time
   - **Link to:** "How to Speed Up SBA 7(a) Approval" article

6. **Is a down payment required for SBA 7(a) loans?**
   - **Keywords:** SBA down payment, equity injection
   - **Link to:** "Down Payment Requirements" article

7. **What is the difference between SBA 7(a) and 504 loans?**
   - **Keywords:** 7(a) vs 504, SBA loan comparison
   - **Link to:** "SBA 7(a) vs 504: Choosing the Right Loan" article

#### Category 2: Interest Rates & Fees (6 questions)
8. **How are SBA 7(a) interest rates determined?**
   - **Keywords:** prime rate, margin, SBA interest calculation
   - **Answer:** "SBA 7(a) rates = Prime Rate (currently 6.75% as of Dec 2025) + Margin..."
   - **Link to:** "Prime Rate + Margin" article

9. **What is the SBA guaranty fee?**
   - **Keywords:** guaranty fee, SBA fee 2026
   - **Calculator embed:** Mini guaranty fee calculator
   - **Link to:** "Understanding SBA Guaranty Fees" article

10. **How is the guaranty fee calculated?**
    - **Keywords:** guaranty fee calculation, FY 2026 fee schedule
    - **Answer:** "For FY 2026: 3.5% on portion ≤ $1M, 3.75% on portion > $1M..."

11. **What closing costs apply to SBA 7(a) loans?**
    - **Keywords:** closing costs, packaging fee, appraisal, legal fees
    - **Link to:** "Understanding Closing Costs" article

12. **Are SBA loans fixed or variable rate?**
    - **Keywords:** fixed vs variable, rate structure
    - **Calculator link:** Pre-fill comparison (fixed 7.5% vs variable starting 5.5%)

13. **What is APR and how is it calculated?**
    - **Keywords:** APR definition, effective interest rate
    - **Answer:** "APR includes interest + fees (guaranty, closing costs) divided by loan amount..."

#### Category 3: Calculator & DSCR (4 questions)
14. **How does this SBA loan calculator work?**
    - **Keywords:** calculator instructions, how to use
    - **Answer:** "Enter loan amount, term and rate. Calculator shows monthly payment, DSCR..."

15. **What is DSCR?**
    - **Keywords:** DSCR definition, debt service coverage ratio
    - **Link to:** "DSCR Ultimate Guide" article

16. **What DSCR do I need to qualify?**
    - **Keywords:** DSCR requirements, minimum DSCR
    - **Answer:** "Lenders typically require DSCR ≥ 1.25. Excellent: ≥ 1.50..."

17. **Does the calculator include all fees?**
    - **Keywords:** calculator accuracy, fees included
    - **Answer:** "Yes—guaranty fee, closing costs estimate, effective APR..."

#### Category 4: Application & Process (3 questions)
18. **What documents do I need to apply?**
    - **Keywords:** SBA loan application, required documents
    - **Answer:** "Business tax returns (3 years), personal tax returns, bank statements (6 months)..."

19. **What is an SBA Express loan?**
    - **Keywords:** SBA Express, fast approval
    - **Link to:** "SBA Express vs Standard 7(a)" article

20. **Can I prepay my SBA loan?**
    - **Keywords:** prepayment, early payoff
    - **Answer:** "Yes. No prepayment penalty if loan term < 15 years..."

### FAQ Implementation Features
- **Search bar** (filters questions as user types)
- **Category tabs** (Loan Basics / Rates & Fees / Calculator / Application)
- **Expandable accordion** (click to reveal answer)
- **Jump links** (table of contents at top)
- **Related articles** (3 article cards at bottom of FAQ page)

### FAQ Schema Markup
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an SBA 7(a) loan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An SBA 7(a) loan is..."
      }
    }
  ]
}
```

---

## Article Strategy Blueprint

### Pillar Articles (5 long-form guides)

#### **Article 1: Complete Guide to SBA 7(a) Loans in 2026**
- **Target keyword:** "SBA 7(a) loan guide"
- **Search intent:** Informational (early-stage research)
- **Word count:** 3,000 words
- **H2 sections:**
  1. What is an SBA 7(a) Loan?
  2. Who Qualifies? (Eligibility Requirements)
  3. How Much Can You Borrow? (Loan Amounts & Limits)
  4. Interest Rates Explained (Prime + Margin)
  5. Fees Breakdown (Guaranty, Closing, Annual Service)
  6. Application Process (Step-by-Step)
  7. DSCR Pre-Qualification (New Section - Unique!)
  8. Industry-Specific Considerations (Links to templates)
  9. SBA 7(a) vs Other Loan Types (Express, 504, Microloan)
  10. FAQs (Embed top 5 FAQs)
- **Internal links:** 
  - Calculator (3 placements: intro, DSCR section, conclusion)
  - 4 supporting articles
  - FAQ page
- **External links:** SBA.gov (authoritative backlink)
- **Media:** 
  - Hero image: "Entrepreneur reviewing SBA loan documents"
  - Infographic: "SBA 7(a) Loan Process Timeline"
  - Chart: "Loan amount vs typical guaranty fee"
- **Schema markup:** Article + FAQPage (embedded FAQ)
- **CTA:** "Calculate Your SBA 7(a) Loan Payment" (in-article calculator widget)

---

#### **Article 2: SBA 7(a) vs 504: Choosing the Right Loan for Your Business**
- **Target keyword:** "SBA 7(a) vs 504"
- **Search intent:** Comparison (decision-stage)
- **Word count:** 2,500 words
- **H2 sections:**
  1. Quick Comparison Table (7(a) vs 504)
  2. When to Choose SBA 7(a)
  3. When to Choose SBA 504
  4. Interest Rate Differences
  5. Down Payment Requirements
  6. Approval Timeline Comparison
  7. Real-World Scenarios (Restaurant, Retail, Manufacturing)
  8. Can You Have Both? (Stacking loans)
- **Unique element:** Interactive decision tree ("Answer 3 questions → Get recommendation")
- **Internal links:**
  - Calculator with 7(a) preset
  - Industry-specific articles
- **Media:**
  - Comparison table visual
  - Decision tree flowchart
- **CTA:** "Not sure? Use our calculator to compare monthly payments"

---

#### **Article 3: Understanding SBA Guaranty Fees & Closing Costs (2026 Guide)**
- **Target keyword:** "SBA guaranty fee calculator 2026"
- **Search intent:** Transactional (users ready to apply, need cost clarity)
- **Word count:** 2,200 words
- **H2 sections:**
  1. What is the SBA Guaranty Fee?
  2. 2026 Fee Schedule (Tiered: ≤ $1M vs > $1M)
  3. Guaranty Fee Calculator (Embed mini-tool)
  4. Closing Costs Breakdown (Packaging, Appraisal, Environmental, Legal)
  5. Are SBA Fees Tax-Deductible?
  6. How to Reduce Your Total Loan Costs
  7. Comparing SBA Fees to Conventional Loans
- **Unique element:** **Embedded guaranty fee calculator** (users enter loan amount → instant fee calculation)
- **Internal links:** Main calculator, DSCR article
- **Media:** Fee breakdown pie chart
- **Schema:** HowTo + Calculator (custom schema)
- **CTA:** "See your full loan breakdown (guaranty fee + monthly payment + APR)"

---

#### **Article 4: DSCR for SBA Loans: The Ultimate Pre-Qualification Guide**
- **Target keyword:** "DSCR SBA loan," "debt service coverage ratio"
- **Search intent:** Educational + Pre-qualification
- **Word count:** 2,800 words
- **H2 sections:**
  1. What is DSCR? (Debt Service Coverage Ratio)
  2. Why Lenders Care About DSCR
  3. How to Calculate DSCR (Formula + Example)
  4. DSCR Requirements by Lender (1.25 minimum, 1.50 excellent)
  5. How to Improve Your DSCR (5 strategies)
  6. DSCR vs Debt-to-Income Ratio (Personal vs Business)
  7. Industry-Specific DSCR Benchmarks (Restaurant, Retail, etc.)
  8. Using DSCR to Pre-Qualify (Before applying)
- **Unique element:** **DSCR calculator widget** (enter EBITDA + existing debt → instant DSCR score + qualification status)
- **Internal links:** Calculator (DSCR section), industry templates
- **Media:**
  - DSCR formula infographic
  - Score interpretation chart (Poor < 1.0, Fair 1.0–1.24, Good 1.25–1.49, Excellent ≥ 1.50)
- **CTA:** "Calculate your DSCR now and see if you pre-qualify"

---

#### **Article 5: Industry-Specific SBA 7(a) Loan Strategies**
- **Target keyword:** "[Industry] SBA 7(a) loan" (12 variations)
- **Search intent:** Highly targeted (restaurant owner, retail business, etc.)
- **Word count:** 3,200 words
- **H2 sections (by industry):**
  1. Restaurants & Food Service (High DSCR needed, equipment focus)
  2. Retail Businesses (Inventory financing, seasonal cash flow)
  3. Manufacturing (Equipment loans, working capital for growth)
  4. Healthcare (Medical equipment, practice acquisition)
  5. Professional Services (Low equipment needs, working capital focus)
  6. Construction (Bonding requirements, equipment financing)
  7. Real Estate (Property purchase, longer terms)
  8. Technology Startups (Working capital, limited collateral)
  9. Hospitality & Hotels (High loan amounts, 25-year terms)
  10. Agriculture (Seasonal revenue, USDA overlap)
  11. Wholesale & Distribution (Inventory, warehouse equipment)
  12. Personal Services (Smaller loan amounts, faster approval)
- **Unique element:** **12 industry template cards** → Each links to calculator with pre-filled values
- **Internal links:** Calculator (×12), DSCR article, Comparison article
- **Media:** Industry infographics (loan size ranges, typical DSCR, common uses)
- **CTA:** "Use the [Industry] template in our calculator"

---

### Supporting Articles (10 focused guides)

#### **Article 6: How to Calculate SBA Loan Monthly Payment**
- **Target keyword:** "SBA loan payment calculator," "calculate SBA monthly payment"
- **Word count:** 900 words
- **Focus:** Amortization formula walkthrough + calculator link
- **CTA:** "Skip the math—use our instant calculator"

---

#### **Article 7: Prime Rate + Margin: Understanding SBA Interest Rates in 2026**
- **Target keyword:** "SBA prime rate," "prime plus margin"
- **Word count:** 1,000 words
- **Focus:** How prime rate works, current rate (6.75%), how margins are determined
- **Media:** Historical prime rate chart (2020–2026)
- **CTA:** "Calculate your rate with our SBA loan calculator"

---

#### **Article 8: SBA Express vs Standard 7(a) Loans: Which is Faster?**
- **Target keyword:** "SBA Express loan," "7(a) Express"
- **Word count:** 1,100 words
- **Focus:** Speed (36-hour approval), loan limits ($500K max), rate differences
- **Comparison table:** Express vs Standard
- **CTA:** "Calculate your Express loan payment"

---

#### **Article 9: Down Payment Requirements for SBA 7(a) Loans (2026)**
- **Target keyword:** "SBA down payment," "SBA equity injection"
- **Word count:** 850 words
- **Focus:** Typical 10–20% down, variations by use (equipment vs real estate)
- **Calculator link:** Pre-filled with down payment scenarios
- **CTA:** "See how down payment affects your monthly payment"

---

#### **Article 10: Amortization Schedule Explained: Reading Your SBA Loan Breakdown**
- **Target keyword:** "SBA amortization schedule," "loan amortization"
- **Word count:** 950 words
- **Focus:** What amortization means, how to read a schedule, principal vs interest over time
- **Media:** Sample amortization table (first 12 months)
- **CTA:** "Generate your amortization schedule with our calculator"

---

#### **Article 11: Restaurant Owner's Guide to SBA 7(a) Loans**
- **Target keyword:** "restaurant SBA loan," "SBA loan for restaurant"
- **Word count:** 1,200 words
- **Focus:** Equipment financing, seasonal cash flow, typical loan amounts ($150K–$350K)
- **Template link:** Restaurant industry template (pre-filled calculator)
- **CTA:** "Use the Restaurant template to estimate your loan"

---

#### **Article 12: Retail Business SBA Loan Calculator Guide**
- **Target keyword:** "retail SBA loan," "small business retail loan"
- **Word count:** 1,100 words
- **Focus:** Inventory financing, working capital, expansion loans
- **Template link:** Retail industry template
- **CTA:** "Calculate your retail business loan payment"

---

#### **Article 13: Manufacturing Sector SBA Financing: Equipment & Expansion Loans**
- **Target keyword:** "manufacturing SBA loan," "equipment financing"
- **Word count:** 1,150 words
- **Focus:** Large loan amounts ($500K–$2M), machinery purchases, DSCR considerations
- **Template link:** Manufacturing industry template
- **CTA:** "Estimate your manufacturing loan with our calculator"

---

#### **Article 14: How to Speed Up SBA 7(a) Approval (6 Proven Strategies)**
- **Target keyword:** "SBA loan approval time," "fast SBA approval"
- **Word count:** 1,000 words
- **Focus:** Document prep, lender selection, SBA Express option
- **Internal links:** SBA Express article, eligibility FAQ
- **CTA:** "Pre-qualify with our DSCR calculator before applying"

---

#### **Article 15: SBA Loan Eligibility Requirements in 2026: Who Qualifies?**
- **Target keyword:** "SBA loan eligibility," "SBA qualifying requirements"
- **Word count:** 1,200 words
- **Focus:** Business size standards, for-profit requirement, personal credit (680+), use restrictions
- **Checklist:** "Am I Eligible?" (interactive self-assessment)
- **CTA:** "Check your pre-qualification with our DSCR tool"

---

## SEO & Technical Implementation

### Meta Tags Template
```typescript
// lib/seo-config.ts
export const articleSEO = (article: Article) => ({
  title: `${article.title} | SBA 7(a) Loan Calculator`,
  description: article.excerpt, // 150–160 characters
  canonical: `https://yourdomain.com/blog/${article.slug}`,
  openGraph: {
    type: 'article',
    url: `https://yourdomain.com/blog/${article.slug}`,
    title: article.title,
    description: article.excerpt,
    images: [{ url: article.heroImage }],
    article: {
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate,
      authors: ['SBA Loan Calculator Team'],
      tags: article.keywords,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: article.title,
    description: article.excerpt,
    images: [article.heroImage],
  },
});
```

### Internal Linking Strategy
| From | To | Anchor Text |
|------|-----|-------------|
| Every article | Main calculator | "Use our SBA 7(a) calculator" |
| Pillar articles | 2–3 supporting articles | Contextual (e.g., "Learn more about DSCR") |
| Supporting articles | 1 pillar article | "See the complete guide" |
| Homepage | Top 3 articles | Featured article cards |
| FAQ page | Relevant articles | "Read more" links |

### Article Template Structure
```tsx
// app/blog/[slug]/page.tsx
export default function ArticlePage({ params }) {
  return (
    <>
      <ArticleSchema article={article} />
      <BreadcrumbSchema path={breadcrumbs} />
      
      <article>
        <header>
          <h1>{article.title}</h1>
          <time>{article.publishedDate}</time>
        </header>
        
        <TableOfContents headings={article.headings} />
        
        <MDXContent source={article.content} />
        
        <RelatedArticles articles={related} />
        
        <CTA>
          <Button href="/calculator">Calculate Your SBA Loan</Button>
        </CTA>
      </article>
    </>
  );
}
```

---

## Task Breakdown (Detailed)

### Phase 1: Foundation (Agent: `frontend-specialist`, Skill: `seo-fundamentals`)

**Task 1.1: Create Article Infrastructure**
- **INPUT:** Content strategy plan (this document)
- **OUTPUT:** 
  - `/content/articles/` directory
  - `/app/blog/` routing structure
  - Article MDX template
- **VERIFY:** 
  ```bash
  # Directory structure exists
  ls content/articles
  # Test route works
  curl http://localhost:3001/blog/test-article
  ```
- **Priority:** P0 (Foundation)
- **Dependencies:** None

**Task 1.2: Build FAQ Component**
- **INPUT:** FAQ taxonomy (20 questions from plan)
- **OUTPUT:**
  - `FAQAccordion.tsx` component
  - `app/faq/page.tsx`
  - FAQ JSON data file
  - FAQ schema markup
- **VERIFY:**
  - FAQ page renders
  - Accordions expand/collapse
  - Schema validates (Google Rich Results Test)
- **Priority:** P0
- **Dependencies:** None

---

### Phase 2: Homepage Content (Agent: `frontend-specialist`, Skill: `frontend-design`)

**Task 2.1: Update Homepage Hero**
- **INPUT:** Hero content from plan
- **OUTPUT:** Updated `app/page.tsx` hero section
- **VERIFY:** Visual review + mobile responsive
- **Priority:** P1
- **Dependencies:** None

**Task 2.2: Add Industry Templates Showcase**
- **INPUT:** Industry template data (already exists in `data/industry-templates.ts`)
- **OUTPUT:** Horizontal scroll carousel component
- **VERIFY:** All 12 templates display, links pre-fill calculator
- **Priority:** P1
- **Dependencies:** Task 2.1

**Task 2.3: Create Educational Content Preview Section**
- **INPUT:** Top 3 featured articles (to be determined after article creation)
- **OUTPUT:** Article card grid on homepage
- **VERIFY:** Cards link to articles, images load
- **Priority:** P2
- **Dependencies:** Task 3.1 (articles must exist)

---

### Phase 3: Pillar Article Creation (Agent: `frontend-specialist`, Skill: `seo-fundamentals`)

**Task 3.1: Write Pillar Article 1 (Complete Guide)**
- **INPUT:** Article blueprint (from plan)
- **OUTPUT:** `content/articles/complete-guide-sba-7a-loans.mdx`
- **VERIFY:**
  - 3,000 words
  - All H2 sections present
  - Internal links functional
  - Images present
  - Schema markup valid
- **Priority:** P0 (Highest SEO value)
- **Dependencies:** Task 1.1

**Task 3.2–3.5:** Repeat for Articles 2–5 (7(a) vs 504, Guaranty Fees, DSCR, Industry Strategies)
- **Priority:** P1
- **Dependencies:** Task 1.1

---

### Phase 4: Supporting Article Creation (Agent: `frontend-specialist`, Skill: `seo-fundamentals`)

**Task 4.1–4.10:** Write Articles 6–15
- **OUTPUT:** 10 MDX files (900–1,200 words each)
- **VERIFY:** Each article has:
  - Target keyword in H1 and meta description
  - Internal link to calculator
  - Internal link to 1 pillar article
  - Schema markup
- **Priority:** P2
- **Dependencies:** Task 1.1

---

### Phase 5: Technical SEO (Agent: `frontend-specialist`, Skill: `seo-fundamentals`)

**Task 5.1: Implement Schema Markup**
- **INPUT:** Article and FAQ data
- **OUTPUT:**
  - `ArticleSchema.tsx` component
  - `FAQSchema.tsx` component
  - `BreadcrumbSchema.tsx` component
- **VERIFY:**
  ```bash
  # Validate schema
  curl https://search.google.com/test/rich-results
  ```
- **Priority:** P1
- **Dependencies:** Task 1.1, 1.2

**Task 5.2: Create XML Sitemap**
- **INPUT:** All articles + pages
- **OUTPUT:** `/sitemap.xml` or Next.js sitemap function
- **VERIFY:**
  ```bash
  curl http://localhost:3001/sitemap.xml
  # All articles listed
  ```
- **Priority:** P2
- **Dependencies:** Task 3.1–4.10

**Task 5.3: Add Internal Linking**
- **INPUT:** Internal linking strategy (from plan)
- **OUTPUT:** Links embedded in article content
- **VERIFY:** Manual review—each article has 3–5 internal links
- **Priority:** P2
- **Dependencies:** Task 3.1–4.10

---

### Phase 6: UX Enhancements (Agent: `frontend-specialist`, Skill: `frontend-design`)

**Task 6.1: Build Search Functionality**
- **INPUT:** Article metadata (titles, keywords)
- **OUTPUT:** Search bar component (Fuse.js or Algolia)
- **VERIFY:** Search "DSCR" → DSCR article appears
- **Priority:** P3 (Nice-to-have)
- **Dependencies:** Task 3.1–4.10

**Task 6.2: Add Social Sharing**
- **INPUT:** Article URLs
- **OUTPUT:** Share buttons (Twitter, LinkedIn, Facebook)
- **VERIFY:** Click share → Pre-filled social post
- **Priority:** P3
- **Dependencies:** Task 3.1–4.10

---

### Phase X: Verification (Agent: `frontend-specialist`, Skills: `seo-fundamentals`, `performance-profiling`)

**Task X.1: SEO Audit**
- **COMMAND:**
  ```bash
  python .agent/skills/seo-fundamentals/scripts/seo_checker.py .
  ```
- **VERIFY:**
  - All pages have meta descriptions
  - Images have alt text
  - Headings hierarchy correct (H1 → H2 → H3)
  - Internal links functional
- **Priority:** P0
- **Dependencies:** All tasks complete

**Task X.2: Performance Audit**
- **COMMAND:**
  ```bash
  python .agent/skills/performance-profiling/scripts/lighthouse_audit.py http://localhost:3001/blog/complete-guide-sba-7a-loans
  ```
- **VERIFY:**
  - LCP < 2.5s
  - CLS < 0.1
  - Performance score ≥ 90
- **Priority:** P0
- **Dependencies:** All tasks complete

**Task X.3: Schema Validation**
- **COMMAND:** 
  ```bash
  # Manual: Paste URLs into Google Rich Results Test
  # https://search.google.com/test/rich-results
  ```
- **VERIFY:** Article schema valid, FAQ schema valid
- **Priority:** P1
- **Dependencies:** Task 5.1

**Task X.4: Accessibility Check**
- **COMMAND:**
  ```bash
  python .agent/skills/frontend-design/scripts/accessibility_checker.py .
  ```
- **VERIFY:** WCAG AA compliance
- **Priority:** P2
- **Dependencies:** All tasks complete

**Task X.5: Build Test**
- **COMMAND:**
  ```bash
  npm run build
  ```
- **VERIFY:** No errors, all routes generated
- **Priority:** P0
- **Dependencies:** All tasks complete

---

## Content Production Schedule

| Week | Deliverables | Status |
|------|--------------|--------|
| Week 1 | Infrastructure (Task 1.1, 1.2) + Homepage updates (Task 2.1, 2.2) | [ ] |
| Week 2 | Pillar Articles 1–2 (Complete Guide, 7(a) vs 504) | [ ] |
| Week 3 | Pillar Articles 3–5 (Guaranty Fees, DSCR, Industry Strategies) | [ ] |
| Week 4 | Supporting Articles 6–10 | [ ] |
| Week 5 | Supporting Articles 11–15 + SEO implementation | [ ] |
| Week 6 | UX enhancements + Phase X verification | [ ] |

---

## Competitive Differentiation Summary

| Feature | Competitors | **Our Calculator** |
|---------|-------------|-------------------|
| **Industry templates** | ❌ Generic inputs | ✅ 12 pre-loaded sectors |
| **DSCR pre-qualification** | ❌ Payment only | ✅ Instant score + recommendation |
| **Visual breakdowns** | ❌ Tables | ✅ Recharts (pie, bar) |
| **2026 fee accuracy** | ⚠️ Some outdated | ✅ FY 2026 guaranty fees |
| **Embedded calculators** | ❌ External links | ✅ In-article mini-tools |
| **FAQ schema** | ⚠️ Limited | ✅ 20 questions with rich snippets |
| **Content depth** | ⚠️ 500–1,000 words | ✅ 5 pillar articles (2,000–3,000 words) |

---

## Exit Checklist (Before Moving to Implementation)

- [/] Content strategy plan created (`sba-content-strategy.md`)
- [ ] User approves strategy (homepage priority, article topics, FAQ structure)
- [ ] Tech stack confirmed (MDX, Next.js App Router, Recharts)
- [ ] File structure validated (content/, app/blog/, components/)
- [ ] Task dependencies mapped (Foundation → Content → SEO → Verification)

**Next Phase:** Implementation (Phase 4 - Code Writing Phase)

---

## Notes

- **Purple ban:** No purple/violet in UI (applies to all components)
- **Template ban:** No standard blog layouts (custom design required)
- **Socratic respected:** User said "do it all"—strategic decisions auto-applied
- **Agent assignment:** `frontend-specialist` for all phases (web project)
- **Skills utilized:** `seo-fundamentals`, `frontend-design`, `clean-code`

---

**Plan Status:** ✅ Ready for approval
**Date Created:** 2026-02-03
**Next Step:** User approval → Phase 4 (Implementation)
