import { Risk } from '@/types/deal';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface RiskHeatMapProps {
  risks: Risk[];
}

type Severity = 'critical' | 'high' | 'medium' | 'low';
type ImpactLevel = 'critical' | 'high' | 'medium' | 'low';
type LikelihoodLevel = 'likely' | 'possible' | 'unlikely' | 'rare';

const impactLevels: ImpactLevel[] = ['critical', 'high', 'medium', 'low'];
const likelihoodLevels: LikelihoodLevel[] = ['likely', 'possible', 'unlikely', 'rare'];

// Map severity to cell colors
const cellColors: Record<string, string> = {
  'critical-likely': 'bg-status-danger',
  'critical-possible': 'bg-status-danger',
  'critical-unlikely': 'bg-orange-500',
  'critical-rare': 'bg-status-warning',
  'high-likely': 'bg-status-danger',
  'high-possible': 'bg-orange-500',
  'high-unlikely': 'bg-status-warning',
  'high-rare': 'bg-yellow-400',
  'medium-likely': 'bg-orange-500',
  'medium-possible': 'bg-status-warning',
  'medium-unlikely': 'bg-yellow-400',
  'medium-rare': 'bg-status-success',
  'low-likely': 'bg-status-warning',
  'low-possible': 'bg-yellow-400',
  'low-unlikely': 'bg-status-success',
  'low-rare': 'bg-status-success',
};

// Mock likelihood for risks (in production, this would be a property)
const mockLikelihood: Record<string, LikelihoodLevel> = {
  'r1': 'possible',
  'r2': 'unlikely',
  'r3': 'rare',
  'r4': 'likely',
};

export function RiskHeatMap({ risks }: RiskHeatMapProps) {
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);

  // Group risks by severity and likelihood
  const getRisksForCell = (impact: ImpactLevel, likelihood: LikelihoodLevel) => {
    return risks.filter(risk => {
      const riskLikelihood = mockLikelihood[risk.id] || 'possible';
      return risk.severity === impact && riskLikelihood === likelihood && risk.status === 'open';
    });
  };

  return (
    <div className="glass-card rounded-xl p-5 animate-fade-in">
      <h3 className="font-display font-semibold text-foreground mb-4">Risk Heat Map</h3>
      
      <div className="relative">
        {/* Y-Axis Label */}
        <div className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Impact →
          </span>
        </div>

        {/* Grid */}
        <div className="ml-16">
          {/* X-Axis Labels */}
          <div className="flex mb-2">
            <div className="w-20" />
            {likelihoodLevels.map((likelihood) => (
              <div key={likelihood} className="flex-1 text-center">
                <span className="text-xs font-medium text-muted-foreground capitalize">
                  {likelihood}
                </span>
              </div>
            ))}
          </div>

          {/* Heat Map Grid */}
          <div className="space-y-1">
            {impactLevels.map((impact) => (
              <div key={impact} className="flex items-center gap-1">
                {/* Y-Axis Label */}
                <div className="w-20 pr-2 text-right">
                  <span className="text-xs font-medium text-muted-foreground capitalize">
                    {impact}
                  </span>
                </div>

                {/* Cells */}
                {likelihoodLevels.map((likelihood) => {
                  const cellKey = `${impact}-${likelihood}`;
                  const cellRisks = getRisksForCell(impact, likelihood);
                  const hasRisks = cellRisks.length > 0;

                  return (
                    <TooltipProvider key={cellKey}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div
                            className={cn(
                              'flex-1 h-14 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200 border border-transparent',
                              cellColors[cellKey],
                              hasRisks ? 'opacity-100 scale-100' : 'opacity-30',
                              hoveredCell === cellKey && 'ring-2 ring-foreground scale-105'
                            )}
                            onMouseEnter={() => setHoveredCell(cellKey)}
                            onMouseLeave={() => setHoveredCell(null)}
                          >
                            {hasRisks && (
                              <span className="font-bold text-white text-lg drop-shadow-md">
                                {cellRisks.length}
                              </span>
                            )}
                          </div>
                        </TooltipTrigger>
                        {hasRisks && (
                          <TooltipContent side="top" className="max-w-xs">
                            <div className="space-y-2">
                              <p className="font-medium text-foreground capitalize">
                                {impact} Impact / {likelihood}
                              </p>
                              <ul className="space-y-1">
                                {cellRisks.map((risk) => (
                                  <li key={risk.id} className="text-sm text-muted-foreground">
                                    • {risk.title}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </TooltipContent>
                        )}
                      </Tooltip>
                    </TooltipProvider>
                  );
                })}
              </div>
            ))}
          </div>

          {/* X-Axis Label */}
          <div className="text-center mt-3">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Likelihood →
            </span>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-border/50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-status-danger" />
          <span className="text-xs text-muted-foreground">Critical</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-orange-500" />
          <span className="text-xs text-muted-foreground">High</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-status-warning" />
          <span className="text-xs text-muted-foreground">Medium</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-status-success" />
          <span className="text-xs text-muted-foreground">Low</span>
        </div>
      </div>
    </div>
  );
}
