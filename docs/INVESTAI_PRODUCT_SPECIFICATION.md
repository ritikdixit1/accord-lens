# InvestAI: Deal Intelligence Platform
## Complete Product Specification v1.0

---

# 1️⃣ COMPLETE FEATURE LIST

## Module 1: Deal Pipeline & Sourcing

| Feature | Persona | Inputs | Outputs | AI | Data Dependencies |
|---------|---------|--------|---------|----|--------------------|
| Deal Creation | Associate | Company name, sector, source | Deal record | No | None |
| Deal Stage Management | Associate/VP | Stage selection | State transition, notifications | No | Deal |
| Pipeline Kanban | All | Filter criteria | Visual board | No | Deals, Users |
| Deal Scoring | VP/Partner | Deal data, docs | Confidence score | Yes | Documents, Metrics |
| Source Tracking | Associate | Source channel, referrer | Attribution report | No | Deals |
| Duplicate Detection | System | New deal data | Match alerts | Yes | All deals |
| Deal Assignment | VP | Team members | Ownership record | No | Users, Deal |
| Stage SLA Monitoring | System | Stage timestamps | Alerts, reports | No | Deals |
| Bulk Import | Admin | CSV/Excel file | Multiple deals | No | None |
| Deal Archival | Partner | Archive decision | Historical record | No | Deal |

## Module 2: Document Ingestion & VDR Intelligence

| Feature | Persona | Inputs | Outputs | AI | Data Dependencies |
|---------|---------|--------|---------|----|--------------------|
| Document Upload | Associate | Files (PDF, XLSX, DOCX, PPTX) | Stored documents | No | Deal |
| Folder Structure Sync | System | VDR API | Mirror structure | No | VDR credentials |
| OCR Processing | System | Scanned PDFs | Searchable text | Yes | Document |
| Auto-Categorization | System | Document content | Category tags | Yes | Document |
| Version Control | Associate | New version | Version history | No | Document |
| Text Extraction | System | Document | Structured text | Yes | Document |
| Embedding Generation | System | Document text | Vector embeddings | Yes | Document |
| Missing Doc Detection | System | Deal type template | Gap report | Yes | Documents, Templates |
| Document Comparison | Associate | Two versions | Diff report | Yes | Documents |
| Semantic Search | All | Query string | Ranked results | Yes | Embeddings |
| Document Preview | All | Document ID | Rendered view | No | Document |
| Bulk Download | Associate | Selection | ZIP archive | No | Documents |

## Module 3: Due Diligence Q&A Engine

| Feature | Persona | Inputs | Outputs | AI | Data Dependencies |
|---------|---------|--------|---------|----|--------------------|
| Workstream Creation | VP | Workstream type | DD workstream | No | Deal |
| Question Generation | System/VP | Deal context, docs | Question list | Yes | Documents, Deal type |
| Question Assignment | VP | Questions, owners | Assigned questions | No | Users, Questions |
| Question Prioritization | System | Question context | Priority score | Yes | Questions, Risks |
| Answer Submission | Seller/Associate | Response text, docs | Answer record | No | Question |
| Answer Validation | System | Answer text | Completeness flag | Yes | Question, Answer |
| Follow-up Generation | System | Vague answer | Follow-up question | Yes | Question, Answer |
| Progress Tracking | All | Workstream | Completion % | No | Questions, Answers |
| SLA Breach Alerts | System | Due dates | Notifications | No | Questions |
| DD Report Export | VP | Workstream | Formatted report | No | Q&A data |
| Template Library | Admin | Template definition | Reusable template | No | None |
| Cross-Reference | System | Answer content | Related items | Yes | All Q&A |

## Module 4: Financial Analysis

| Feature | Persona | Inputs | Outputs | AI | Data Dependencies |
|---------|---------|--------|---------|----|--------------------|
| Financial Extraction | System | Financial docs | Structured data | Yes | Documents |
| Revenue Analysis | System | P&L data | Growth metrics, charts | Yes | Financial data |
| Margin Analysis | System | P&L data | Margin trends | Yes | Financial data |
| Working Capital | System | Balance sheet | WC metrics | Yes | Financial data |
| Cash Flow Analysis | System | CF statement | FCF, conversion | Yes | Financial data |
| QoE Reconciliation | Associate | QoE report | Adjustment summary | Yes | Documents |
| Normalization Engine | System | Raw financials | Normalized P&L | Yes | Financial data |
| Cohort Analysis | System | Revenue by customer | Cohort metrics | Yes | Customer data |
| Unit Economics | System | Revenue, costs | CAC, LTV, payback | Yes | Financial data |
| Forecast Validation | System | Projections | Reasonableness flags | Yes | Financials, Industry |
| Comparable Analysis | Associate | Peer set | Valuation multiples | Yes | External data |
| Model Output | System | All analysis | Excel model | No | All financial data |

## Module 5: Commercial Analysis

| Feature | Persona | Inputs | Outputs | AI | Data Dependencies |
|---------|---------|--------|---------|----|--------------------|
| Customer Concentration | System | Revenue by customer | Concentration risk | Yes | Customer data |
| Contract Analysis | System | Customer contracts | Terms summary | Yes | Documents |
| Churn Analysis | System | Customer history | Churn metrics | Yes | Customer data |
| NPS/Satisfaction | System | Survey data | Score trends | No | Survey data |
| Market Sizing | System | Industry reports | TAM/SAM/SOM | Yes | Documents, External |
| Competitive Mapping | Associate | Competitor data | Positioning matrix | Yes | Documents |
| Pricing Analysis | System | Pricing docs | Pricing power assessment | Yes | Documents |
| Channel Analysis | System | Sales data | Channel mix | Yes | Revenue data |
| Pipeline Analysis | System | CRM data | Pipeline health | Yes | CRM export |
| Win/Loss Analysis | System | Sales data | Win rate trends | Yes | CRM data |

## Module 6: Legal Analysis

| Feature | Persona | Inputs | Outputs | AI | Data Dependencies |
|---------|---------|--------|---------|----|--------------------|
| Contract Extraction | System | Legal docs | Key terms table | Yes | Documents |
| CoC Clause Detection | System | Contracts | Change of control flags | Yes | Documents |
| IP Assessment | System | IP docs | IP inventory, risks | Yes | Documents |
| Litigation Summary | System | Legal docs | Case summaries | Yes | Documents |
| Regulatory Compliance | System | Compliance docs | Gap analysis | Yes | Documents |
| Employment Analysis | System | HR docs | Employment risks | Yes | Documents |
| Material Contract ID | System | All contracts | Materiality flags | Yes | Documents |
| Consent Requirements | System | Contracts | Consent list | Yes | Documents |
| Rep & Warranty Analysis | System | SPA draft | R&W summary | Yes | Documents |
| Indemnity Mapping | System | SPA/legal docs | Indemnity table | Yes | Documents |

## Module 7: Operational Analysis

| Feature | Persona | Inputs | Outputs | AI | Data Dependencies |
|---------|---------|--------|---------|----|--------------------|
| Org Chart Extraction | System | Org docs | Structure visualization | Yes | Documents |
| Key Person Risk | System | HR data | Key person flags | Yes | HR data |
| Technology Assessment | System | Tech docs | Tech debt report | Yes | Documents |
| Vendor Analysis | System | Vendor contracts | Dependency map | Yes | Documents |
| Facility Assessment | System | Facility docs | Capacity analysis | Yes | Documents |
| Process Mapping | Associate | Operations docs | Process diagrams | Yes | Documents |
| Integration Planning | VP | All operational data | Integration roadmap | Yes | All operational |
| Synergy Estimation | VP | Financials, operations | Synergy model | Yes | Financial, Operational |
| 100-Day Plan | VP | Integration analysis | Action plan | Yes | All analysis |

## Module 8: Risk Scoring Engine

| Feature | Persona | Inputs | Outputs | AI | Data Dependencies |
|---------|---------|--------|---------|----|--------------------|
| Risk Detection | System | All documents | Risk inventory | Yes | All documents |
| Risk Categorization | System | Detected risks | Categorized risks | Yes | Risks |
| Severity Scoring | System | Risk context | Severity level | Yes | Risks, Thesis |
| Likelihood Assessment | System | Risk factors | Probability score | Yes | Risks |
| Impact Quantification | System | Risk, financials | Dollar impact | Yes | Risks, Financials |
| Mitigation Suggestions | System | Risk details | Mitigation options | Yes | Risks |
| Risk Heat Map | All | All risks | Visual matrix | No | Risks |
| Risk Trending | System | Risk history | Trend analysis | No | Risks |
| Thesis Alignment | System | Risks, thesis | Alignment score | Yes | Risks, Thesis |
| Deal Breaker Detection | System | Critical risks | Alert flags | Yes | Risks |

## Module 9: Collaboration & Comments

| Feature | Persona | Inputs | Outputs | AI | Data Dependencies |
|---------|---------|--------|---------|----|--------------------|
| Inline Comments | All | Selection, comment | Threaded discussion | No | Document/Entity |
| @Mentions | All | User reference | Notification | No | Users |
| Comment Resolution | Owner | Resolution action | Status update | No | Comment |
| Comment Types | All | Type selection | Categorized comment | No | Comment |
| Thread Summary | System | Long thread | Summary text | Yes | Comments |
| Action Extraction | System | Comments | Action items | Yes | Comments |
| Comment Search | All | Query | Matching comments | No | Comments |
| Activity Feed | All | Entity scope | Activity stream | No | All activities |

## Module 10: Communication Automation

| Feature | Persona | Inputs | Outputs | AI | Data Dependencies |
|---------|---------|--------|---------|----|--------------------|
| Email Drafting | Associate | Context, template | Draft email | Yes | Deal, Templates |
| NDA Follow-up | System | NDA status | Reminder email | Yes | Deal, Contacts |
| DD Request Chaser | System | Overdue questions | Chase email | Yes | Questions |
| IC Invite | VP | IC schedule | Calendar invite | No | Deal, Users |
| Weekly Digest | System | Deal activity | Summary email | Yes | All activities |
| Slack Integration | System | Key events | Slack messages | No | Events |
| Template Management | Admin | Template content | Email templates | No | None |
| Send Scheduling | Associate | Email, schedule | Scheduled send | No | Email |

## Module 11: IC Memo & Report Generation

| Feature | Persona | Inputs | Outputs | AI | Data Dependencies |
|---------|---------|--------|---------|----|--------------------|
| IC Memo Generation | System | All deal data | IC memo draft | Yes | All analysis |
| Executive Summary | System | Deal analysis | 2-page summary | Yes | All analysis |
| Scenario Modeling | VP | Assumptions | Base/Bull/Bear | Yes | Financials |
| Sensitivity Analysis | System | Model, variables | Sensitivity tables | Yes | Financial model |
| Comparable Table | Associate | Peer selection | Comp table | Yes | External data |
| Risk Summary | System | All risks | Risk matrix | No | Risks |
| Recommendation Engine | System | All analysis | Proceed/Pass/Conditional | Yes | All data |
| Version Control | VP | Memo edits | Version history | No | Memo |
| Voting Interface | Partner | Vote, comments | Decision record | No | IC Memo |
| Decision Dashboard | Partner | All votes | Aggregate view | No | Votes |

## Module 12: Signing & Closing Tracker

| Feature | Persona | Inputs | Outputs | AI | Data Dependencies |
|---------|---------|--------|---------|----|--------------------|
| CP Extraction | System | SPA | CP checklist | Yes | Documents |
| CP Assignment | VP | CP, owner | Assigned CP | No | CPs, Users |
| CP Status Tracking | All | Status updates | Progress view | No | CPs |
| Deadline Alerts | System | CP due dates | Notifications | No | CPs |
| Evidence Upload | Associate | Completion docs | CP completion | No | CPs |
| Blocker Detection | System | CP dependencies | Blocker alerts | Yes | CPs |
| Timeline View | All | All CPs | Gantt chart | No | CPs |
| Funds Flow Tracker | VP | Wire details | Funds status | No | Transaction |
| Signing Ceremony | VP | Signature status | Completion tracking | No | Signatures |
| Closing Binder | Associate | All docs | Organized archive | No | All documents |

## Module 13: Post-Close Portfolio Intelligence

| Feature | Persona | Inputs | Outputs | AI | Data Dependencies |
|---------|---------|--------|---------|----|--------------------|
| Portfolio Dashboard | Partner | All companies | Portfolio view | No | Portfolio cos |
| KPI Definition | VP | Metric specs | KPI configuration | No | None |
| KPI Tracking | Associate | Monthly data | KPI dashboard | No | KPIs |
| Variance Analysis | System | Actual vs target | Variance report | Yes | KPIs |
| Board Pack Generation | System | Portfolio data | Board slides | Yes | All portfolio data |
| 100-Day Tracking | VP | Plan, actuals | Progress report | No | Plan, Actuals |
| Exit Planning | Partner | Exit criteria | Readiness score | Yes | Portfolio data |
| Value Creation Tracking | VP | Entry vs current | Value bridge | No | Financials |
| Benchmarking | System | Portfolio, peers | Benchmark report | Yes | External data |

## Module 14: Admin, Permissions, Security

| Feature | Persona | Inputs | Outputs | AI | Data Dependencies |
|---------|---------|--------|---------|----|--------------------|
| User Management | Admin | User details | User accounts | No | None |
| Role Assignment | Admin | User, role | Permission set | No | Users, Roles |
| Firm/Fund Setup | Admin | Entity details | Firm/Fund records | No | None |
| Data Isolation | System | Entity context | Scoped access | No | All data |
| Audit Logging | System | All actions | Audit trail | No | All activities |
| SSO Integration | Admin | SSO config | Auth integration | No | None |
| API Key Management | Admin | Key request | API credentials | No | None |
| Usage Analytics | Admin | System logs | Usage reports | No | Logs |
| Backup Management | Admin | Backup schedule | Data backups | No | All data |
| Compliance Reports | Admin | Report request | Compliance docs | No | Audit logs |

---

# 2️⃣ DOCUMENT → ANALYSIS MAP

