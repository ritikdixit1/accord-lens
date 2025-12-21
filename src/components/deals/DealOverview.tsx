import { Deal } from '@/types/deal';
import { cn } from '@/lib/utils';
import { 
  Building2, 
  MapPin, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Calendar,
  Briefcase,
  Target,
  BarChart3,
  Percent
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface DealOverviewProps {
  deal: Deal;
}

function formatCurrency(value: number): string {
  if (value >= 1000000000) {
    return `$${(value / 1000000000).toFixed(2)}B`;
  }
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`;
  }
  return `$${(value / 1000).toFixed(0)}K`;
}

export function DealOverview({ deal }: DealOverviewProps) {
  const metrics = [
    {
      label: 'Revenue',
      value: deal.keyMetrics.revenue ? formatCurrency(deal.keyMetrics.revenue) : 'N/A',
      icon: DollarSign,
      color: 'text-emerald-400',
    },
    {
      label: 'EBITDA',
      value: deal.keyMetrics.ebitda ? formatCurrency(deal.keyMetrics.ebitda) : 'N/A',
      icon: BarChart3,
      color: 'text-blue-400',
    },
    {
      label: 'EBITDA Margin',
      value: deal.keyMetrics.ebitdaMargin ? `${deal.keyMetrics.ebitdaMargin}%` : 'N/A',
      icon: Percent,
      color: 'text-purple-400',
    },
    {
      label: 'YoY Growth',
      value: deal.keyMetrics.yoyGrowth ? `${deal.keyMetrics.yoyGrowth}%` : 'N/A',
      icon: TrendingUp,
      color: 'text-cyan-400',
    },
    {
      label: 'Employees',
      value: deal.keyMetrics.employees?.toLocaleString() || 'N/A',
      icon: Users,
      color: 'text-amber-400',
    },
    {
      label: 'Deal Size',
      value: formatCurrency(deal.dealSize),
      icon: Target,
      color: 'text-pink-400',
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Card */}
      <div className="glass-card rounded-xl p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="font-display text-2xl font-bold text-foreground">{deal.name}</h1>
              <div
                className={cn(
                  'h-3 w-3 rounded-full',
                  deal.statusColor === 'green' && 'bg-status-success',
                  deal.statusColor === 'yellow' && 'bg-status-warning',
                  deal.statusColor === 'red' && 'bg-status-danger'
                )}
              />
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Building2 className="h-4 w-4" />
                {deal.targetCompany}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {deal.geography}
              </span>
              <Badge variant="secondary">{deal.sector}</Badge>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground mb-1">AI Confidence Score</div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-24 bg-secondary rounded-full overflow-hidden">
                <div
                  className={cn(
                    'h-full rounded-full',
                    deal.confidenceScore >= 70 && 'bg-status-success',
                    deal.confidenceScore >= 50 && deal.confidenceScore < 70 && 'bg-status-warning',
                    deal.confidenceScore < 50 && 'bg-status-danger'
                  )}
                  style={{ width: `${deal.confidenceScore}%` }}
                />
              </div>
              <span className="font-display text-2xl font-bold text-foreground">
                {deal.confidenceScore}%
              </span>
            </div>
          </div>
        </div>

        {/* Investment Thesis */}
        <div className="bg-secondary/50 rounded-lg p-4 border border-border/50">
          <h3 className="text-sm font-medium text-foreground mb-2">Investment Thesis</h3>
          <p className="text-sm text-muted-foreground">{deal.thesis}</p>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {metrics.map((metric, index) => (
          <div 
            key={metric.label} 
            className="glass-card rounded-xl p-4 animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-center gap-2 mb-3">
              <metric.icon className={cn('h-4 w-4', metric.color)} />
              <span className="text-xs text-muted-foreground">{metric.label}</span>
            </div>
            <p className="font-display text-xl font-bold text-foreground">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Deal Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Deal Details */}
        <div className="glass-card rounded-xl p-6">
          <h3 className="font-display font-semibold text-foreground mb-4">Deal Details</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-border/50">
              <span className="text-sm text-muted-foreground">Source</span>
              <span className="text-sm text-foreground font-medium">{deal.source}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border/50">
              <span className="text-sm text-muted-foreground">Lead Partner</span>
              <span className="text-sm text-foreground font-medium">{deal.assignedTo}</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border/50">
              <span className="text-sm text-muted-foreground">Created</span>
              <span className="text-sm text-foreground font-medium">{deal.createdAt}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-muted-foreground">Last Updated</span>
              <span className="text-sm text-foreground font-medium">{deal.updatedAt}</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="glass-card rounded-xl p-6">
          <h3 className="font-display font-semibold text-foreground mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="justify-start">
              <Briefcase className="h-4 w-4 mr-2" />
              Update Stage
            </Button>
            <Button variant="outline" className="justify-start">
              <Users className="h-4 w-4 mr-2" />
              Assign Team
            </Button>
            <Button variant="outline" className="justify-start">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule IC
            </Button>
            <Button variant="glow" className="justify-start">
              <TrendingUp className="h-4 w-4 mr-2" />
              Run AI Analysis
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
