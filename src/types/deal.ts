export type DealStage = 
  | 'sourced' 
  | 'screening' 
  | 'dd' 
  | 'ic' 
  | 'signed' 
  | 'closed' 
  | 'passed';

export type DealStatus = 'green' | 'yellow' | 'red';

export interface Deal {
  id: string;
  name: string;
  targetCompany: string;
  stage: DealStage;
  dealSize: number;
  sector: string;
  geography: string;
  source: string;
  confidenceScore: number;
  thesis: string;
  statusColor: DealStatus;
  assignedTo: string;
  createdAt: string;
  updatedAt: string;
  keyMetrics: {
    revenue?: number;
    ebitda?: number;
    ebitdaMargin?: number;
    yoyGrowth?: number;
    employees?: number;
  };
}

export interface Document {
  id: string;
  dealId: string;
  folderPath: string;
  filename: string;
  fileType: string;
  fileSize: number;
  uploadedAt: string;
  uploadedBy: string;
  analysisStatus: 'pending' | 'processing' | 'complete' | 'failed';
}

export interface Workstream {
  id: string;
  dealId: string;
  name: string;
  owner: string;
  status: 'not_started' | 'in_progress' | 'complete';
  progressPct: number;
  questionsCount: number;
  answeredCount: number;
}

export interface Risk {
  id: string;
  dealId: string;
  title: string;
  description: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  category: string;
  status: 'open' | 'mitigated' | 'accepted' | 'closed';
  mitigationPlan?: string;
}

export interface AIInsight {
  id: string;
  dealId: string;
  agentType: 'financial' | 'legal' | 'commercial' | 'risk' | 'valuation';
  title: string;
  summary: string;
  keyFindings: string[];
  riskFlags: string[];
  confidenceScore: number;
  createdAt: string;
}