| Document Type | Extracted Data | Derived Metrics | Generated Insights | Risk Flags | Downstream Outputs |
|---------------|----------------|-----------------|-------------------|------------|-------------------|
| **CIM** | Company overview, financials summary, market position, management bios | Revenue CAGR, margin trends, market share | Investment thesis validation, growth drivers, competitive positioning | Overstated projections, market decline, key person dependency | Screening memo, IC summary, deal scoring |
| **Historical Financials (P&L)** | Revenue by segment, COGS, OpEx, EBITDA, Net Income | Gross margin %, EBITDA margin %, YoY growth, revenue mix | Margin sustainability, cost structure analysis, operating leverage | Declining margins, revenue concentration, unusual adjustments | Financial model, QoE bridge, IC memo |
| **Balance Sheet** | Assets, liabilities, equity, WC components | Current ratio, WC days, debt/equity, asset turnover | Liquidity assessment, capital efficiency, debt capacity | Negative WC trend, off-balance sheet items, contingent liabilities | Financial model, debt analysis |
| **Cash Flow Statement** | Operating CF, investing CF, financing CF | FCF, cash conversion, capex intensity | Cash generation quality, reinvestment needs | Negative FCF, capex/revenue mismatch, unusual financing | Financial model, debt capacity |
| **Quality of Earnings (QoE)** | Adjustments, normalized EBITDA, pro forma items | Adjusted EBITDA, adjustment categories | Earnings quality, sustainability of adjustments | Large/recurring adjustments, aggressive add-backs | IC memo, valuation, risk register |
| **Customer List/Revenue by Customer** | Customer names, revenue by customer, tenure | Concentration %, churn rate, cohort retention | Customer quality, revenue durability | Top 10 >50%, high churn, declining customers | Commercial analysis, risk register |
| **Contracts (Customer)** | Terms, pricing, duration, renewal, termination | Average contract value, duration, renewal rate | Pricing power, contract stickiness | Short terms, unfavorable termination, MFN clauses | Legal summary, commercial analysis |
| **Contracts (Vendor/Supplier)** | Terms, pricing, exclusivity, termination | Vendor concentration, cost exposure | Supply chain risk, cost flexibility | Single source, unfavorable terms, price escalators | Operational analysis, risk register |
| **Employment Agreements** | Comp, non-competes, severance, equity | Total comp, severance exposure | Key person risk, retention risk | Weak non-competes, high severance, unvested equity | HR analysis, integration plan |
| **Cap Table** | Shareholders, shares, options, SAFEs | Ownership %, dilution, option pool | Equity structure, alignment | Complex structure, large option pool, investor rights | Legal summary, deal structure |
| **Org Chart** | Reporting structure, headcount, titles | Span of control, layers, key roles | Organizational health, gaps | Key person concentration, missing roles, over-layering | Operational analysis, integration |
| **Technology Documentation** | Architecture, stack, dependencies, tech debt | Tech debt score, modernization needs | Tech risk, integration complexity | Legacy systems, security gaps, vendor lock-in | Tech DD, integration plan |
| **Legal/Litigation** | Cases, claims, exposure, status | Total exposure, case count | Litigation risk | Material pending, pattern of claims, regulatory | Legal summary, risk register |
| **IP Documentation** | Patents, trademarks, licenses, assignments | IP portfolio value, coverage | IP strength, freedom to operate | Weak assignments, expiring patents, infringement | Legal summary, risk register |
| **Regulatory/Compliance** | Licenses, permits, compliance status | Compliance gaps, renewal dates | Regulatory risk | Missing permits, pending violations | Legal summary, risk register |
| **Management Presentations** | Strategy, forecasts, market data | Projection assumptions | Management credibility, plan reasonableness | Aggressive assumptions, inconsistencies | IC memo, risk register |
| **Data Room Index** | Document inventory, categories | Completeness score | VDR quality, missing items | Critical gaps, unusual exclusions | DD planning, risk flags |
| **Email Correspondence** | Key discussions, commitments, issues | Communication patterns | Deal dynamics, hidden issues | Concerning language, unresolved disputes | Risk register, negotiation prep |
| **Insurance Policies** | Coverage, limits, exclusions, claims | Coverage adequacy | Insurance gaps | Underinsured, pending claims, exclusions | Risk register, closing checklist |
| **Tax Returns/Analysis** | Historical taxes, positions, NOLs | Effective rate, NOL value | Tax risk, structure opportunities | Aggressive positions, audit exposure | Financial analysis, structure |
| **Environmental Reports** | Site assessments, compliance, remediation | Environmental liability | Environmental risk | Contamination, compliance gaps | Risk register, reps/warranties |
| **Real Estate/Leases** | Properties, terms, rent, options | Rent/revenue, lease duration | Facility adequacy, cost exposure | Above-market rent, short terms, relocation risk | Operational analysis, integration |
| **Board Minutes** | Decisions, discussions, issues | Governance patterns | Board effectiveness, hidden issues | Concerning discussions, unresolved conflicts | Risk register, governance DD |
| **SPA/LOI Drafts** | Deal terms, reps/warranties, indemnities | Deal structure summary | Term analysis, negotiation points | Unusual terms, weak protections | Legal analysis, closing checklist |

---

# 3️⃣ DATA MODEL & SCHEMA

## Core Entities

### Firm
```sql
CREATE TABLE firms (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    logo_url TEXT,
    settings JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    created_by UUID REFERENCES users(id),
    is_active BOOLEAN DEFAULT true
);

-- Indexes
CREATE INDEX idx_firms_slug ON firms(slug);
CREATE INDEX idx_firms_active ON firms(is_active) WHERE is_active = true;
```

### Fund
```sql
CREATE TABLE funds (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    firm_id UUID REFERENCES firms(id) ON DELETE CASCADE NOT NULL,
    name VARCHAR(255) NOT NULL,
    vintage_year INTEGER,
    fund_size DECIMAL(15,2),
    currency VARCHAR(3) DEFAULT 'USD',
    thesis TEXT,
    sector_focus TEXT[],
    geography_focus TEXT[],
    deal_size_min DECIMAL(15,2),
    deal_size_max DECIMAL(15,2),
    settings JSONB DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    created_by UUID REFERENCES users(id),
    is_active BOOLEAN DEFAULT true
);

-- Indexes
CREATE INDEX idx_funds_firm ON funds(firm_id);
CREATE INDEX idx_funds_vintage ON funds(vintage_year);
```

### Deal
```sql
CREATE TABLE deals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    fund_id UUID REFERENCES funds(id) ON DELETE CASCADE NOT NULL,
    name VARCHAR(255) NOT NULL,
    target_company VARCHAR(255) NOT NULL,
    stage deal_stage NOT NULL DEFAULT 'sourced',
    status deal_status NOT NULL DEFAULT 'active',
    status_color status_color DEFAULT 'green',
    
    -- Deal Details
    deal_size DECIMAL(15,2),
    equity_check DECIMAL(15,2),
    enterprise_value DECIMAL(15,2),
    sector VARCHAR(100),
    sub_sector VARCHAR(100),
    geography VARCHAR(100),
    
    -- Source Tracking
    source_type VARCHAR(50),
    source_name VARCHAR(255),
    source_contact VARCHAR(255),
    
    -- Scoring
    confidence_score DECIMAL(5,2),
    risk_score DECIMAL(5,2),
    thesis_alignment_score DECIMAL(5,2),
    
    -- Key Info
    thesis TEXT,
    summary TEXT,
    investment_highlights TEXT[],
    key_risks TEXT[],
    
    -- Dates
    sourced_date DATE,
    nda_signed_date DATE,
    loi_signed_date DATE,
    ic_date DATE,
    signed_date DATE,
    closed_date DATE,
    passed_date DATE,
    
    -- Assignment
    deal_lead_id UUID REFERENCES users(id),
    assigned_to UUID[] DEFAULT '{}',
    
    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    created_by UUID REFERENCES users(id),
    version INTEGER DEFAULT 1
);

-- Indexes
CREATE INDEX idx_deals_fund ON deals(fund_id);
CREATE INDEX idx_deals_stage ON deals(stage);
CREATE INDEX idx_deals_status ON deals(status);
CREATE INDEX idx_deals_sector ON deals(sector);
CREATE INDEX idx_deals_lead ON deals(deal_lead_id);
CREATE INDEX idx_deals_sourced ON deals(sourced_date);
CREATE INDEX idx_deals_updated ON deals(updated_at);

-- Full-text search
CREATE INDEX idx_deals_search ON deals USING gin(
    to_tsvector('english', coalesce(name,'') || ' ' || coalesce(target_company,'') || ' ' || coalesce(thesis,''))
);
```

### Document
```sql
CREATE TABLE documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    deal_id UUID REFERENCES deals(id) ON DELETE CASCADE NOT NULL,
    
    -- File Info
    filename VARCHAR(500) NOT NULL,
    original_filename VARCHAR(500) NOT NULL,
    file_path TEXT NOT NULL,
    folder_path TEXT DEFAULT '/',
    file_type VARCHAR(50) NOT NULL,
    file_size BIGINT NOT NULL,
    mime_type VARCHAR(100),
    
    -- Categorization
    category document_category,
    sub_category VARCHAR(100),
    tags TEXT[] DEFAULT '{}',
    
    -- Processing Status
    processing_status processing_status DEFAULT 'pending',
    ocr_status processing_status DEFAULT 'pending',
    embedding_status processing_status DEFAULT 'pending',
    analysis_status processing_status DEFAULT 'pending',
    
    -- Extracted Content
    extracted_text TEXT,
    page_count INTEGER,
    word_count INTEGER,
    
    -- AI Metadata
    auto_category document_category,
    auto_tags TEXT[] DEFAULT '{}',
    summary TEXT,
    key_entities JSONB DEFAULT '{}',
    
    -- Versioning
    version INTEGER DEFAULT 1,
    parent_version_id UUID REFERENCES documents(id),
    is_latest BOOLEAN DEFAULT true,
    
    -- Metadata
    source VARCHAR(100), -- 'upload', 'vdr_sync', 'email'
    source_id VARCHAR(255),
    uploaded_by UUID REFERENCES users(id),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_documents_deal ON documents(deal_id);
CREATE INDEX idx_documents_folder ON documents(folder_path);
CREATE INDEX idx_documents_category ON documents(category);
CREATE INDEX idx_documents_status ON documents(processing_status);
CREATE INDEX idx_documents_latest ON documents(is_latest) WHERE is_latest = true;
CREATE INDEX idx_documents_search ON documents USING gin(to_tsvector('english', coalesce(extracted_text,'')));
```

### Document Embeddings
```sql
CREATE TABLE document_embeddings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    document_id UUID REFERENCES documents(id) ON DELETE CASCADE NOT NULL,
    chunk_index INTEGER NOT NULL,
    chunk_text TEXT NOT NULL,
    embedding vector(1536), -- OpenAI ada-002 dimension
    page_number INTEGER,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    
    UNIQUE(document_id, chunk_index)
);

-- Vector similarity index
CREATE INDEX idx_embeddings_vector ON document_embeddings USING ivfflat (embedding vector_cosine_ops);
CREATE INDEX idx_embeddings_document ON document_embeddings(document_id);
```

### Workstream
```sql
CREATE TABLE workstreams (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    deal_id UUID REFERENCES deals(id) ON DELETE CASCADE NOT NULL,
    
    name VARCHAR(255) NOT NULL,
    type workstream_type NOT NULL,
    description TEXT,
    
    -- Assignment
    owner_id UUID REFERENCES users(id),
    team_members UUID[] DEFAULT '{}',
    
    -- Status
    status workstream_status DEFAULT 'not_started',
    progress_pct DECIMAL(5,2) DEFAULT 0,
    
    -- Metrics
    total_questions INTEGER DEFAULT 0,
    answered_questions INTEGER DEFAULT 0,
    open_questions INTEGER DEFAULT 0,
    overdue_questions INTEGER DEFAULT 0,
    
    -- Dates
    start_date DATE,
    target_date DATE,
    completed_date DATE,
    
    -- Settings
    settings JSONB DEFAULT '{}',
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    created_by UUID REFERENCES users(id)
);

-- Indexes
CREATE INDEX idx_workstreams_deal ON workstreams(deal_id);
CREATE INDEX idx_workstreams_owner ON workstreams(owner_id);
CREATE INDEX idx_workstreams_status ON workstreams(status);
```

### Question
```sql
CREATE TABLE questions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    workstream_id UUID REFERENCES workstreams(id) ON DELETE CASCADE NOT NULL,
    deal_id UUID REFERENCES deals(id) ON DELETE CASCADE NOT NULL,
    
    -- Question Content
    question_text TEXT NOT NULL,
    context TEXT,
    category VARCHAR(100),
    sub_category VARCHAR(100),
    
    -- Priority & Status
    priority question_priority DEFAULT 'medium',
    status question_status DEFAULT 'open',
    
    -- Assignment
    assigned_to UUID REFERENCES users(id),
    requested_from VARCHAR(255), -- External party
    
    -- Dates
    due_date DATE,
    answered_date TIMESTAMPTZ,
    
    -- AI Metadata
    ai_generated BOOLEAN DEFAULT false,
    ai_priority_score DECIMAL(5,2),
    ai_suggested_docs UUID[] DEFAULT '{}',
    
    -- Tracking
    follow_up_count INTEGER DEFAULT 0,
    last_follow_up_date TIMESTAMPTZ,
    
    -- Linking
    parent_question_id UUID REFERENCES questions(id),
    related_document_ids UUID[] DEFAULT '{}',
    related_risk_ids UUID[] DEFAULT '{}',
    
    -- Ordering
    sort_order INTEGER DEFAULT 0,
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    created_by UUID REFERENCES users(id)
);

-- Indexes
CREATE INDEX idx_questions_workstream ON questions(workstream_id);
CREATE INDEX idx_questions_deal ON questions(deal_id);
CREATE INDEX idx_questions_status ON questions(status);
CREATE INDEX idx_questions_priority ON questions(priority);
CREATE INDEX idx_questions_assigned ON questions(assigned_to);
CREATE INDEX idx_questions_due ON questions(due_date);
```

### Answer
```sql
CREATE TABLE answers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    question_id UUID REFERENCES questions(id) ON DELETE CASCADE NOT NULL,
    
    -- Answer Content
    answer_text TEXT NOT NULL,
    answer_type answer_type DEFAULT 'text',
    
    -- Validation
    is_complete BOOLEAN,
    completeness_score DECIMAL(5,2),
    ai_assessment TEXT,
    requires_follow_up BOOLEAN DEFAULT false,
    follow_up_reason TEXT,
    
    -- Source
    source_type VARCHAR(50), -- 'seller', 'internal', 'document'
    source_document_ids UUID[] DEFAULT '{}',
    
    -- Versioning
    version INTEGER DEFAULT 1,
    
    answered_by UUID REFERENCES users(id),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_answers_question ON answers(question_id);
CREATE INDEX idx_answers_complete ON answers(is_complete);
```

