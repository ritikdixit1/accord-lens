import { Workstream } from '@/types/deal';
import { cn } from '@/lib/utils';
import { 
  CheckCircle, 
  Clock, 
  Circle,
  ChevronRight,
  User,
  MessageSquare,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

interface WorkstreamsTabProps {
  workstreams: Workstream[];
}

const statusConfig = {
  not_started: { icon: Circle, color: 'text-muted-foreground', bg: 'bg-muted', label: 'Not Started' },
  in_progress: { icon: Clock, color: 'text-status-warning', bg: 'bg-status-warning/10', label: 'In Progress' },
  complete: { icon: CheckCircle, color: 'text-status-success', bg: 'bg-status-success/10', label: 'Complete' },
};

export function WorkstreamsTab({ workstreams }: WorkstreamsTabProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display font-semibold text-lg text-foreground">Due Diligence Workstreams</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Track progress across all DD workstreams
          </p>
        </div>
        <Button variant="glow" size="sm">
          <Plus className="h-4 w-4 mr-1.5" />
          Add Workstream
        </Button>
      </div>

      {/* Overall Progress */}
      <div className="glass-card rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium text-foreground">Overall DD Progress</h3>
          <span className="font-display text-2xl font-bold text-foreground">
            {Math.round(workstreams.reduce((acc, w) => acc + w.progressPct, 0) / workstreams.length)}%
          </span>
        </div>
        <Progress 
          value={workstreams.reduce((acc, w) => acc + w.progressPct, 0) / workstreams.length} 
          className="h-2"
        />
        <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
          <span>
            {workstreams.reduce((acc, w) => acc + w.answeredCount, 0)} of {workstreams.reduce((acc, w) => acc + w.questionsCount, 0)} questions answered
          </span>
          <span>Target: 100%</span>
        </div>
      </div>

      {/* Workstreams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {workstreams.map((workstream, index) => {
          const status = statusConfig[workstream.status];
          const StatusIcon = status.icon;

          return (
            <div 
              key={workstream.id} 
              className="glass-card rounded-xl p-5 hover:border-primary/30 transition-all duration-200 cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {workstream.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <User className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{workstream.owner}</span>
                  </div>
                </div>
                <div className={cn('flex items-center gap-1.5 px-2 py-1 rounded-full text-xs', status.bg)}>
                  <StatusIcon className={cn('h-3 w-3', status.color)} />
                  <span className={status.color}>{status.label}</span>
                </div>
              </div>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2 text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium text-foreground">{workstream.progressPct}%</span>
                </div>
                <Progress value={workstream.progressPct} className="h-1.5" />
              </div>

              {/* Questions Stats */}
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {workstream.answeredCount}/{workstream.questionsCount} answered
                    </span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="group-hover:bg-secondary">
                  View
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
