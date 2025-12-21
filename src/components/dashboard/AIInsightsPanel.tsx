import { AIInsight } from '@/types/deal';
import { cn } from '@/lib/utils';
import { Sparkles, TrendingUp, AlertTriangle, Shield, BarChart3, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface AIInsightsPanelProps {
  insights: AIInsight[];
}

const agentIcons = {
  financial: TrendingUp,
  legal: Shield,
  commercial: BarChart3,
  risk: AlertTriangle,
  valuation: FileText,
};

const agentColors = {
  financial: 'text-emerald-400 bg-emerald-400/10',
  legal: 'text-blue-400 bg-blue-400/10',
  commercial: 'text-purple-400 bg-purple-400/10',
  risk: 'text-amber-400 bg-amber-400/10',
  valuation: 'text-cyan-400 bg-cyan-400/10',
};

export function AIInsightsPanel({ insights }: AIInsightsPanelProps) {
  return (
    <div className="glass-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-primary">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <h2 className="font-display font-semibold text-lg text-foreground">AI Insights</h2>
        </div>
        <Badge variant="secondary" className="text-xs">
          Real-time Analysis
        </Badge>
      </div>

      <div className="space-y-4">
        {insights.map((insight, index) => {
          const Icon = agentIcons[insight.agentType];
          const colorClass = agentColors[insight.agentType];
          
          return (
            <div
              key={insight.id}
              className="p-4 rounded-lg bg-secondary/50 border border-border/50 hover:border-primary/30 transition-all duration-200 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-3">
                <div className={cn('p-2 rounded-lg', colorClass)}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-sm text-foreground">{insight.title}</h4>
                    <span className="text-xs text-muted-foreground">{insight.createdAt}</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {insight.summary}
                  </p>
                  
                  {/* Key Findings */}
                  <div className="space-y-1.5 mb-3">
                    {insight.keyFindings.slice(0, 2).map((finding, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs">
                        <span className="text-status-success mt-0.5">✓</span>
                        <span className="text-muted-foreground">{finding}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Risk Flags */}
                  {insight.riskFlags.length > 0 && (
                    <div className="space-y-1.5">
                      {insight.riskFlags.slice(0, 1).map((flag, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs">
                          <span className="text-status-warning mt-0.5">⚠</span>
                          <span className="text-status-warning/80">{flag}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Confidence Score */}
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/50">
                    <span className="text-xs text-muted-foreground">Confidence:</span>
                    <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-primary rounded-full"
                        style={{ width: `${insight.confidenceScore * 100}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-foreground">
                      {Math.round(insight.confidenceScore * 100)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
