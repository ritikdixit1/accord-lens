import { Deal, DealStage } from '@/types/deal';
import { DealCard } from './DealCard';
import { cn } from '@/lib/utils';

interface DealPipelineProps {
  deals: Deal[];
}

const stages: { id: DealStage; label: string; color: string }[] = [
  { id: 'sourced', label: 'Sourced', color: 'bg-muted-foreground' },
  { id: 'screening', label: 'Screening', color: 'bg-status-info' },
  { id: 'dd', label: 'Due Diligence', color: 'bg-status-warning' },
  { id: 'ic', label: 'IC Review', color: 'bg-purple-500' },
  { id: 'signed', label: 'Signed', color: 'bg-status-success' },
  { id: 'closed', label: 'Closed', color: 'bg-emerald-600' },
];

export function DealPipeline({ deals }: DealPipelineProps) {
  const getDealsByStage = (stage: DealStage) => {
    return deals.filter((deal) => deal.stage === stage);
  };

  const formatDealValue = (stageDeals: Deal[]) => {
    const total = stageDeals.reduce((acc, deal) => acc + deal.dealSize, 0);
    if (total >= 1000000000) {
      return `$${(total / 1000000000).toFixed(1)}B`;
    }
    return `$${(total / 1000000).toFixed(0)}M`;
  };

  return (
    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin">
      {stages.map((stage) => {
        const stageDeals = getDealsByStage(stage.id);
        return (
          <div
            key={stage.id}
            className="flex-shrink-0 w-80"
          >
            {/* Stage Header */}
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="flex items-center gap-2">
                <div className={cn('h-2.5 w-2.5 rounded-full', stage.color)} />
                <h3 className="font-display font-semibold text-foreground">
                  {stage.label}
                </h3>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-medium text-muted-foreground">
                  {stageDeals.length}
                </span>
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                {formatDealValue(stageDeals)}
              </span>
            </div>

            {/* Deals */}
            <div className="space-y-3">
              {stageDeals.length > 0 ? (
                stageDeals.map((deal) => (
                  <DealCard key={deal.id} deal={deal} />
                ))
              ) : (
                <div className="rounded-xl border border-dashed border-border p-8 text-center">
                  <p className="text-sm text-muted-foreground">No deals</p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
