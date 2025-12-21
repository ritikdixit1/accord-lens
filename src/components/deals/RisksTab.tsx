import { Risk } from '@/types/deal';
import { cn } from '@/lib/utils';
import { 
  AlertTriangle, 
  AlertCircle, 
  Info,
  Shield,
  CheckCircle,
  Plus,
  ChevronRight,
  Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface RisksTabProps {
  risks: Risk[];
}

const severityConfig = {
  critical: { 
    icon: AlertTriangle, 
    color: 'text-status-danger', 
    bg: 'bg-status-danger/10', 
    border: 'border-status-danger/30',
    label: 'Critical' 
  },
  high: { 
    icon: AlertCircle, 
    color: 'text-orange-400', 
    bg: 'bg-orange-400/10', 
    border: 'border-orange-400/30',
    label: 'High' 
  },
  medium: { 
    icon: AlertCircle, 
    color: 'text-status-warning', 
    bg: 'bg-status-warning/10', 
    border: 'border-status-warning/30',
    label: 'Medium' 
  },
  low: { 
    icon: Info, 
    color: 'text-status-info', 
    bg: 'bg-status-info/10', 
    border: 'border-status-info/30',
    label: 'Low' 
  },
};

const statusBadge = {
  open: { color: 'bg-status-danger/10 text-status-danger', label: 'Open' },
  mitigated: { color: 'bg-status-warning/10 text-status-warning', label: 'Mitigated' },
  accepted: { color: 'bg-status-info/10 text-status-info', label: 'Accepted' },
  closed: { color: 'bg-status-success/10 text-status-success', label: 'Closed' },
};

export function RisksTab({ risks }: RisksTabProps) {
  const risksByCategory = risks.reduce((acc, risk) => {
    if (!acc[risk.category]) {
      acc[risk.category] = [];
    }
    acc[risk.category].push(risk);
    return acc;
  }, {} as Record<string, Risk[]>);

  const criticalCount = risks.filter(r => r.severity === 'critical' && r.status === 'open').length;
  const highCount = risks.filter(r => r.severity === 'high' && r.status === 'open').length;
  const openCount = risks.filter(r => r.status === 'open').length;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display font-semibold text-lg text-foreground">Risk Register</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Track and manage identified risks
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-1.5" />
            Filter
          </Button>
          <Button variant="glow" size="sm">
            <Plus className="h-4 w-4 mr-1.5" />
            Add Risk
          </Button>
        </div>
      </div>

      {/* Risk Summary */}
      <div className="grid grid-cols-4 gap-4">
        <div className="glass-card rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-4 w-4 text-status-danger" />
            <span className="text-sm text-muted-foreground">Critical</span>
          </div>
          <p className="font-display text-2xl font-bold text-foreground">{criticalCount}</p>
        </div>
        <div className="glass-card rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="h-4 w-4 text-orange-400" />
            <span className="text-sm text-muted-foreground">High</span>
          </div>
          <p className="font-display text-2xl font-bold text-foreground">{highCount}</p>
        </div>
        <div className="glass-card rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Total Open</span>
          </div>
          <p className="font-display text-2xl font-bold text-foreground">{openCount}</p>
        </div>
        <div className="glass-card rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="h-4 w-4 text-status-success" />
            <span className="text-sm text-muted-foreground">Mitigated</span>
          </div>
          <p className="font-display text-2xl font-bold text-foreground">
            {risks.filter(r => r.status === 'mitigated' || r.status === 'closed').length}
          </p>
        </div>
      </div>

      {/* Risks List */}
      <div className="space-y-4">
        {risks.map((risk, index) => {
          const severity = severityConfig[risk.severity];
          const SeverityIcon = severity.icon;
          const status = statusBadge[risk.status];

          return (
            <div 
              key={risk.id} 
              className={cn(
                'glass-card rounded-xl p-5 border-l-4 hover:border-primary/30 transition-all duration-200 cursor-pointer group animate-fade-in',
                severity.border
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={cn('p-2 rounded-lg shrink-0', severity.bg)}>
                  <SeverityIcon className={cn('h-5 w-5', severity.color)} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {risk.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">{risk.category}</Badge>
                        <Badge className={cn('text-xs', status.color)}>{status.label}</Badge>
                      </div>
                    </div>
                    <Badge className={cn('text-xs shrink-0', severity.bg, severity.color)}>
                      {severity.label}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">{risk.description}</p>
                  
                  {risk.mitigationPlan && (
                    <div className="bg-secondary/50 rounded-lg p-3 border border-border/50">
                      <span className="text-xs font-medium text-foreground">Mitigation Plan: </span>
                      <span className="text-xs text-muted-foreground">{risk.mitigationPlan}</span>
                    </div>
                  )}
                </div>

                <Button variant="ghost" size="sm" className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