### Metric
```sql
CREATE TABLE metrics (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    deal_id UUID REFERENCES deals(id) ON DELETE CASCADE NOT NULL,
    
    -- Metric Definition
    name VARCHAR(255) NOT NULL,
    category metric_category NOT NULL,
    metric_type VARCHAR(50) NOT NULL, -- 'currency', 'percentage', 'number', 'ratio'
    
    -- Values
    value DECIMAL(20,4),
    value_text TEXT, -- For non-numeric
    unit VARCHAR(50),
    
    -- Period
    period_type VARCHAR(20), -- 'annual', 'quarterly', 'monthly', 'ltm', 'ntm'
    period_date DATE,
    fiscal_year INTEGER,
    fiscal_quarter INTEGER,
    
    -- Source
    source_type VARCHAR(50), -- 'extracted', 'calculated', 'manual', 'external'
    source_document_id UUID REFERENCES documents(id),
    extraction_confidence DECIMAL(5,2),
    
    -- Comparison
    prior_period_value DECIMAL(20,4),
    yoy_change DECIMAL(10,4),
    vs_budget DECIMAL(10,4),
    
    -- Flags
    is_adjusted BOOLEAN DEFAULT false,
    adjustment_reason TEXT,
    is_verified BOOLEAN DEFAULT false,
    verified_by UUID REFERENCES users(id),
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    created_by UUID REFERENCES users(id)
);

-- Indexes
CREATE INDEX idx_metrics_deal ON metrics(deal_id);
CREATE INDEX idx_metrics_category ON metrics(category);
CREATE INDEX idx_metrics_period ON metrics(period_date);
CREATE INDEX idx_metrics_name ON metrics(name);
```

### Insight
```sql
CREATE TABLE insights (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    deal_id UUID REFERENCES deals(id) ON DELETE CASCADE NOT NULL,
    
    -- Insight Content
    agent_type agent_type NOT NULL,
    insight_type VARCHAR(100) NOT NULL,
    title VARCHAR(500) NOT NULL,
    summary TEXT NOT NULL,
    detailed_analysis TEXT,
    
    -- Findings
    key_findings JSONB DEFAULT '[]',
    supporting_data JSONB DEFAULT '{}',
    
    -- Risk Flags
    risk_flags JSONB DEFAULT '[]',
    risk_level risk_level,
    
    -- Confidence
    confidence_score DECIMAL(5,2) NOT NULL,
    confidence_factors JSONB DEFAULT '{}',
    
    -- Evidence
    source_document_ids UUID[] DEFAULT '{}',
    source_metric_ids UUID[] DEFAULT '{}',
    citations JSONB DEFAULT '[]',
    
    -- Status
    status insight_status DEFAULT 'draft',
    reviewed_by UUID REFERENCES users(id),
    reviewed_at TIMESTAMPTZ,
    
    -- Versioning
    version INTEGER DEFAULT 1,
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_insights_deal ON insights(deal_id);
CREATE INDEX idx_insights_agent ON insights(agent_type);
CREATE INDEX idx_insights_type ON insights(insight_type);
CREATE INDEX idx_insights_confidence ON insights(confidence_score);
CREATE INDEX idx_insights_risk ON insights(risk_level);
```

### Risk
```sql
CREATE TABLE risks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    deal_id UUID REFERENCES deals(id) ON DELETE CASCADE NOT NULL,
    
    -- Risk Details
    title VARCHAR(500) NOT NULL,
    description TEXT NOT NULL,
    category risk_category NOT NULL,
    sub_category VARCHAR(100),
    
    -- Severity
    severity risk_level NOT NULL,
    likelihood risk_level,
    impact risk_level,
    risk_score DECIMAL(5,2),
    
    -- Quantification
    financial_impact_low DECIMAL(15,2),
    financial_impact_high DECIMAL(15,2),
    probability_pct DECIMAL(5,2),
    expected_value DECIMAL(15,2),
    
    -- Status
    status risk_status DEFAULT 'open',
    
    -- Mitigation
    mitigation_plan TEXT,
    mitigation_status VARCHAR(50),
    mitigation_owner_id UUID REFERENCES users(id),
    mitigation_due_date DATE,
    
    -- Deal Impact
    is_deal_breaker BOOLEAN DEFAULT false,
    affects_valuation BOOLEAN DEFAULT false,
    valuation_impact_pct DECIMAL(5,2),
    requires_reps_warranty BOOLEAN DEFAULT false,
    rw_suggestion TEXT,
    
    -- Source
    source_type VARCHAR(50), -- 'ai_detected', 'manual', 'document'
    source_insight_id UUID REFERENCES insights(id),
    source_document_ids UUID[] DEFAULT '{}',
    
    -- Assignment
    owner_id UUID REFERENCES users(id),
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    created_by UUID REFERENCES users(id)
);

-- Indexes
CREATE INDEX idx_risks_deal ON risks(deal_id);
CREATE INDEX idx_risks_category ON risks(category);
CREATE INDEX idx_risks_severity ON risks(severity);
CREATE INDEX idx_risks_status ON risks(status);
CREATE INDEX idx_risks_deal_breaker ON risks(is_deal_breaker) WHERE is_deal_breaker = true;
```

### Decision
```sql
CREATE TABLE decisions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    deal_id UUID REFERENCES deals(id) ON DELETE CASCADE NOT NULL,
    
    -- Decision Details
    decision_type decision_type NOT NULL,
    title VARCHAR(500) NOT NULL,
    description TEXT,
    
    -- Outcome
    outcome decision_outcome,
    rationale TEXT,
    conditions TEXT[],
    
    -- Voting (for IC decisions)
    votes JSONB DEFAULT '[]', -- [{user_id, vote, comment, timestamp}]
    required_approvers UUID[] DEFAULT '{}',
    
    -- Context
    related_memo_id UUID,
    related_document_ids UUID[] DEFAULT '{}',
    related_risk_ids UUID[] DEFAULT '{}',
    
    -- Status
    status decision_status DEFAULT 'pending',
    decided_at TIMESTAMPTZ,
    decided_by UUID REFERENCES users(id),
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    created_by UUID REFERENCES users(id)
);

-- Indexes
CREATE INDEX idx_decisions_deal ON decisions(deal_id);
CREATE INDEX idx_decisions_type ON decisions(decision_type);
CREATE INDEX idx_decisions_status ON decisions(status);
```

### User
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    
    -- Profile
    email VARCHAR(255) NOT NULL UNIQUE,
    full_name VARCHAR(255) NOT NULL,
    avatar_url TEXT,
    title VARCHAR(100),
    phone VARCHAR(50),
    
    -- Organization
    firm_id UUID REFERENCES firms(id),
    department VARCHAR(100),
    
    -- Settings
    preferences JSONB DEFAULT '{}',
    notification_settings JSONB DEFAULT '{}',
    
    -- Status
    is_active BOOLEAN DEFAULT true,
    last_login_at TIMESTAMPTZ,
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_firm ON users(firm_id);
```

### User Roles (Security - Separate Table)
```sql
CREATE TYPE app_role AS ENUM ('admin', 'partner', 'vp', 'associate', 'analyst', 'viewer');

CREATE TABLE user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    firm_id UUID REFERENCES firms(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    fund_ids UUID[] DEFAULT '{}', -- Empty = all funds
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    created_by UUID REFERENCES users(id),
    
    UNIQUE(user_id, firm_id, role)
);

-- Security Definer Function (Prevents RLS Recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
    SELECT EXISTS (
        SELECT 1 FROM public.user_roles
        WHERE user_id = _user_id AND role = _role
    )
$$;

CREATE OR REPLACE FUNCTION public.user_firm_id(_user_id UUID)
RETURNS UUID
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
    SELECT firm_id FROM public.users WHERE id = _user_id LIMIT 1
$$;
```

### Comment
```sql
CREATE TABLE comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Polymorphic Association
    entity_type VARCHAR(50) NOT NULL, -- 'deal', 'document', 'question', 'risk', 'insight'
    entity_id UUID NOT NULL,
    deal_id UUID REFERENCES deals(id) ON DELETE CASCADE NOT NULL,
    
    -- Comment Content
    content TEXT NOT NULL,
    comment_type comment_type DEFAULT 'general',
    
    -- Threading
    parent_id UUID REFERENCES comments(id),
    thread_root_id UUID REFERENCES comments(id),
    
    -- Mentions
    mentioned_user_ids UUID[] DEFAULT '{}',
    
    -- Document Position (for inline comments)
    document_position JSONB, -- {page, x, y, selection}
    
    -- Status
    is_resolved BOOLEAN DEFAULT false,
    resolved_by UUID REFERENCES users(id),
    resolved_at TIMESTAMPTZ,
    
    -- Metadata
    author_id UUID REFERENCES users(id) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    edited_at TIMESTAMPTZ
);

-- Indexes
CREATE INDEX idx_comments_entity ON comments(entity_type, entity_id);
CREATE INDEX idx_comments_deal ON comments(deal_id);
CREATE INDEX idx_comments_thread ON comments(thread_root_id);
CREATE INDEX idx_comments_author ON comments(author_id);
CREATE INDEX idx_comments_unresolved ON comments(is_resolved) WHERE is_resolved = false;
```

### Task
```sql
CREATE TABLE tasks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    deal_id UUID REFERENCES deals(id) ON DELETE CASCADE,
    
    -- Task Details
    title VARCHAR(500) NOT NULL,
    description TEXT,
    task_type VARCHAR(50),
    
    -- Assignment
    assigned_to UUID REFERENCES users(id),
    assigned_by UUID REFERENCES users(id),
    
    -- Status
    status task_status DEFAULT 'todo',
    priority task_priority DEFAULT 'medium',
    
    -- Dates
    due_date DATE,
    completed_at TIMESTAMPTZ,
    
    -- Source
    source_type VARCHAR(50), -- 'manual', 'ai_generated', 'comment', 'cp'
    source_id UUID,
    
    -- Related Entities
    related_entity_type VARCHAR(50),
    related_entity_id UUID,
    
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    created_by UUID REFERENCES users(id)
);

-- Indexes
CREATE INDEX idx_tasks_deal ON tasks(deal_id);
CREATE INDEX idx_tasks_assigned ON tasks(assigned_to);
CREATE INDEX idx_tasks_status ON tasks(status);
CREATE INDEX idx_tasks_due ON tasks(due_date);
```

### Audit Log
```sql
CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    
    -- Actor
    user_id UUID REFERENCES users(id),
    user_email VARCHAR(255),
    ip_address INET,
    user_agent TEXT,
    
    -- Action
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(50) NOT NULL,
    entity_id UUID NOT NULL,
    
    -- Context
    firm_id UUID REFERENCES firms(id),
    deal_id UUID REFERENCES deals(id),
    
    -- Changes
    old_values JSONB,
    new_values JSONB,
    
    -- Metadata
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_audit_user ON audit_logs(user_id);
CREATE INDEX idx_audit_entity ON audit_logs(entity_type, entity_id);
CREATE INDEX idx_audit_firm ON audit_logs(firm_id);
CREATE INDEX idx_audit_deal ON audit_logs(deal_id);
CREATE INDEX idx_audit_created ON audit_logs(created_at);

-- Partitioning for scale (optional)
-- CREATE TABLE audit_logs PARTITION BY RANGE (created_at);
```

## Enum Types

```sql
-- Deal
CREATE TYPE deal_stage AS ENUM ('sourced', 'screening', 'nda', 'dd', 'ic', 'negotiation', 'signed', 'closing', 'closed', 'passed', 'dead');
CREATE TYPE deal_status AS ENUM ('active', 'on_hold', 'closed', 'passed');
CREATE TYPE status_color AS ENUM ('green', 'yellow', 'red');

-- Document
CREATE TYPE document_category AS ENUM ('financial', 'legal', 'commercial', 'operational', 'hr', 'technology', 'regulatory', 'correspondence', 'other');
CREATE TYPE processing_status AS ENUM ('pending', 'processing', 'complete', 'failed');

-- Workstream
CREATE TYPE workstream_type AS ENUM ('financial', 'legal', 'commercial', 'operational', 'technology', 'hr', 'regulatory', 'tax', 'environmental', 'other');
CREATE TYPE workstream_status AS ENUM ('not_started', 'in_progress', 'on_hold', 'complete');

-- Question
CREATE TYPE question_priority AS ENUM ('critical', 'high', 'medium', 'low');
CREATE TYPE question_status AS ENUM ('open', 'answered', 'partial', 'closed', 'na');
CREATE TYPE answer_type AS ENUM ('text', 'document', 'data', 'verbal');

-- Metric
CREATE TYPE metric_category AS ENUM ('revenue', 'profitability', 'growth', 'efficiency', 'liquidity', 'leverage', 'valuation', 'operational', 'customer', 'other');

-- Agent & Insight
CREATE TYPE agent_type AS ENUM ('financial', 'legal', 'commercial', 'operational', 'risk', 'valuation', 'integration', 'communication', 'synthesis');
CREATE TYPE insight_status AS ENUM ('draft', 'reviewed', 'approved', 'archived');

-- Risk
CREATE TYPE risk_category AS ENUM ('financial', 'legal', 'commercial', 'operational', 'technology', 'regulatory', 'market', 'integration', 'other');
CREATE TYPE risk_level AS ENUM ('critical', 'high', 'medium', 'low');
CREATE TYPE risk_status AS ENUM ('open', 'mitigated', 'accepted', 'closed', 'monitoring');

-- Decision
CREATE TYPE decision_type AS ENUM ('screening', 'dd_proceed', 'ic', 'loi', 'signing', 'closing', 'other');
CREATE TYPE decision_outcome AS ENUM ('proceed', 'pass', 'conditional', 'defer');
CREATE TYPE decision_status AS ENUM ('pending', 'decided', 'superseded');

-- Comment
CREATE TYPE comment_type AS ENUM ('general', 'question', 'risk', 'decision', 'action', 'fyi');

