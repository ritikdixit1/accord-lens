import { Deal } from '@/types/deal';
import { cn } from '@/lib/utils';
import { Building2, MapPin, DollarSign, TrendingUp, User, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface DealCardProps {
  deal: Deal;
}

function formatCurrency(value: number): string {
  if (value >= 1000000000) {
    return `$${(value / 1000000000).toFixed(1)}B`;
  }
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(0)}M`;
  }
  return `$${(value / 1000).toFixed(0)}K`;
}

export function DealCard({ deal }: DealCardProps) {
  return (
    <Link to={`/deals/${deal.id}`} className="block">
      <div className="glass-card rounded-xl p-4 hover:border-primary/30 transition-all duration-200 cursor-pointer group animate-fade-in">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
              {deal.name}
            </h3>
            <p className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5">
              <Building2 className="h-3.5 w-3.5" />
              {deal.targetCompany}
            </p>
          </div>
          <div
            className={cn(
              'h-2.5 w-2.5 rounded-full',
              deal.statusColor === 'green' && 'bg-status-success',
              deal.statusColor === 'yellow' && 'bg-status-warning',
              deal.statusColor === 'red' && 'bg-status-danger'
            )}
          />
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="flex items-center gap-1.5 text-sm">
            <DollarSign className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-foreground font-medium">{formatCurrency(deal.dealSize)}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm">
            <MapPin className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-muted-foreground">{deal.geography}</span>
          </div>
        </div>

        {/* Sector Badge */}
        <Badge variant="secondary" className="mb-3">
          {deal.sector}
        </Badge>

        {/* Confidence Score */}
        <div className="mb-3">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-muted-foreground">AI Confidence</span>
            <span className="font-medium text-foreground">{deal.confidenceScore}%</span>
          </div>
          <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
            <div
              className={cn(
                'h-full rounded-full transition-all duration-500',
                deal.confidenceScore >= 70 && 'bg-status-success',
                deal.confidenceScore >= 50 && deal.confidenceScore < 70 && 'bg-status-warning',
                deal.confidenceScore < 50 && 'bg-status-danger'
              )}
              style={{ width: `${deal.confidenceScore}%` }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <User className="h-3.5 w-3.5" />
            <span>{deal.assignedTo}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            <span>{deal.updatedAt}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
