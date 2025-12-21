import { AIInsight } from '@/types/deal';
import { cn } from '@/lib/utils';
import { 
  Sparkles, 
  TrendingUp, 
  Shield, 
  BarChart3, 
  AlertTriangle,
  FileText,
  RefreshCw,
  CheckCircle,
  Download
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface AIAnalysisTabProps {
  insights: AIInsight[];
}

const agentConfig = {
  financial: { 
    icon: TrendingUp, 
    color: 'text-emerald-400', 
    bg: 'bg-emerald-400/10',
    label: 'Financial Analysis',
    description: 'Revenue recognition, working capital, cash flow patterns'
  },
  legal: { 
    icon: Shield, 
    color: 'text-blue-400', 
    bg: 'bg-blue-400/10',
    label: 'Legal Review',
    description: 'Contract analysis, IP assessment, regulatory compliance'
  },
  commercial: { 
    icon: BarChart3, 
    color: 'text-purple-400', 
    bg: 'bg-purple-400/10',
    label: 'Commercial Analysis',
    description: 'Market position, competitive landscape, growth drivers'
  },
  risk: { 
    icon: AlertTriangle, 
    color: 'text-amber-400', 
    bg: 'bg-amber-400/10',
    label: 'Risk Assessment',
    description: 'Key risks identification and mitigation strategies'
  },
  valuation: { 
    icon: FileText, 
    color: 'text-cyan-400', 
    bg: 'bg-cyan-400/10',
    label: 'Valuation Model',
    description: 'DCF analysis, comparable transactions, LBO scenarios'
  },
};

export function AIAnalysisTab({ insights }: AIAnalysisTabProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-primary">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-display font-semibold text-lg text-foreground">AI Analysis</h2>
            <p className="text-sm text-muted-foreground">
              Automated analysis powered by specialized AI agents
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-1.5" />
            Export Report
          </Button>
          <Button variant="glow" size="sm">
            <RefreshCw className="h-4 w-4 mr-1.5" />
            Run Full Analysis
          </Button>
        </div>
      </div>

      {/* Agent Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {insights.map((insight, index) => {
          const agent = agentConfig[insight.agentType];
          const AgentIcon = agent.icon;

          return (
            <div 
              key={insight.id} 
              className="glass-card rounded-xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-secondary/50 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className={cn('p-2 rounded-lg', agent.bg)}>
                    <AgentIcon className={cn('h-5 w-5', agent.color)} />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{agent.label}</h3>
                    <p className="text-xs text-muted-foreground">{agent.description}</p>
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Complete
                </Badge>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="font-medium text-foreground mb-2">{insight.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{insight.summary}</p>

                {/* Key Findings */}
                <div className="mb-4">
                  <h5 className="text-xs font-medium text-foreground uppercase tracking-wider mb-2">
                    Key Findings
                  </h5>
                  <div className="space-y-2">
                    {insight.keyFindings.map((finding, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-status-success shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{finding}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Risk Flags */}
                {insight.riskFlags.length > 0 && (
                  <div className="mb-4">
                    <h5 className="text-xs font-medium text-foreground uppercase tracking-wider mb-2">
                      Risk Flags
                    </h5>
                    <div className="space-y-2">
                      {insight.riskFlags.map((flag, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-status-warning shrink-0 mt-0.5" />
                          <span className="text-sm text-status-warning/80">{flag}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Confidence Score */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Confidence Score</span>
                    <div className="h-1.5 w-24 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-primary rounded-full"
                        style={{ width: `${insight.confidenceScore * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {Math.round(insight.confidenceScore * 100)}%
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">{insight.createdAt}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Run Additional Analysis */}
      <div className="glass-card rounded-xl p-6 border-dashed">
        <div className="text-center">
          <div className="inline-flex p-3 rounded-full bg-secondary mb-4">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-display font-semibold text-foreground mb-2">
            Need More Analysis?
          </h3>
          <p className="text-sm text-muted-foreground mb-4 max-w-md mx-auto">
            Run additional AI agents to analyze specific documents or perform specialized assessments.
          </p>
          <Button variant="outline">
            Configure Custom Analysis
          </Button>
        </div>
      </div>
    </div>
  );
}