-- Task
CREATE TYPE task_status AS ENUM ('todo', 'in_progress', 'blocked', 'done', 'cancelled');
CREATE TYPE task_priority AS ENUM ('critical', 'high', 'medium', 'low');
```

---

# 4️⃣ MULTI-AGENT AI SYSTEM DESIGN

## Agent Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    ORCHESTRATION LAYER                          │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │              Agent Coordinator                             │  │
│  │  - Task routing & prioritization                          │  │
│  │  - Context assembly                                        │  │
│  │  - Result aggregation                                      │  │
│  │  - Human-in-the-loop triggers                             │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│   FINANCIAL   │    │    LEGAL      │    │  COMMERCIAL   │
│    AGENT      │    │    AGENT      │    │    AGENT      │
└───────────────┘    └───────────────┘    └───────────────┘
        │                     │                     │
        ▼                     ▼                     ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│     RISK      │    │  VALUATION    │    │ OPERATIONAL   │
│    AGENT      │    │    AGENT      │    │    AGENT      │
└───────────────┘    └───────────────┘    └───────────────┘
        │                     │                     │
        └─────────────────────┼─────────────────────┘
                              ▼
                    ┌───────────────┐
                    │   SYNTHESIS   │
                    │    AGENT      │
                    └───────────────┘
                              │
                              ▼
                    ┌───────────────┐
                    │ COMMUNICATION │
                    │    AGENT      │
                    └───────────────┘
```

## Agent Specifications

### 1. Financial Agent

| Attribute | Specification |
|-----------|---------------|
| **Purpose** | Analyze financial documents, extract metrics, identify trends, flag anomalies |
| **Inputs** | P&L, Balance Sheet, Cash Flow, QoE, Budget, Forecasts |
| **Tools** | - Document parser<br>- Table extractor<br>- Calculation engine<br>- Trend analyzer<br>- Anomaly detector |
| **Outputs** | - Extracted financial metrics<br>- Revenue/margin analysis<br>- Working capital summary<br>- QoE reconciliation<br>- Forecast validation<br>- Financial risk flags |
| **Confidence Scoring** | - Data completeness (0-1)<br>- Extraction accuracy (0-1)<br>- Calculation verification (0-1)<br>- Overall: weighted average |
| **Failure Handling** | - Missing data → Flag gaps, request documents<br>- Extraction errors → Manual review queue<br>- Calculation mismatches → Surface for verification |
| **Human Checkpoints** | - QoE adjustments > $1M<br>- Revenue recognition changes<br>- Unusual margin movements<br>- Forecast assumptions |

### 2. Legal Agent

| Attribute | Specification |
|-----------|---------------|
| **Purpose** | Extract contract terms, identify legal risks, analyze compliance |
| **Inputs** | Contracts, Legal docs, Litigation files, IP docs, Regulatory filings |
| **Tools** | - Clause extractor<br>- Term identifier<br>- Risk classifier<br>- Compliance checker<br>- IP analyzer |
| **Outputs** | - Contract term matrix<br>- CoC clause summary<br>- Litigation exposure<br>- IP inventory<br>- Compliance gaps<br>- Legal risk flags |
| **Confidence Scoring** | - Document quality (0-1)<br>- Clause extraction accuracy (0-1)<br>- Risk classification confidence (0-1) |
| **Failure Handling** | - Unclear language → Flag for legal review<br>- Missing contracts → Generate request list<br>- Complex clauses → Human escalation |
| **Human Checkpoints** | - Material contract interpretation<br>- Litigation assessment<br>- IP ownership questions<br>- Regulatory implications |

### 3. Commercial Agent

| Attribute | Specification |
|-----------|---------------|
| **Purpose** | Analyze customer base, market position, competitive dynamics |
| **Inputs** | Customer lists, Contracts, CRM data, Market reports, Competitor info |
| **Tools** | - Concentration analyzer<br>- Churn calculator<br>- Market sizer<br>- Competitive mapper<br>- Pricing analyzer |
| **Outputs** | - Customer concentration analysis<br>- Churn/retention metrics<br>- Market size estimates<br>- Competitive positioning<br>- Pricing power assessment<br>- Commercial risk flags |
| **Confidence Scoring** | - Data recency (0-1)<br>- Data completeness (0-1)<br>- Market data reliability (0-1) |
| **Failure Handling** | - Incomplete customer data → Request additional info<br>- Outdated market data → Flag uncertainty<br>- Missing competitor info → External research |
| **Human Checkpoints** | - Customer relationship assumptions<br>- Market growth projections<br>- Competitive threat assessment |

### 4. Risk Agent

| Attribute | Specification |
|-----------|---------------|
| **Purpose** | Aggregate risks, score severity, suggest mitigations |
| **Inputs** | All agent outputs, Documents, Historical deal data |
| **Tools** | - Risk classifier<br>- Severity scorer<br>- Impact calculator<br>- Mitigation suggester<br>- Deal breaker detector |
| **Outputs** | - Risk inventory<br>- Risk heat map data<br>- Severity scores<br>- Impact quantification<br>- Mitigation recommendations<br>- Deal breaker alerts |
| **Confidence Scoring** | - Source reliability (0-1)<br>- Quantification accuracy (0-1)<br>- Historical pattern match (0-1) |
| **Failure Handling** | - Unquantifiable risk → Qualitative assessment<br>- Conflicting signals → Surface uncertainty<br>- Novel risk → Flag for expert review |
| **Human Checkpoints** | - All critical/high risks<br>- Deal breaker classification<br>- Mitigation plan approval |

### 5. Valuation Agent

| Attribute | Specification |
|-----------|---------------|
| **Purpose** | Build valuation models, run scenarios, benchmark comparables |
| **Inputs** | Financials, Metrics, Market data, Comparable companies |
| **Tools** | - Multiple calculator<br>- DCF builder<br>- Scenario modeler<br>- Sensitivity analyzer<br>- Comparable finder |
| **Outputs** | - Valuation range (Base/Bull/Bear)<br>- Comparable analysis<br>- Multiple justification<br>- Sensitivity tables<br>- Exit scenario analysis |
| **Confidence Scoring** | - Data quality (0-1)<br>- Comparable relevance (0-1)<br>- Assumption reasonableness (0-1) |
| **Failure Handling** | - Missing comps → Expand search criteria<br>- Projection uncertainty → Widen range<br>- Unusual multiples → Flag for review |
| **Human Checkpoints** | - All valuation assumptions<br>- Comparable selection<br>- Exit timing/multiple |

### 6. Operational Agent

| Attribute | Specification |
|-----------|---------------|
| **Purpose** | Assess operational capabilities, identify integration items |
| **Inputs** | Org charts, Tech docs, Process docs, Vendor contracts |
| **Tools** | - Org analyzer<br>- Tech stack mapper<br>- Process documenter<br>- Synergy calculator<br>- Integration planner |
| **Outputs** | - Org structure analysis<br>- Key person identification<br>- Tech assessment<br>- Process gaps<br>- Synergy estimates<br>- Integration roadmap |
| **Confidence Scoring** | - Documentation completeness (0-1)<br>- Assessment accuracy (0-1)<br>- Synergy reliability (0-1) |
| **Failure Handling** | - Missing org data → Management interview prep<br>- Tech complexity → Expert consultation<br>- Synergy uncertainty → Conservative estimate |
| **Human Checkpoints** | - Key person decisions<br>- Synergy assumptions<br>- Integration priorities |

### 7. Synthesis Agent

| Attribute | Specification |
|-----------|---------------|
| **Purpose** | Aggregate all analyses into coherent recommendations |
| **Inputs** | All agent outputs, Deal context, Fund thesis |
| **Tools** | - Summary generator<br>- Recommendation engine<br>- Memo builder<br>- Slide generator |
| **Outputs** | - Executive summary<br>- IC memo draft<br>- Investment recommendation<br>- Key findings summary<br>- Board presentation |
| **Confidence Scoring** | - Underlying analysis quality (0-1)<br>- Consistency across agents (0-1)<br>- Recommendation strength (0-1) |
| **Failure Handling** | - Conflicting insights → Surface disagreements<br>- Incomplete analysis → List gaps<br>- Low confidence → Caveat recommendations |
| **Human Checkpoints** | - All recommendations<br>- IC memo approval<br>- Final investment decision |

### 8. Communication Agent

| Attribute | Specification |
|-----------|---------------|
| **Purpose** | Draft communications, automate follow-ups |
| **Inputs** | Deal context, Templates, Recipients, Triggers |
| **Tools** | - Email drafter<br>- Template filler<br>- Scheduler<br>- Tone adjuster |
| **Outputs** | - Draft emails<br>- Follow-up reminders<br>- Status updates<br>- Meeting requests |
| **Confidence Scoring** | - Template match (0-1)<br>- Context appropriateness (0-1) |
| **Failure Handling** | - Unclear context → Request clarification<br>- Sensitive content → Human review |
| **Human Checkpoints** | - All external communications<br>- Sensitive internal updates |

---

# 5️⃣ WORKFLOW FLOWS

## Workflow 1: Deal Intake

```
TRIGGER: New deal submission (manual or API)

FLOW:
┌─────────────────┐
│ 1. SUBMISSION   │ User enters deal info OR CIM uploaded
└────────┬────────┘
         ▼
┌─────────────────┐
│ 2. VALIDATION   │ System validates required fields
└────────┬────────┘
         ▼
┌─────────────────┐
│ 3. DUPLICATE    │ [AI] Check against existing deals
│    CHECK        │ → Match found? Surface for review
└────────┬────────┘
         ▼
┌─────────────────┐
│ 4. AUTO-        │ [AI] Extract company info, sector
│    ENRICHMENT   │ → Populate deal fields
└────────┬────────┘
         ▼
┌─────────────────┐
│ 5. ASSIGNMENT   │ [HUMAN] VP assigns deal lead
└────────┬────────┘
         ▼
┌─────────────────┐
│ 6. SCORING      │ [AI] Initial thesis alignment score
└────────┬────────┘
         ▼
┌─────────────────┐
│ 7. NOTIFICATION │ System notifies assigned team
└────────┬────────┘
         ▼
┌─────────────────┐
│ 8. DEAL CREATED │ Deal in 'Sourced' stage
│    STATUS:      │ Ready for screening
│    Sourced      │
└─────────────────┘

STATE TRANSITIONS: None → Sourced
OUTPUTS: Deal record, Assignment, Initial score
```

## Workflow 2: Screening

```
TRIGGER: Deal in 'Sourced' stage + CIM uploaded

FLOW:
┌─────────────────┐
│ 1. CIM UPLOAD   │ Associate uploads CIM
└────────┬────────┘
         ▼
┌─────────────────┐
│ 2. PROCESSING   │ [AI] Extract text, categorize
└────────┬────────┘
         ▼
┌─────────────────┐
│ 3. ANALYSIS     │ [AI] Financial Agent extracts metrics
│                 │ [AI] Commercial Agent analyzes market
│                 │ [AI] Risk Agent flags initial risks
└────────┬────────┘
         ▼
┌─────────────────┐
│ 4. SCREENING    │ [AI] Generate screening memo
│    MEMO         │ → Investment highlights
│                 │ → Key risks
│                 │ → Recommendation
└────────┬────────┘
         ▼
┌─────────────────┐
│ 5. VP REVIEW    │ [HUMAN] VP reviews memo
│                 │ → Proceed to DD?
│                 │ → Pass?
│                 │ → Need more info?
└────────┬────────┘
         ▼
┌─────────────────┐
│ 6. DECISION     │ Record decision + rationale
│    CAPTURE      │
└────────┬────────┘
         │
    ┌────┴────┬────────────┐
    ▼         ▼            ▼
┌───────┐ ┌───────┐  ┌───────────┐
│ PASS  │ │ HOLD  │  │ PROCEED   │
│       │ │       │  │ TO NDA    │
└───────┘ └───────┘  └───────────┘

STATE TRANSITIONS: Sourced → Screening → (NDA | Passed | Hold)
OUTPUTS: Screening memo, Decision record
```

## Workflow 3: NDA & VDR Opening

```
TRIGGER: Screening decision = Proceed

FLOW:
┌─────────────────┐
│ 1. NDA REQUEST  │ [AI] Generate NDA request email
│                 │ [HUMAN] Review and send
└────────┬────────┘
         ▼
┌─────────────────┐
│ 2. NDA TRACKING │ System tracks NDA status
│                 │ → Auto-reminder at 3, 7 days
└────────┬────────┘
         ▼
┌─────────────────┐
│ 3. NDA RECEIVED │ [AI] Extract NDA terms
│                 │ → Flag non-standard terms
└────────┬────────┘
         ▼
┌─────────────────┐
│ 4. NDA REVIEW   │ [HUMAN] Legal reviews if needed
└────────┬────────┘
         ▼
┌─────────────────┐
│ 5. NDA SIGNED   │ Record signing date
│                 │ Trigger VDR access request
└────────┬────────┘
         ▼
┌─────────────────┐
│ 6. VDR ACCESS   │ System requests VDR credentials
│                 │ [HUMAN] Enter VDR details
└────────┬────────┘
         ▼
┌─────────────────┐
│ 7. VDR SYNC     │ [AI] Sync folder structure
│                 │ [AI] Categorize documents
│                 │ [AI] Flag missing critical docs
└────────┬────────┘
         ▼
┌─────────────────┐
│ 8. DD READY     │ Deal ready for due diligence
│    STATUS: DD   │
└─────────────────┘

STATE TRANSITIONS: Screening → NDA → DD
OUTPUTS: Signed NDA, VDR sync, Document inventory
```

## Workflow 4: Due Diligence Execution

