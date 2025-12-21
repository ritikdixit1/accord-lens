import { Deal } from '@/types/deal';
import { cn } from '@/lib/utils';
import { Briefcase, TrendingUp, Clock, CheckCircle, AlertTriangle, DollarSign } from 'lucide-react';

interface StatsCardsProps {
  deals: Deal[];
}

export function StatsCards({ deals }: StatsCardsProps) {
  const activeDeals = deals.filter((d) => !['closed', 'passed'].includes(d.stage));
  const totalPipelineValue = activeDeals.reduce((acc, d) => acc + d.dealSize, 0);
  const avgConfidence = Math.round(
    activeDeals.reduce((acc, d) => acc + d.confidenceScore, 0) / activeDeals.length
  );
  const inDDDeals = deals.filter((d) => d.stage === 'dd').length;
  const closedDeals = deals.filter((d) => d.stage === 'closed').length;
  const atRiskDeals = deals.filter((d) => d.statusColor === 'red').length;

  const stats = [
    {
      label: 'Active Deals',
      value: activeDeals.length.toString(),
      change: '+3 this month',
      changeType: 'positive' as const,
      icon: Briefcase,
      gradient: 'from-blue-500/20 to-blue-600/20',
      iconColor: 'text-blue-400',
    },
    {
      label: 'Pipeline Value',
      value: `$${(totalPipelineValue / 1000000000).toFixed(1)}B`,
      change: '+$450M this month',
      changeType: 'positive' as const,
      icon: DollarSign,
      gradient: 'from-emerald-500/20 to-emerald-600/20',
      iconColor: 'text-emerald-400',
    },
    {
      label: 'In Due Diligence',
      value: inDDDeals.toString(),
      change: 'Avg 45 days',
      changeType: 'neutral' as const,
      icon: Clock,
      gradient: 'from-amber-500/20 to-amber-600/20',
      iconColor: 'text-amber-400',
    },
    {
      label: 'Closed Deals',
      value: closedDeals.toString(),
      change: 'YTD target: 8',
      changeType: 'positive' as const,
      icon: CheckCircle,
      gradient: 'from-green-500/20 to-green-600/20',
      iconColor: 'text-green-400',
    },
    {
      label: 'Avg AI Confidence',
      value: `${avgConfidence}%`,
      change: '+5% vs last quarter',
      changeType: 'positive' as const,
      icon: TrendingUp,
      gradient: 'from-purple-500/20 to-purple-600/20',
      iconColor: 'text-purple-400',
    },
    {
      label: 'Deals At Risk',
      value: atRiskDeals.toString(),
      change: 'Requires attention',
      changeType: 'negative' as const,
      icon: AlertTriangle,
      gradient: 'from-red-500/20 to-red-600/20',
      iconColor: 'text-red-400',
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="glass-card rounded-xl p-4 animate-fade-in"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className={cn('p-2 rounded-lg bg-gradient-to-br', stat.gradient)}>
              <stat.icon className={cn('h-4 w-4', stat.iconColor)} />
            </div>
          </div>
          <div>
            <p className="text-2xl font-display font-bold text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
          </div>
          <p
            className={cn(
              'text-xs mt-2',
              stat.changeType === 'positive' && 'text-status-success',
              stat.changeType === 'negative' && 'text-status-danger',
              stat.changeType === 'neutral' && 'text-muted-foreground'
            )}
          >
            {stat.change}
          </p>
        </div>
      ))}
    </div>
  );
}
