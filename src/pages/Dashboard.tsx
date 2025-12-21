import { AppLayout } from '@/components/layout/AppLayout';
import { DealPipeline } from '@/components/deals/DealPipeline';
import { StatsCards } from '@/components/dashboard/StatsCards';
import { AIInsightsPanel } from '@/components/dashboard/AIInsightsPanel';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { mockDeals, mockAIInsights } from '@/data/mockDeals';
import { Button } from '@/components/ui/button';
import { Plus, Filter, Download } from 'lucide-react';

export default function Dashboard() {
  const activeDeals = mockDeals.filter((d) => !['passed'].includes(d.stage));

  return (
    <AppLayout 
      title="Deal Pipeline" 
      subtitle="Track and manage your active investment opportunities"
    >
      {/* Stats */}
      <StatsCards deals={mockDeals} />

      {/* Main Content */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pipeline - 2 columns */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-semibold text-lg text-foreground">
              Active Pipeline
            </h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-1.5" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-1.5" />
                Export
              </Button>
              <Button size="sm" variant="glow">
                <Plus className="h-4 w-4 mr-1.5" />
                New Deal
              </Button>
            </div>
          </div>
          <DealPipeline deals={activeDeals} />
        </div>

        {/* Sidebar - 1 column */}
        <div className="space-y-6">
          <AIInsightsPanel insights={mockAIInsights} />
          <RecentActivity />
        </div>
      </div>
    </AppLayout>
  );
}