```
TRIGGER: Deal stage = DD

FLOW:
┌─────────────────────────────────────────────────────────┐
│ 1. WORKSTREAM SETUP                                     │
│    Create workstreams: Financial, Legal, Commercial,    │
│    Operational, Technology, HR, Tax                     │
│    [HUMAN] Assign owners                                │
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────┐
│ 2. DD CHECKLIST GENERATION                              │
│    [AI] Generate questions per workstream               │
│    Based on: Deal type, sector, available docs          │
│    [HUMAN] Review and customize                         │
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────┐
│ 3. DOCUMENT ANALYSIS (Parallel)                         │
│                                                         │
│    ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│    │  Financial   │  │    Legal     │  │  Commercial  │ │
│    │    Agent     │  │    Agent     │  │    Agent     │ │
│    └──────┬───────┘  └──────┬───────┘  └──────┬───────┘ │
│           ▼                 ▼                 ▼         │
│    ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │
│    │  Metrics     │  │  Terms       │  │  Customer    │ │
│    │  Extracted   │  │  Extracted   │  │  Analysis    │ │
│    └──────────────┘  └──────────────┘  └──────────────┘ │
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────┐
│ 4. Q&A MANAGEMENT                                       │
│    - Questions sent to seller                           │
│    - Answers received and validated [AI]                │
│    - Follow-ups generated [AI] if needed                │
│    - Progress tracked per workstream                    │
│    [HUMAN] Review answers, close questions              │
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────┐
│ 5. RISK AGGREGATION                                     │
│    [AI] Risk Agent aggregates all findings              │
│    → Categorize and score                               │
│    → Generate risk register                             │
│    [HUMAN] Review critical risks                        │
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────┐
│ 6. DD COMPLETION CHECK                                  │
│    - All critical questions answered?                   │
│    - All documents received?                            │
│    - All risks assessed?                                │
│    [HUMAN] Confirm DD complete                          │
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────┐
│ 7. DD SUMMARY                                           │
│    [AI] Generate DD summary report                      │
│    [HUMAN] Review and finalize                          │
│    STATUS: Ready for IC                                 │
└─────────────────────────────────────────────────────────┘

STATE TRANSITIONS: DD → IC (when complete)
OUTPUTS: Answered questions, Insights, Risk register, DD summary
```

## Workflow 5: Q&A Management

```
TRIGGER: Question created in workstream

FLOW:
┌─────────────────┐
│ 1. QUESTION     │ Question added (manual or AI-generated)
│    CREATED      │ Priority assigned
└────────┬────────┘
         ▼
┌─────────────────┐
│ 2. ASSIGNMENT   │ [HUMAN] Assign to team member
│                 │ Set due date
└────────┬────────┘
         ▼
┌─────────────────┐
│ 3. SEND TO      │ [AI] Draft request email
│    SELLER       │ [HUMAN] Review and send
└────────┬────────┘
         ▼
┌─────────────────┐
│ 4. TRACKING     │ System tracks response
│                 │ → Day 3: Reminder
│                 │ → Day 7: Escalation
└────────┬────────┘
         ▼
┌─────────────────┐
│ 5. ANSWER       │ Answer received
│    RECEIVED     │ [AI] Validate completeness
└────────┬────────┘
         │
    ┌────┴────┬────────────┐
    ▼         ▼            ▼
┌───────┐ ┌───────┐  ┌───────────┐
│COMPLETE│ │PARTIAL│  │ EVASIVE   │
│        │ │       │  │           │
└───┬────┘ └───┬───┘  └─────┬─────┘
    │         │            │
    │         ▼            ▼
    │    ┌─────────────────────┐
    │    │ [AI] Generate       │
    │    │ follow-up question  │
    │    └──────────┬──────────┘
    │              │
    │              ▼
    │    ┌─────────────────────┐
    │    │ [HUMAN] Review      │
    │    │ and send follow-up  │
    │    └──────────┬──────────┘
    │              │
    └──────────────┤
                   ▼
         ┌─────────────────┐
         │ 6. CLOSE        │
         │    QUESTION     │
         │    Link to docs │
         │    Record in    │
         │    insights     │
         └─────────────────┘

OUTPUTS: Answered question, Follow-ups, Linked documents
```

## Workflow 6: IC Preparation

```
TRIGGER: DD complete + Team ready for IC

FLOW:
┌─────────────────┐
│ 1. IC TRIGGER   │ [HUMAN] VP initiates IC prep
└────────┬────────┘
         ▼
┌─────────────────────────────────────────────────────────┐
│ 2. DATA AGGREGATION                                     │
│    [AI] Synthesis Agent collects:                       │
│    - All workstream summaries                           │
│    - Financial analysis                                 │
│    - Risk register                                      │
│    - Valuation analysis                                 │
│    - Key Q&A findings                                   │
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────┐
│ 3. IC MEMO GENERATION                                   │
│    [AI] Generate IC memo sections:                      │
│    - Executive Summary                                  │
│    - Investment Thesis                                  │
│    - Company Overview                                   │
│    - Financial Analysis                                 │
│    - Commercial Assessment                              │
│    - Key Risks & Mitigations                            │
│    - Valuation & Returns                                │
│    - Recommendation                                     │
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────┐
│ 4. SCENARIO     │ [AI] Valuation Agent generates:
│    MODELING     │ - Base case
│                 │ - Bull case
│                 │ - Bear case
│                 │ - Sensitivity analysis
└────────┬────────┘
         ▼
┌─────────────────┐
│ 5. MEMO REVIEW  │ [HUMAN] Deal team reviews draft
│                 │ → Edits and refinements
│                 │ → Fact-checking
└────────┬────────┘
         ▼
┌─────────────────┐
│ 6. MEMO         │ [HUMAN] VP/Partner approval
│    APPROVAL     │
└────────┬────────┘
         ▼
┌─────────────────┐
│ 7. IC SCHEDULING│ Schedule IC meeting
│                 │ Distribute memo to IC members
└────────┬────────┘
         ▼
┌─────────────────┐
│ 8. IC MEETING   │ [HUMAN] Present to IC
│                 │ Record discussion
└────────┬────────┘
         ▼
┌─────────────────┐
│ 9. VOTING       │ [HUMAN] IC members vote
│                 │ Capture: Vote + Comments
└────────┬────────┘
         ▼
┌─────────────────┐
│ 10. DECISION    │ Record outcome:
│     RECORD      │ Proceed / Pass / Conditional
│                 │ Next steps captured
└─────────────────┘

STATE TRANSITIONS: IC → (Negotiation | Passed)
OUTPUTS: IC memo, Scenarios, Decision record
```

## Workflow 7: Signing & Closing

```
TRIGGER: IC approval to proceed

FLOW:
┌─────────────────┐
│ 1. SPA          │ SPA draft uploaded
│    RECEIVED     │
└────────┬────────┘
         ▼
┌─────────────────┐
│ 2. SPA ANALYSIS │ [AI] Legal Agent extracts:
│                 │ - Key terms
│                 │ - R&W summary
│                 │ - Indemnities
│                 │ - Conditions precedent
└────────┬────────┘
         ▼
┌─────────────────┐
│ 3. CP CHECKLIST │ [AI] Generate CP checklist
│    GENERATION   │ [HUMAN] Review and assign
└────────┬────────┘
         ▼
┌─────────────────┐
│ 4. CP TRACKING  │ Track each CP:
│                 │ - Owner
│                 │ - Due date
│                 │ - Status
│                 │ - Evidence
└────────┬────────┘
         │
         ├──────────────────────────────────┐
         ▼                                  ▼
┌─────────────────┐              ┌─────────────────┐
│ 5a. CP          │              │ 5b. BLOCKER     │
│     COMPLETION  │              │     DETECTION   │
│     Evidence    │              │     [AI] Alert  │
│     uploaded    │              │     if at risk  │
└────────┬────────┘              └────────┬────────┘
         │                                │
         └──────────────┬─────────────────┘
                        ▼
┌─────────────────────────────────────────────────────────┐
│ 6. SIGNING READINESS                                    │
│    All CPs complete?                                    │
│    [HUMAN] Confirm ready for signing                    │
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────┐
│ 7. SIGNING      │ Execute signing
│                 │ Record signature status
└────────┬────────┘
         ▼
┌─────────────────┐
│ 8. FUNDS FLOW   │ Track wire transfers
│                 │ Confirm receipt
└────────┬────────┘
         ▼
┌─────────────────┐
│ 9. CLOSING      │ All funds received
│    COMPLETE     │ Record closing date
│                 │ STATUS: Closed
└────────┬────────┘
         ▼
┌─────────────────┐
│ 10. CLOSING     │ Generate closing binder
│     BINDER      │ Archive all documents
│                 │ Transition to Portfolio
└─────────────────┘

STATE TRANSITIONS: Negotiation → Signed → Closing → Closed
OUTPUTS: CP checklist, Closing binder, Portfolio record
```

## Workflow 8: Post-Close Monitoring

```
TRIGGER: Deal closed

FLOW:
┌─────────────────┐
│ 1. PORTFOLIO    │ Create portfolio company record
│    SETUP        │ Link from deal
└────────┬────────┘
         ▼
┌─────────────────┐
│ 2. KPI SETUP    │ [HUMAN] Define tracking KPIs
│                 │ Set targets
│                 │ Assign reporting responsibility
└────────┬────────┘
         ▼
┌─────────────────┐
│ 3. 100-DAY      │ [AI] Generate 100-day plan template
│    PLAN         │ [HUMAN] Customize and assign
└────────┬────────┘
         ▼
┌─────────────────────────────────────────────────────────┐
│ 4. RECURRING REPORTING CYCLE (Monthly/Quarterly)       │
│                                                         │
│    ┌──────────────┐                                     │
│    │ KPI Data     │ ← Management submits actuals        │
│    │ Submission   │                                     │
│    └──────┬───────┘                                     │
│           ▼                                             │
│    ┌──────────────┐                                     │
│    │ Variance     │ [AI] Calculate vs targets           │
│    │ Analysis     │ Flag significant deviations         │
│    └──────┬───────┘                                     │
│           ▼                                             │
│    ┌──────────────┐                                     │
│    │ Board Pack   │ [AI] Generate board materials       │
│    │ Generation   │ [HUMAN] Review and finalize         │
│    └──────────────┘                                     │
└─────────────────────────────────────────────────────────┘
         ▼
┌─────────────────┐
│ 5. EXIT         │ [HUMAN] Define exit criteria
│    PLANNING     │ [AI] Track readiness score
└────────┬────────┘
         ▼
┌─────────────────┐
│ 6. EXIT         │ Initiate exit process
│    EXECUTION    │ (Separate workflow)
└─────────────────┘

OUTPUTS: KPI dashboards, Board packs, Exit readiness
```

---

# 6️⃣ DASHBOARD & UI SPECIFICATION

## Screen 1: Deal Pipeline Dashboard

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │  HEADER: Fund Selector | Search | + New Deal | Notifications | Profile │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ ┌──────────────────────────────────────────────────────────────┐           │
│ │  FILTER BAR                                                   │           │
│ │  [Sector ▾] [Geography ▾] [Size ▾] [Status ▾] [Assigned ▾]    │           │
│ │  [Date Range] [Clear Filters]                                 │           │
│ └──────────────────────────────────────────────────────────────┘           │
│                                                                             │
│ ┌───────┬───────┬───────┬───────┬───────┬───────┬───────┐                 │
│ │SOURCED│SCREEN │  NDA  │  DD   │  IC   │SIGNED │CLOSED │  ← Kanban       │
│ │  12   │   8   │   5   │   4   │   2   │   1   │   15  │    Columns      │
│ ├───────┼───────┼───────┼───────┼───────┼───────┼───────┤                 │
│ │┌─────┐│┌─────┐│┌─────┐│┌─────┐│┌─────┐│┌─────┐│┌─────┐│                 │
│ ││Deal ││Deal ││Deal ││Deal ││Deal ││Deal ││Deal │                        │
│ ││Card ││Card ││Card ││Card ││Card ││Card ││Card │                        │
│ │├─────┤│├─────┤│├─────┤│├─────┤│├─────┤│├─────┤│├─────┤│                 │
│ ││🟢 A ││🟡 B ││🟢 E ││🟢 H ││🟢 K ││🟢 L ││🟢 M │                        │
│ ││$50M ││$75M ││$120M││$200M││$85M ││$150M││$100M│                        │
│ ││Tech ││HC   ││Fin  ││Tech ││Ind  ││Tech ││SaaS │                        │
│ ││15d  ││8d   ││22d  ││45d  ││30d  ││10d  ││    │                         │
│ │└─────┘│└─────┘│└─────┘│└─────┘│└─────┘│└─────┘│└─────┘│                 │
│ │┌─────┐│┌─────┐│       │┌─────┐│┌─────┐│       │┌─────┐│                 │
│ ││...  ││...  ││       ││...  ││...  ││       ││...  │                    │
│ │└─────┘│└─────┘│       │└─────┘│└─────┘│       │└─────┘│                 │
│ └───────┴───────┴───────┴───────┴───────┴───────┴───────┘                 │
│                                                                             │
│ ┌─────────────────────────────────────────┐                                │
│ │  AI INSIGHTS PANEL (Collapsible)        │                                │
│ │  • 3 deals stalled >30 days in DD       │                                │
│ │  • 2 deals missing critical docs        │                                │
│ │  • Similar deal closed at 8x EBITDA     │                                │
│ └─────────────────────────────────────────┘                                │
└─────────────────────────────────────────────────────────────────────────────┘

WIDGETS:
- Kanban board (drag-drop enabled)
- Deal cards (status, size, sector, days in stage)
- Filter bar (multi-select)
- AI insights panel

FILTERS: Sector, Geography, Deal Size, Status, Assigned To, Date Range

ACTIONS:
- Drag deal to new stage
- Click card → Deal detail
- + New Deal → Deal creation modal
- Export → Excel/CSV

DRILL-DOWN: Deal card → Deal Overview

