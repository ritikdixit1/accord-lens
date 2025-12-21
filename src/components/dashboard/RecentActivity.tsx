import { FileText, MessageSquare, AlertTriangle, CheckCircle, Upload, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const activities = [
  {
    id: 1,
    type: 'document',
    title: 'Financial Model uploaded',
    deal: 'Project Titan',
    user: 'Sarah Chen',
    time: '2 hours ago',
    icon: Upload,
    iconColor: 'text-blue-400 bg-blue-400/10',
  },
  {
    id: 2,
    type: 'comment',
    title: 'New comment on risk assessment',
    deal: 'Project Mercury',
    user: 'Michael Torres',
    time: '3 hours ago',
    icon: MessageSquare,
    iconColor: 'text-purple-400 bg-purple-400/10',
  },
  {
    id: 3,
    type: 'risk',
    title: 'Critical risk identified',
    deal: 'Project Nova',
    user: 'AI Agent',
    time: '4 hours ago',
    icon: AlertTriangle,
    iconColor: 'text-amber-400 bg-amber-400/10',
  },
  {
    id: 4,
    type: 'approval',
    title: 'IC memo approved',
    deal: 'Project Mercury',
    user: 'James Miller',
    time: '5 hours ago',
    icon: CheckCircle,
    iconColor: 'text-emerald-400 bg-emerald-400/10',
  },
  {
    id: 5,
    type: 'analysis',
    title: 'Legal analysis completed',
    deal: 'Project Titan',
    user: 'AI Agent',
    time: '6 hours ago',
    icon: FileText,
    iconColor: 'text-cyan-400 bg-cyan-400/10',
  },
  {
    id: 6,
    type: 'team',
    title: 'Emily Watson assigned',
    deal: 'Project Apollo',
    user: 'Sarah Chen',
    time: '8 hours ago',
    icon: Users,
    iconColor: 'text-pink-400 bg-pink-400/10',
  },
];

export function RecentActivity() {
  return (
    <div className="glass-card rounded-xl p-6">
      <h2 className="font-display font-semibold text-lg text-foreground mb-6">
        Recent Activity
      </h2>
      
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={activity.id}
            className="flex items-start gap-3 animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className={cn('p-2 rounded-lg shrink-0', activity.iconColor)}>
              <activity.icon className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground">{activity.title}</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs text-primary">{activity.deal}</span>
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-xs text-muted-foreground">{activity.user}</span>
              </div>
            </div>
            <span className="text-xs text-muted-foreground shrink-0">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
