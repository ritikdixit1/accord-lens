import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AppLayout } from '@/components/layout/AppLayout';
import { DealOverview } from '@/components/deals/DealOverview';
import { DocumentsTab } from '@/components/deals/DocumentsTab';
import { WorkstreamsTab } from '@/components/deals/WorkstreamsTab';
import { RisksTab } from '@/components/deals/RisksTab';
import { AIAnalysisTab } from '@/components/deals/AIAnalysisTab';
import { mockDeals, mockDocuments, mockWorkstreams, mockRisks, mockAIInsights } from '@/data/mockDeals';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  LayoutDashboard, 
  FileText, 
  ListChecks, 
  AlertTriangle, 
  Sparkles,
  MessageSquare,
  Clock
} from 'lucide-react';

const tabs = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'documents', label: 'Documents', icon: FileText },
  { id: 'workstreams', label: 'Workstreams', icon: ListChecks },
  { id: 'risks', label: 'Risks', icon: AlertTriangle },
  { id: 'analysis', label: 'AI Analysis', icon: Sparkles },
  { id: 'collaboration', label: 'Collaboration', icon: MessageSquare },
  { id: 'timeline', label: 'Timeline', icon: Clock },
];

export default function DealDetail() {
  const { dealId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const deal = mockDeals.find((d) => d.id === dealId);
  const documents = mockDocuments.filter((d) => d.dealId === dealId);
  const workstreams = mockWorkstreams.filter((w) => w.dealId === dealId);
  const risks = mockRisks.filter((r) => r.dealId === dealId);
  const insights = mockAIInsights.filter((i) => i.dealId === dealId);

  if (!deal) {
    return (
      <AppLayout title="Deal Not Found">
        <div className="flex flex-col items-center justify-center py-20">
          <p className="text-muted-foreground mb-4">The deal you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout title={deal.name} subtitle={deal.targetCompany}>
      {/* Back Button & Tabs */}
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-1.5" />
          Back to Pipeline
        </Link>

        {/* Tabs */}
        <div className="flex items-center gap-1 p-1 bg-secondary/50 rounded-lg w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200',
                activeTab === tab.id
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'overview' && <DealOverview deal={deal} />}
        {activeTab === 'documents' && <DocumentsTab documents={documents} />}
        {activeTab === 'workstreams' && <WorkstreamsTab workstreams={workstreams} />}
        {activeTab === 'risks' && <RisksTab risks={risks} />}
        {activeTab === 'analysis' && <AIAnalysisTab insights={insights} />}
        {activeTab === 'collaboration' && (
          <div className="glass-card rounded-xl p-12 text-center">
            <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-display font-semibold text-lg text-foreground mb-2">
              Collaboration Hub
            </h3>
            <p className="text-muted-foreground">
              Comments, discussions, and team collaboration coming soon.
            </p>
          </div>
        )}
        {activeTab === 'timeline' && (
          <div className="glass-card rounded-xl p-12 text-center">
            <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-display font-semibold text-lg text-foreground mb-2">
              Deal Timeline
            </h3>
            <p className="text-muted-foreground">
              Full deal history and timeline view coming soon.
            </p>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