PERMISSIONS:
- View: All users (filtered by fund access)
- Edit stage: Associate+
- Create deal: Associate+
```

## Screen 2: Deal Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │  BREADCRUMB: Pipeline > Acme Corp                                       │ │
│ │  ┌────────────────────────────────────────────────────────────────────┐ │ │
│ │  │ DEAL HEADER                                                        │ │ │
│ │  │ Acme Corp                              [🟢 On Track] [Stage: DD ▾] │ │ │
│ │  │ $150M | Technology | US | Confidence: 78%                          │ │ │
│ │  │ Lead: John Smith | Team: JS, AB, CD                                │ │ │
│ │  └────────────────────────────────────────────────────────────────────┘ │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │  TAB BAR: [Overview] [Documents] [DD Q&A] [Analysis] [Risks] [IC]      │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ ┌────────────────────────────┬──────────────────────────────────────────┐  │
│ │  KEY METRICS               │  INVESTMENT THESIS                        │  │
│ │  ┌────────┬────────┐       │  AI-generated thesis summary...           │  │
│ │  │Revenue │ $50M   │       │  Key value drivers:                       │  │
│ │  │Growth  │ 25%    │       │  • Market leadership in segment           │  │
│ │  │EBITDA  │ $12M   │       │  • Strong recurring revenue               │  │
│ │  │Margin  │ 24%    │       │  • Expansion opportunity                  │  │
│ │  └────────┴────────┘       │                                           │  │
│ ├────────────────────────────┼──────────────────────────────────────────┤  │
│ │  TIMELINE                  │  TOP RISKS                                │  │
│ │  ● Sourced: Jan 15        │  🔴 Customer concentration (Top 3 = 60%)  │  │
│ │  ● NDA: Jan 22            │  🟡 Key person dependency                 │  │
│ │  ● DD Start: Feb 1        │  🟡 Technology debt                       │  │
│ │  ○ IC: TBD                │  [View All Risks →]                       │  │
│ │  ○ Close: TBD             │                                           │  │
│ ├────────────────────────────┼──────────────────────────────────────────┤  │
│ │  DD PROGRESS               │  RECENT ACTIVITY                         │  │
│ │  Financial    ████████░░ 80%│  • Q&A: 5 answers received (2h ago)     │  │
│ │  Legal        ██████░░░░ 60%│  • Doc: Financial model v2 uploaded     │  │
│ │  Commercial   ████░░░░░░ 40%│  • Risk: New risk flagged by AI         │  │
│ │  Operational  ██░░░░░░░░ 20%│  [View All →]                           │  │
│ └────────────────────────────┴──────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘

WIDGETS:
- Deal header with status/stage
- Key metrics grid
- Timeline visualization
- DD progress bars
- Top risks summary
- Recent activity feed
- Investment thesis card

FILTERS: None (deal-specific)

ACTIONS:
- Change stage
- Edit deal info
- Add team member
- Navigate to tabs

DRILL-DOWN:
- Metrics → Financial Analysis
- Risks → Risk Register
- DD Progress → DD Q&A

PERMISSIONS:
- View: Team members, Fund users
- Edit: Deal team, VP+
```

## Screen 3: Document Intelligence View

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ ┌───────────────────────────────────────────────────────────────────────┐   │
│ │  [🔍 Search documents...]                    [Upload ▾] [Download All] │   │
│ └───────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│ ┌──────────────────┬────────────────────────────────────────────────────┐  │
│ │  FOLDER TREE     │  DOCUMENT LIST                                      │  │
│ │                  │                                                      │  │
│ │  📁 All Docs (47)│  ┌────────────────────────────────────────────────┐ │  │
│ │  ├📁 Financial   │  │ Name          │ Type │ Status  │ Date    │ Size│ │  │
│ │  │ ├📄 P&L      │  ├────────────────────────────────────────────────┤ │  │
│ │  │ ├📄 BS       │  │ 📄 CIM.pdf     │ CIM  │ ✅ Done │ Jan 15  │ 5MB│ │  │
│ │  │ └📄 CF       │  │ 📄 P&L_2023... │ Fin  │ ⏳ Proc │ Jan 20  │ 2MB│ │  │
│ │  ├📁 Legal      │  │ 📄 Customer... │ Comm │ ✅ Done │ Jan 22  │ 1MB│ │  │
│ │  │ ├📄 Contracts│  │ 📄 SPA_Draft.. │ Legal│ 🔍 Rev  │ Feb 1   │ 3MB│ │  │
│ │  │ └📄 IP       │  │ ...                                              │ │  │
│ │  ├📁 Commercial │  └────────────────────────────────────────────────┘ │  │
│ │  └📁 Operational│                                                      │  │
│ │                  │  ┌────────────────────────────────────────────────┐ │  │
│ │  ⚠️ MISSING DOCS │  │  DOCUMENT PREVIEW                              │ │  │
│ │  • QoE Report   │  │  [Selected document rendered here]              │ │  │
│ │  • Cap Table    │  │                                                  │ │  │
│ │  • Org Chart    │  │  ┌─────────────────────────────────────────┐    │ │  │
│ │                  │  │  │  AI ANALYSIS                            │    │ │  │
│ │                  │  │  │  📊 Key Metrics Extracted:              │    │ │  │
│ │                  │  │  │  • Revenue: $50M                        │    │ │  │
│ │                  │  │  │  • EBITDA: $12M                         │    │ │  │
│ │                  │  │  │  ⚠️ Flags: Revenue recognition change   │    │ │  │
│ │                  │  │  └─────────────────────────────────────────┘    │ │  │
│ │                  │  └────────────────────────────────────────────────┘ │  │
│ └──────────────────┴────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘

WIDGETS:
- Folder tree (collapsible)
- Document list (sortable, filterable)
- Document preview pane
- AI analysis panel
- Missing docs alert
- Upload zone (drag-drop)

FILTERS: Category, Status, Date, Uploader

ACTIONS:
- Upload documents
- Download (single/bulk)
- Preview document
- Run AI analysis
- Compare versions
- Link to Q&A

DRILL-DOWN:
- Document → Full preview modal
- AI Analysis → Insight detail

PERMISSIONS:
- View: Team members
- Upload: Associate+
- Delete: VP+
```

## Screen 4: Risk Heat Map & Register

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ ┌───────────────────────────────────────────────────────────────────────┐   │
│ │  RISK OVERVIEW        Total: 24 | Critical: 3 | High: 7 | Open: 18   │   │
│ │                       [+ Add Risk] [Export] [AI Scan]                 │   │
│ └───────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│ ┌────────────────────────────────┬──────────────────────────────────────┐  │
│ │  RISK HEAT MAP                 │  RISK BY CATEGORY                    │  │
│ │                                │                                       │  │
│ │        LIKELIHOOD              │  Financial    ████████ 8             │  │
│ │        High  Med  Low          │  Legal        ██████░░ 6             │  │
│ │       ┌────┬────┬────┐         │  Commercial   ████░░░░ 4             │  │
│ │  High │ 2  │ 3  │ 1  │         │  Operational  ████░░░░ 4             │  │
│ │ I     ├────┼────┼────┤         │  Technology   ██░░░░░░ 2             │  │
│ │ M Med │ 4  │ 5  │ 2  │         │                                       │  │
│ │ P     ├────┼────┼────┤         │  DEAL BREAKERS                       │  │
│ │ A Low │ 2  │ 3  │ 2  │         │  🔴 Customer concentration risk      │  │
│ │ C     └────┴────┴────┘         │  🔴 Pending litigation               │  │
│ │ T                              │  🔴 Key person no non-compete        │  │
│ └────────────────────────────────┴──────────────────────────────────────┘  │
│                                                                             │
│ ┌───────────────────────────────────────────────────────────────────────┐  │
│ │  RISK REGISTER                                                         │  │
│ │  [All ▾] [Category ▾] [Severity ▾] [Status ▾] [🔍 Search]             │  │
│ │  ┌─────────────────────────────────────────────────────────────────┐  │  │
│ │  │ Severity │ Risk Title        │ Category  │ Status   │ Owner    │  │  │
│ │  ├─────────────────────────────────────────────────────────────────┤  │  │
│ │  │ 🔴 Crit  │ Customer conc.    │ Commercial│ Open     │ J.Smith  │  │  │
│ │  │ 🔴 Crit  │ Pending lit.      │ Legal     │ Mitigated│ A.Brown  │  │  │
│ │  │ 🟠 High  │ Tech debt         │ Technology│ Open     │ C.Davis  │  │  │
│ │  │ 🟠 High  │ Key person        │ HR        │ Open     │ J.Smith  │  │  │
│ │  │ 🟡 Med   │ Lease expiry      │ Operational│ Accepted│ D.Wilson │  │  │
│ │  │ ...                                                              │  │  │
│ │  └─────────────────────────────────────────────────────────────────┘  │  │
│ └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘

WIDGETS:
- Risk summary stats
- Heat map (interactive)
- Category breakdown chart
- Deal breakers list
- Risk register table

FILTERS: Category, Severity, Status, Owner

ACTIONS:
- Add risk manually
- Run AI scan
- Edit risk
- Update status
- Assign owner
- Add mitigation plan
- Export

DRILL-DOWN:
- Heat map cell → Filtered register
- Risk row → Risk detail modal

PERMISSIONS:
- View: Team members
- Add/Edit: Associate+
- Close risk: VP+
```

## Screen 5: DD Tracker

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ ┌───────────────────────────────────────────────────────────────────────┐   │
│ │  DD PROGRESS    Overall: 58%    Questions: 87/150    Days in DD: 32   │   │
│ │                 [Generate Questions] [Send Reminders] [Export]         │   │
│ └───────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│ ┌───────────────────────────────────────────────────────────────────────┐  │
│ │  WORKSTREAM TABS                                                       │  │
│ │  [Financial 80%] [Legal 60%] [Commercial 45%] [Ops 30%] [Tech 40%]   │  │
│ └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│ ┌──────────────────┬────────────────────────────────────────────────────┐  │
│ │  CATEGORIES      │  QUESTIONS                                          │  │
│ │                  │  [All ▾] [Priority ▾] [Status ▾] [+ Add Question]  │  │
│ │  📁 Revenue (8)  │                                                      │  │
│ │  📁 Margins (6)  │  ┌──────────────────────────────────────────────┐   │  │
│ │  📁 WC (4)       │  │ #  │ Question              │ Pri │ Status │ Due│   │  │
│ │  📁 Customers(5) │  ├──────────────────────────────────────────────┤   │  │
│ │  📁 Contracts(3) │  │ 1  │ Revenue by customer... │ 🔴  │ ✅ Done│ -  │   │  │
│ │  ⚠️ Overdue (3) │  │ 2  │ EBITDA adjustments...  │ 🔴  │ ⏳ Part│ 2d │   │  │
│ │                  │  │ 3  │ Working capital...     │ 🟡  │ 📤 Sent│ 5d │   │  │
│ │                  │  │ 4  │ Customer churn...      │ 🟡  │ ❌ Open│ 7d │   │  │
│ │                  │  │ ...                                              │   │  │
│ │                  │  └──────────────────────────────────────────────┘   │  │
│ │                  │                                                      │  │
│ │                  │  ┌──────────────────────────────────────────────┐   │  │
│ │                  │  │  QUESTION DETAIL (Expanded)                   │   │  │
│ │                  │  │  Q: Provide EBITDA adjustments with support   │   │  │
│ │                  │  │  Assigned: Seller | Due: Feb 15 | Pri: High   │   │  │
│ │                  │  │                                                │   │  │
│ │                  │  │  ANSWER:                                       │   │  │
│ │                  │  │  "See attached schedule showing $2.1M..."      │   │  │
│ │                  │  │  📎 EBITDA_Adjustments.xlsx                   │   │  │
│ │                  │  │                                                │   │  │
│ │                  │  │  ⚠️ AI: Answer incomplete - missing support   │   │  │
│ │                  │  │  for $500K legal adjustment                   │   │  │
│ │                  │  │                                                │   │  │
│ │                  │  │  [Generate Follow-up] [Mark Complete] [Link]  │   │  │
│ │                  │  └──────────────────────────────────────────────┘   │  │
│ └──────────────────┴────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘

WIDGETS:
- Progress summary
- Workstream tabs
- Category tree
- Question list
- Question detail panel
- Answer validation

FILTERS: Workstream, Category, Priority, Status, Assigned

ACTIONS:
- Add question
- Generate AI questions
- Send reminder
- Mark complete
- Link to document
- Generate follow-up

DRILL-DOWN:
- Question → Detail panel
- Document link → Document viewer

PERMISSIONS:
- View: Team members
- Add/Edit: Associate+
- Close: Owner
```

## Screen 6: Financial Analysis

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ ┌───────────────────────────────────────────────────────────────────────┐   │
│ │  FINANCIAL ANALYSIS    Data through: Q4 2023    [Refresh] [Export]    │   │
│ └───────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│ ┌────────┬────────┬────────┬────────┬────────┬────────┐                    │
│ │ Revenue│ EBITDA │ Margin │ Growth │ FCF    │ WC Days│  ← KPI Cards      │
│ │ $50M   │ $12M   │ 24%    │ 25%    │ $8M    │ 45     │                    │
│ │ ▲ 25%  │ ▲ 30%  │ ▲ 2pp  │ ▼ 5pp  │ ▲ 15%  │ ▼ 5d   │                    │
│ └────────┴────────┴────────┴────────┴────────┴────────┘                    │
│                                                                             │
│ ┌────────────────────────────────────┬──────────────────────────────────┐  │
│ │  REVENUE ANALYSIS                  │  MARGIN ANALYSIS                 │  │
│ │  ┌────────────────────────────┐    │  ┌────────────────────────────┐  │  │
│ │  │     [Revenue Chart]        │    │  │     [Margin Chart]         │  │  │
│ │  │     📈 Line + Bar          │    │  │     📈 Waterfall           │  │  │
│ │  │     2021  2022  2023       │    │  │     Gross → EBITDA         │  │  │
│ │  └────────────────────────────┘    │  └────────────────────────────┘  │  │
│ │  By Segment: | By Customer: | YoY  │  Gross: 65% | Op: 28% | EBITDA: 24%│
│ ├────────────────────────────────────┼──────────────────────────────────┤  │
│ │  QoE BRIDGE                        │  AI INSIGHTS                     │  │
│ │  ┌────────────────────────────┐    │  📊 Revenue quality: Strong      │  │
│ │  │  Reported EBITDA    $14M   │    │  - 85% recurring                 │  │
│ │  │  - One-time costs   ($1M)  │    │  - Low customer concentration   │  │
│ │  │  - Owner comp adj   ($0.5M)│    │                                  │  │
│ │  │  - Other adj        ($0.5M)│    │  ⚠️ Margin compression risk     │  │
│ │  │  ────────────────────────  │    │  - Wage inflation pressure       │  │
│ │  │  Adjusted EBITDA    $12M   │    │  - Input cost increases          │  │
│ │  └────────────────────────────┘    │                                  │  │
│ │                                    │  🔴 FLAG: Revenue recognition    │  │
│ │  [View Details] [Export Model]     │  change in Q3 2023               │  │
│ └────────────────────────────────────┴──────────────────────────────────┘  │
│                                                                             │
│ ┌───────────────────────────────────────────────────────────────────────┐  │
│ │  DATA TABLE: P&L Summary                                               │  │
│ │  ┌───────────────────────────────────────────────────────────────────┐│  │
│ │  │ Metric        │ 2021    │ 2022    │ 2023    │ LTM     │ Budget  ││  │
│ │  ├───────────────────────────────────────────────────────────────────┤│  │
│ │  │ Revenue       │ $32M    │ $40M    │ $50M    │ $52M    │ $55M    ││  │
│ │  │ Gross Profit  │ $20M    │ $26M    │ $32.5M  │ $34M    │ $36M    ││  │
│ │  │ EBITDA        │ $7M     │ $9M     │ $12M    │ $12.5M  │ $14M    ││  │
│ │  │ ...                                                              ││  │
│ │  └───────────────────────────────────────────────────────────────────┘│  │
│ └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘

WIDGETS:
- KPI cards with trends
- Revenue chart (by segment, customer, period)
- Margin waterfall
- QoE bridge
- AI insights panel
- Data table (exportable)

FILTERS: Period, View (Annual/Quarterly), Segment

ACTIONS:
- Export to Excel
- Drill into metrics
- Re-run analysis
- Add manual adjustment

DRILL-DOWN:
- Metric → Detailed breakdown
- AI flag → Source document

PERMISSIONS:
- View: Team members
- Edit adjustments: Associate+
```

## Screen 7: IC Memo View

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ ┌───────────────────────────────────────────────────────────────────────┐   │
│ │  IC MEMO: Acme Corp    Version: 2.1    Status: Under Review           │   │
│ │  [Edit] [Compare Versions] [Export PDF] [Export PPT] [Submit for IC]  │   │
│ └───────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│ ┌──────────────────┬────────────────────────────────────────────────────┐  │
│ │  SECTIONS        │  MEMO CONTENT                                       │  │
│ │                  │                                                      │  │
│ │  ✅ Executive    │  ┌──────────────────────────────────────────────┐   │  │
│ │     Summary      │  │  EXECUTIVE SUMMARY                            │   │  │
│ │  ✅ Investment   │  │                                                │   │  │
│ │     Thesis       │  │  Acme Corp is a leading provider of...        │   │  │
│ │  ✅ Company      │  │                                                │   │  │
│ │     Overview     │  │  RECOMMENDATION: PROCEED                       │   │  │
│ │  ✅ Market       │  │  • Entry multiple: 8.5x EBITDA                │   │  │
│ │     Analysis     │  │  • Expected return: 2.5x / 25% IRR            │   │  │
│ │  ✅ Financial    │  │  • Key drivers: Market growth, margin         │   │  │
│ │     Summary      │  │    expansion, add-on acquisitions             │   │  │
│ │  ⏳ Risk         │  │                                                │   │  │
│ │     Assessment   │  │  [AI-generated] [Edit Section]                │   │  │
│ │  ⏳ Valuation    │  └──────────────────────────────────────────────┘   │  │
│ │  ❌ Appendix     │                                                      │  │
│ │                  │  ┌──────────────────────────────────────────────┐   │  │
│ │  ──────────────  │  │  VALUATION SCENARIOS                          │   │  │
│ │                  │  │                                                │   │  │
│ │  IC SCHEDULE     │  │  ┌──────────┬──────────┬──────────┐          │   │  │
│ │  Date: Feb 20    │  │  │   Bear   │   Base   │   Bull   │          │   │  │
│ │  Time: 2:00 PM   │  │  ├──────────┼──────────┼──────────┤          │   │  │
│ │                  │  │  │ Entry: 8x│ Entry: 8.5x│ Entry: 9x│         │   │  │
│ │  VOTING STATUS   │  │  │ Exit: 9x │ Exit: 10x │ Exit: 11x│         │   │  │
│ │  Required: 4     │  │  │ Return:  │ Return:   │ Return:  │         │   │  │
│ │  Voted: 2        │  │  │ 1.8x/18% │ 2.5x/25%  │ 3.2x/32% │         │   │  │
│ │  ✅ Partner A    │  │  └──────────┴──────────┴──────────┘          │   │  │
│ │  ✅ Partner B    │  │                                                │   │  │
│ │  ⏳ Partner C    │  │  [Sensitivity Analysis] [Model Download]      │   │  │
│ │  ⏳ Partner D    │  └──────────────────────────────────────────────┘   │  │
│ └──────────────────┴────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘

WIDGETS:
- Section navigation
- Memo content editor
- Version indicator
- Valuation scenarios
- IC schedule
- Voting tracker

FILTERS: None

ACTIONS:
- Edit sections
- Regenerate AI content
- Compare versions
- Export (PDF/PPT)
- Submit for IC
- Cast vote (Partners)

DRILL-DOWN:
- Section → Full edit
- Data → Source analysis

PERMISSIONS:
- View: IC members, Deal team
- Edit: Deal lead, VP
- Vote: IC members only
```

## Screen 8: Closing Checklist

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ ┌───────────────────────────────────────────────────────────────────────┐   │
│ │  CLOSING TRACKER    Target: Mar 15    Progress: 65%    At Risk: 3     │   │
│ │                     [+ Add CP] [Send Reminders] [Export]               │   │
│ └───────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│ ┌───────────────────────────────────────────────────────────────────────┐  │
│ │  TIMELINE VIEW                                                         │  │
│ │  ┌─────────────────────────────────────────────────────────────────┐  │  │
│ │  │  Feb 15        Feb 28        Mar 7         Mar 15               │  │  │
│ │  │    │             │             │             │                  │  │  │
│ │  │  ──●─────────────●─────────────●─────────────●──                │  │  │
│ │  │    ↑             ↑             ↑             ↑                  │  │  │
│ │  │  Signing     Financing      Final DD      Closing               │  │  │
│ │  │  ✅ Done     ⏳ In Prog    ❌ Not Start  ❌ Not Start           │  │  │
│ │  └─────────────────────────────────────────────────────────────────┘  │  │
│ └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
│ ┌───────────────────────────────────────────────────────────────────────┐  │
│ │  CONDITIONS PRECEDENT                                                  │  │
│ │  [All ▾] [Category ▾] [Owner ▾] [Status ▾]                            │  │
│ │                                                                        │  │
│ │  ┌─────────────────────────────────────────────────────────────────┐  │  │
│ │  │ CP Description          │ Category │ Owner   │ Due    │ Status │  │  │
│ │  ├─────────────────────────────────────────────────────────────────┤  │  │
│ │  │ ✅ Executed SPA         │ Legal    │ Buyer   │ Feb 15 │ Done   │  │  │
│ │  │ ✅ Board approval       │ Corp     │ Seller  │ Feb 15 │ Done   │  │  │
│ │  │ ⏳ Financing commitment │ Finance  │ Buyer   │ Feb 28 │ In Prog│  │  │
│ │  │ ⚠️ HSR clearance       │ Reg      │ Both    │ Mar 1  │ At Risk│  │  │
│ │  │ ❌ Third party consents │ Legal    │ Seller  │ Mar 7  │ Not St │  │  │
│ │  │ ❌ Escrow funding       │ Finance  │ Buyer   │ Mar 14 │ Not St │  │  │
│ │  │ ...                                                              │  │  │
│ │  └─────────────────────────────────────────────────────────────────┘  │  │
│ │                                                                        │  │
│ │  ┌─────────────────────────────────────────────────────────────────┐  │  │
│ │  │  CP DETAIL: HSR Clearance                         [At Risk ⚠️] │  │  │
│ │  │                                                                  │  │  │
│ │  │  Description: Obtain HSR clearance from DOJ/FTC                 │  │  │
│ │  │  Owner: Both parties  |  Due: Mar 1  |  Category: Regulatory   │  │  │
│ │  │                                                                  │  │  │
│ │  │  Status Notes:                                                  │  │  │
│ │  │  - Feb 10: Filing submitted                                     │  │  │
│ │  │  - Feb 18: Second request received (unusual)                    │  │  │
│ │  │  - Risk: May delay closing by 2-3 weeks                        │  │  │
│ │  │                                                                  │  │  │
│ │  │  Evidence: 📎 HSR_Filing.pdf  📎 Second_Request.pdf            │  │  │
│ │  │                                                                  │  │  │
│ │  │  [Update Status] [Add Note] [Upload Evidence] [Escalate]       │  │  │
│ │  └─────────────────────────────────────────────────────────────────┘  │  │
│ └───────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘

WIDGETS:
- Progress bar
- Timeline Gantt
- CP list table
- CP detail panel
- Evidence attachments
- Status notes

FILTERS: Category, Owner, Status, Due Date

ACTIONS:
- Add CP
- Update status
- Upload evidence
- Add notes
- Send reminder
- Escalate

DRILL-DOWN:
- CP → Detail panel
- Evidence → Document viewer

PERMISSIONS:
- View: Deal team
- Update: CP owner
- Add/Delete: VP+
```

---

# 7️⃣ PRE-GENERATED ANALYSES & REPORTS

## Report 1: Screening Memo

| Attribute | Specification |
|-----------|---------------|
| **Purpose** | Quick assessment for initial deal screening |
| **Sections** | 1. Deal Overview (1 page)<br>2. Investment Highlights (3-5 bullets)<br>3. Key Metrics Summary (table)<br>4. Initial Risk Assessment (3-5 items)<br>5. Thesis Alignment (score + rationale)<br>6. Recommendation (Proceed/Pass/Hold) |
| **Data Sources** | CIM extraction, Auto-enrichment, Fund thesis |
| **Update Logic** | Generated on CIM upload, regenerated on new docs |
| **Export Formats** | PDF, Word, PowerPoint |
| **AI Involvement** | Full generation with human review |

## Report 2: IC Memo

| Attribute | Specification |
|-----------|---------------|
| **Purpose** | Comprehensive investment recommendation |
| **Sections** | 1. Executive Summary (2 pages)<br>2. Investment Thesis & Value Creation<br>3. Company & Market Overview<br>4. Financial Analysis & Projections<br>5. Commercial Assessment<br>6. Key Risks & Mitigations<br>7. Valuation & Returns Analysis<br>8. Terms & Structure<br>9. Recommendation<br>10. Appendices |
| **Data Sources** | All agent analyses, DD findings, Valuation model |
| **Update Logic** | Initial generation, updated on major findings |
| **Export Formats** | PDF, Word, PowerPoint |
| **AI Involvement** | Section drafting with extensive human editing |

## Report 3: Risk Register

| Attribute | Specification |
|-----------|---------------|
| **Purpose** | Comprehensive risk inventory with mitigations |
| **Sections** | 1. Risk Summary Dashboard<br>2. Critical/Deal-Breaker Risks<br>3. Risk by Category<br>4. Heat Map Visualization<br>5. Mitigation Plans<br>6. Monitoring Recommendations |
| **Data Sources** | Risk Agent outputs, DD findings, Document flags |
| **Update Logic** | Real-time updates as risks identified/updated |
| **Export Formats** | PDF, Excel |
| **AI Involvement** | Risk detection, scoring, mitigation suggestions |

## Report 4: Red Flag Summary

| Attribute | Specification |
|-----------|---------------|
| **Purpose** | Highlight critical issues requiring attention |
| **Sections** | 1. Red Flags by Severity<br>2. Evidence/Source Links<br>3. Recommended Actions<br>4. Impact Assessment |
| **Data Sources** | All agent outputs, Document analysis |
| **Update Logic** | Generated daily or on-demand |
| **Export Formats** | PDF, Email digest |
| **AI Involvement** | Flag detection, prioritization |

## Report 5: Financial Model Output

| Attribute | Specification |
|-----------|---------------|
| **Purpose** | Excel-ready financial model with scenarios |
| **Sections** | 1. Summary Tab<br>2. Historical Financials<br>3. Projections (3 scenarios)<br>4. Valuation (DCF + Comps)<br>5. Returns Analysis<br>6. Sensitivity Tables<br>7. Sources & Notes |
| **Data Sources** | Financial Agent extraction, Manual inputs |
| **Update Logic** | Updated on new financial data |
| **Export Formats** | Excel (.xlsx) |
| **AI Involvement** | Data extraction, formula generation |

## Report 6: Board Deck

| Attribute | Specification |
|-----------|---------------|
| **Purpose** | Portfolio company board presentation |
| **Sections** | 1. Agenda<br>2. Executive Summary<br>3. Financial Performance<br>4. KPI Dashboard<br>5. Strategic Initiatives<br>6. Key Risks & Issues<br>7. Outlook & Priorities |
| **Data Sources** | Portfolio KPIs, Financial data, Management inputs |
| **Update Logic** | Generated quarterly or on-demand |
| **Export Formats** | PowerPoint, PDF |
| **AI Involvement** | Slide generation, narrative drafting |

## Report 7: Weekly Deal Update

| Attribute | Specification |
|-----------|---------------|
| **Purpose** | Internal team update on deal progress |
| **Sections** | 1. Key Developments<br>2. DD Progress<br>3. Open Items<br>4. Next Week Priorities<br>5. Risk Updates |
| **Data Sources** | Activity logs, DD tracker, Calendar |
| **Update Logic** | Auto-generated weekly |
| **Export Formats** | Email, PDF |
| **AI Involvement** | Summary generation |

---

# 8️⃣ RISK & SCORING ENGINE

## Risk Taxonomy

```
RISK CATEGORIES
├── Financial
│   ├── Revenue Quality
│   ├── Earnings Sustainability
│   ├── Working Capital
│   ├── Debt/Leverage
│   ├── Cash Flow
│   └── Accounting/Reporting
│
├── Commercial
│   ├── Customer Concentration
│   ├── Customer Churn
│   ├── Market Position
│   ├── Competitive Threats
│   ├── Pricing Power
│   └── Channel Risk
│
├── Legal
│   ├── Litigation
│   ├── Contract Risk
│   ├── IP Issues
│   ├── Regulatory Compliance
│   ├── Employment
│   └── Environmental
│
├── Operational
│   ├── Key Person
│   ├── Technology/Systems
│   ├── Supply Chain
│   ├── Capacity/Facilities
│   ├── Process/Quality
│   └── Integration
│
├── Market
│   ├── Industry Decline
│   ├── Disruption Risk
│   ├── Cyclicality
│   ├── Geographic Risk
│   └── Regulatory Change
│
└── Transaction
    ├── Valuation
    ├── Financing
    ├── Timing
    ├── Seller Issues
    └── Closing Conditions
```

## Scoring Logic

### Severity Score (1-10)

```
SEVERITY = f(Impact, Likelihood, Recoverability)

Impact Score (1-10):
- Financial impact as % of deal value
  - >20% = 10
  - 10-20% = 8
  - 5-10% = 6
  - 2-5% = 4
  - <2% = 2

Likelihood Score (1-10):
- Based on evidence strength
  - Confirmed/imminent = 10
  - Highly likely = 8
  - Probable = 6
  - Possible = 4
  - Unlikely = 2

Recoverability Score (1-10):
- Ability to mitigate
  - Unrecoverable = 10
  - Very difficult = 8
  - Difficult = 6
  - Moderate = 4
  - Easy = 2

SEVERITY = (Impact × 0.4) + (Likelihood × 0.35) + (Recoverability × 0.25)

Mapping:
- 8-10: Critical (🔴)
- 6-8: High (🟠)
- 4-6: Medium (🟡)
- 1-4: Low (🟢)
```

### Thesis Alignment Weighting

```
Each fund defines thesis weights:

Example Growth Equity Fund:
- Revenue growth: 25%
- Market size: 20%
- Recurring revenue: 20%
- Management team: 15%
- Competitive position: 10%
- Technology: 10%

Risk Impact on Thesis = Σ(Risk.Impact × Category.Weight)

Flags:
- Total impact >50% = Major thesis concern
- Single risk >30% = Thesis-critical
```

### Deal Score Calculation

```
DEAL_SCORE = 100 - Risk_Penalty + Opportunity_Bonus

Risk_Penalty = Σ(Risk.Severity × Risk.Weight)
Opportunity_Bonus = Σ(Opportunity.Impact × Opportunity.Probability)

Thresholds:
- Score >75: Strong candidate
- Score 50-75: Proceed with caution
- Score <50: Significant concerns
```

## Explainability Layer

Each risk score includes:

```json
{
  "risk_id": "uuid",
  "title": "Customer concentration risk",
  "severity_score": 8.2,
  "severity_label": "Critical",
  "explanation": {
    "summary": "Top 3 customers represent 65% of revenue, creating significant revenue dependency.",
    "impact_rationale": "Loss of largest customer would reduce EBITDA by $3.2M (27%)",
    "likelihood_rationale": "No contractual protections, largest customer contract expires in 18 months",
    "evidence": [
      {
        "source": "Customer Revenue Schedule",
        "document_id": "doc_123",
        "excerpt": "Customer A: $15M (40%), Customer B: $5M (13%), Customer C: $4.5M (12%)"
      }
    ],
    "comparable_deals": [
      {
        "deal": "Similar Deal X",
        "outcome": "Customer A churned post-close, 40% EBITDA decline"
      }
    ],
    "mitigation_options": [
      "Negotiate long-term contract extensions pre-close",
      "Structure earnout tied to customer retention",
      "Obtain R&W insurance for customer loss"
    ]
  }
}
```

---

# 9️⃣ SECURITY, COMPLIANCE & ENTERPRISE READINESS

## Data Isolation Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                     MULTI-TENANT ARCHITECTURE                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                    APPLICATION LAYER                      │   │
│  │  ┌──────────────────────────────────────────────────┐    │   │
│  │  │  Tenant Context (firm_id) injected at auth       │    │   │
│  │  │  All queries filtered by tenant                  │    │   │
│  │  └──────────────────────────────────────────────────┘    │   │
│  └──────────────────────────────────────────────────────────┘   │
│                              │                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                    DATABASE LAYER                         │   │
│  │  ┌─────────────────────────────────────────────────────┐ │   │
│  │  │  Row-Level Security (RLS) on all tables             │ │   │
│  │  │                                                      │ │   │
│  │  │  Policy: user.firm_id = row.firm_id                 │ │   │
│  │  │  Policy: user.fund_access ∩ row.fund_id ≠ ∅        │ │   │
│  │  └─────────────────────────────────────────────────────┘ │   │
│  └──────────────────────────────────────────────────────────┘   │
│                              │                                   │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                    STORAGE LAYER                          │   │
│  │  ┌─────────────────────────────────────────────────────┐ │   │
│  │  │  Files stored with firm/deal prefix                  │ │   │
│  │  │  Signed URLs with tenant validation                  │ │   │
│  │  └─────────────────────────────────────────────────────┘ │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Role-Based Access Control (RBAC)

```
ROLES & PERMISSIONS MATRIX

                    │ Admin │Partner│  VP  │Assoc │Analyst│Viewer│
────────────────────┼───────┼───────┼──────┼──────┼───────┼──────│
Firm Settings       │  RW   │   R   │  -   │  -   │   -   │  -   │
User Management     │  RW   │   R   │  -   │  -   │   -   │  -   │
Fund Management     │  RW   │  RW   │  R   │  -   │   -   │  -   │
────────────────────┼───────┼───────┼──────┼──────┼───────┼──────│
Deal Create         │  RW   │  RW   │  RW  │  RW  │   -   │  -   │
Deal Edit           │  RW   │  RW   │  RW  │  RW* │   -   │  -   │
Deal Delete         │  RW   │  RW   │  -   │  -   │   -   │  -   │
Deal View           │  RW   │  RW   │  RW  │  RW  │   R   │  R   │
────────────────────┼───────┼───────┼──────┼──────┼───────┼──────│
Document Upload     │  RW   │  RW   │  RW  │  RW  │   -   │  -   │
Document Delete     │  RW   │  RW   │  RW  │  -   │   -   │  -   │
Document View       │  RW   │  RW   │  RW  │  RW  │   R   │  R   │
────────────────────┼───────┼───────┼──────┼──────┼───────┼──────│
IC Memo Edit        │  RW   │  RW   │  RW  │  -   │   -   │  -   │
IC Vote             │   -   │  RW   │  -   │  -   │   -   │  -   │
────────────────────┼───────┼───────┼──────┼──────┼───────┼──────│
Risk Approve        │  RW   │  RW   │  RW  │  -   │   -   │  -   │
────────────────────┼───────┼───────┼──────┼──────┼───────┼──────│
Audit Logs          │   R   │  -   │  -   │  -   │   -   │  -   │
────────────────────┴───────┴───────┴──────┴──────┴───────┴──────│

* Assoc: Edit only assigned deals
RW = Read/Write, R = Read, - = No Access
```

## Audit Logging

```sql
-- All significant actions logged
INSERT INTO audit_logs (
    user_id,
    action,           -- 'create', 'update', 'delete', 'view', 'export'
    entity_type,      -- 'deal', 'document', 'risk', etc.
    entity_id,
    firm_id,
    deal_id,
    old_values,       -- JSONB of previous state
    new_values,       -- JSONB of new state
    ip_address,
    user_agent,
    created_at
);

-- Retention: 7 years (regulatory requirement)
-- Immutable: No UPDATE or DELETE allowed
```

## AI Model Governance

```
AI GOVERNANCE FRAMEWORK

1. MODEL INVENTORY
   - All AI models registered with version
   - Input/output specifications documented
   - Performance benchmarks recorded

2. CONFIDENCE THRESHOLDS
   - High confidence (>0.85): Auto-apply with logging
   - Medium confidence (0.6-0.85): Apply with human review flag
   - Low confidence (<0.6): Require human verification

3. HUMAN-IN-THE-LOOP
   - Critical decisions always require human approval
   - AI outputs clearly marked as "AI-generated"
   - Edit history tracks human modifications

4. EXPLAINABILITY
   - All AI outputs include source citations
   - Reasoning chain exposed where possible
   - Confidence factors broken down

5. BIAS MONITORING
   - Regular audits of AI recommendations
   - Outcome tracking vs predictions
   - Demographic analysis of decisions
```

## SOC2-Ready Architecture

```
CONTROL FRAMEWORK

1. ACCESS CONTROLS
   ✓ MFA required for all users
   ✓ SSO integration (SAML 2.0, OIDC)
   ✓ Session timeout (30 min idle)
   ✓ IP allowlisting (optional)
   ✓ Password policy enforcement

2. DATA PROTECTION
   ✓ Encryption at rest (AES-256)
   ✓ Encryption in transit (TLS 1.3)
   ✓ Field-level encryption for PII
   ✓ Data masking in non-prod

3. AVAILABILITY
   ✓ 99.9% uptime SLA
   ✓ Multi-region deployment
   ✓ Automated failover
   ✓ Point-in-time recovery (30 days)

4. MONITORING
   ✓ Real-time intrusion detection
   ✓ Anomaly detection on access patterns
   ✓ Automated alerting
   ✓ 24/7 incident response

5. CHANGE MANAGEMENT
   ✓ All changes logged
   ✓ Approval workflow for production
   ✓ Rollback capability
   ✓ Testing requirements

6. VENDOR MANAGEMENT
   ✓ SOC2 required for critical vendors
   ✓ Annual vendor reviews
   ✓ Data processing agreements
```

---

# 🔟 MVP vs V1 vs V2 ROADMAP

## MVP (Must Sell) - 12 Weeks

**Goal**: Demonstrate core value proposition to close first customers

| Feature | Priority | Estimate |
|---------|----------|----------|
| **Deal Pipeline** | P0 | 2 weeks |
| - Basic Kanban with stages | | |
| - Deal creation/editing | | |
| - Basic filtering | | |
| **Document Management** | P0 | 3 weeks |
| - Upload/download | | |
| - Folder structure | | |
| - Basic preview | | |
| - Text extraction | | |
| **AI Document Analysis** | P0 | 3 weeks |
| - CIM summarization | | |
| - Financial extraction | | |
| - Key term extraction | | |
| **DD Q&A Tracker** | P0 | 2 weeks |
| - Workstream setup | | |
| - Question CRUD | | |
| - Status tracking | | |
| **Basic Reporting** | P1 | 2 weeks |
| - Screening memo generation | | |
| - Deal summary export | | |

**Not in MVP**:
- Multi-agent analysis
- IC memo generation
- Closing tracker
- Portfolio module
- Communication automation
- Advanced RBAC

---

## V1 (Must Retain) - 16 Weeks

**Goal**: Feature-complete for mid-market PE workflows

| Feature | Priority | Estimate |
|---------|----------|----------|
| **Multi-Agent Analysis** | P0 | 4 weeks |
| - Financial Agent (full) | | |
| - Legal Agent (basic) | | |
| - Risk Agent (full) | | |
| - Commercial Agent (basic) | | |
| **IC Preparation** | P0 | 3 weeks |
| - IC memo generation | | |
| - Scenario modeling | | |
| - Voting workflow | | |
| **Risk Register** | P0 | 2 weeks |
| - Full risk taxonomy | | |
| - Heat map visualization | | |
| - Mitigation tracking | | |
| **Enhanced DD** | P1 | 2 weeks |
| - AI question generation | | |
| - Answer validation | | |
| - Follow-up automation | | |
| **Closing Tracker** | P1 | 2 weeks |
| - CP checklist | | |
| - Timeline view | | |
| - Evidence upload | | |
| **Advanced RBAC** | P1 | 2 weeks |
| - Role definitions | | |
| - Fund-level permissions | | |
| - Audit logging | | |
| **Integrations** | P2 | 1 week |
| - Email (basic) | | |
| - Calendar (basic) | | |

**Not in V1**:
- Full portfolio module
- Advanced communication automation
- VDR sync
- Slack integration

---

## V2 (Must Dominate) - 20 Weeks

**Goal**: Enterprise-ready with institutional features

| Feature | Priority | Estimate |
|---------|----------|----------|
| **Portfolio Intelligence** | P0 | 4 weeks |
| - Company dashboards | | |
| - KPI tracking | | |
| - Board pack generation | | |
| - Value creation tracking | | |
| **Full Agent Suite** | P0 | 4 weeks |
| - Valuation Agent | | |
| - Operational Agent | | |
| - Synthesis Agent | | |
| - Communication Agent | | |
| **Advanced Automation** | P1 | 3 weeks |
| - Email drafting/scheduling | | |
| - Automated reminders | | |
| - Slack integration | | |
| **VDR Integration** | P1 | 2 weeks |
| - Datasite connector | | |
| - Intralinks connector | | |
| - Auto-sync | | |
| **Enterprise Security** | P0 | 3 weeks |
| - SSO (SAML/OIDC) | | |
| - SOC2 compliance | | |
| - Advanced audit | | |
| **Analytics & ML** | P2 | 2 weeks |
| - Deal outcome prediction | | |
| - Benchmark comparisons | | |
| - Historical pattern matching | | |
| **API & Extensibility** | P2 | 2 weeks |
| - Public API | | |
| - Webhook support | | |
| - Custom workflows | | |

---

## Build Order & Dependencies

```
PHASE 1: FOUNDATION (Weeks 1-6)
├── Database schema & migrations
├── Authentication & basic RBAC
├── Core UI components
└── File storage infrastructure

PHASE 2: DEAL CORE (Weeks 7-12)
├── Deal pipeline (depends: Phase 1)
├── Document management (depends: Phase 1)
├── Basic AI extraction (depends: Documents)
└── DD tracker (depends: Deals)

PHASE 3: INTELLIGENCE (Weeks 13-20)
├── Multi-agent framework (depends: Phase 2)
├── Financial Agent (depends: Framework)
├── Risk Agent (depends: Framework)
├── Legal/Commercial Agents (depends: Framework)

PHASE 4: WORKFLOW (Weeks 21-28)
├── IC memo generation (depends: Agents)
├── Closing tracker (depends: Deals)
├── Communication automation (depends: IC)
└── Advanced RBAC (depends: Phase 1)

PHASE 5: ENTERPRISE (Weeks 29-36)
├── Portfolio module (depends: Deals)
├── VDR integrations (depends: Documents)
├── SSO/SOC2 (depends: RBAC)
└── API & extensibility (depends: All)
```

---

## Time Estimates Summary

| Phase | Duration | Cumulative |
|-------|----------|------------|
| MVP | 12 weeks | 12 weeks |
| V1 | 16 weeks | 28 weeks |
| V2 | 20 weeks | 48 weeks |

**Team Assumption**: 2 senior full-stack engineers, 1 ML engineer, 1 product designer

**Key Risks**:
1. AI quality/accuracy requiring more iteration
2. Enterprise security requirements
3. Integration complexity with VDRs
4. Performance at scale with large documents

---

*Document Version: 1.0*
*Generated for: InvestAI Deal Intelligence Platform*
*Build-ready specification for founding team*
