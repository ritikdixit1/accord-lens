import { Document } from '@/types/deal';
import { cn } from '@/lib/utils';
import { 
  FileText, 
  Folder, 
  Upload, 
  Download, 
  Search,
  MoreVertical,
  Sparkles,
  Clock,
  CheckCircle,
  AlertCircle,
  FileSpreadsheet,
  FileImage,
  Presentation
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface DocumentsTabProps {
  documents: Document[];
}

const fileIcons: Record<string, typeof FileText> = {
  pdf: FileText,
  xlsx: FileSpreadsheet,
  xls: FileSpreadsheet,
  pptx: Presentation,
  ppt: Presentation,
  png: FileImage,
  jpg: FileImage,
};

const statusConfig = {
  pending: { icon: Clock, color: 'text-muted-foreground', bg: 'bg-muted', label: 'Pending' },
  processing: { icon: Sparkles, color: 'text-blue-400', bg: 'bg-blue-400/10', label: 'Analyzing' },
  complete: { icon: CheckCircle, color: 'text-status-success', bg: 'bg-status-success/10', label: 'Complete' },
  failed: { icon: AlertCircle, color: 'text-status-danger', bg: 'bg-status-danger/10', label: 'Failed' },
};

function formatFileSize(bytes: number): string {
  if (bytes >= 1000000) {
    return `${(bytes / 1000000).toFixed(1)} MB`;
  }
  return `${(bytes / 1000).toFixed(0)} KB`;
}

export function DocumentsTab({ documents }: DocumentsTabProps) {
  // Group documents by folder
  const folders = documents.reduce((acc, doc) => {
    const folder = doc.folderPath;
    if (!acc[folder]) {
      acc[folder] = [];
    }
    acc[folder].push(doc);
    return acc;
  }, {} as Record<string, Document[]>);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search documents..."
              className="w-72 pl-9 bg-secondary border-border"
            />
          </div>
          <Badge variant="secondary">{documents.length} documents</Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-1.5" />
            Download All
          </Button>
          <Button size="sm" variant="glow">
            <Upload className="h-4 w-4 mr-1.5" />
            Upload Files
          </Button>
        </div>
      </div>

      {/* Folders */}
      <div className="space-y-4">
        {Object.entries(folders).map(([folderPath, folderDocs], folderIndex) => (
          <div 
            key={folderPath} 
            className="glass-card rounded-xl overflow-hidden animate-fade-in"
            style={{ animationDelay: `${folderIndex * 100}ms` }}
          >
            {/* Folder Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-secondary/50 border-b border-border/50">
              <div className="flex items-center gap-2">
                <Folder className="h-4 w-4 text-primary" />
                <span className="font-medium text-foreground">{folderPath}</span>
                <span className="text-xs text-muted-foreground">
                  ({folderDocs.length} files)
                </span>
              </div>
            </div>

            {/* Files */}
            <div className="divide-y divide-border/50">
              {folderDocs.map((doc) => {
                const FileIcon = fileIcons[doc.fileType] || FileText;
                const status = statusConfig[doc.analysisStatus];
                const StatusIcon = status.icon;

                return (
                  <div
                    key={doc.id}
                    className="flex items-center justify-between px-4 py-3 hover:bg-secondary/30 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-secondary">
                        <FileIcon className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                          {doc.filename}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                          <span>{formatFileSize(doc.fileSize)}</span>
                          <span>•</span>
                          <span>{doc.uploadedBy}</span>
                          <span>•</span>
                          <span>{doc.uploadedAt}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      {/* Analysis Status */}
                      <div className={cn('flex items-center gap-1.5 px-2 py-1 rounded-full text-xs', status.bg)}>
                        <StatusIcon className={cn('h-3 w-3', status.color)} />
                        <span className={status.color}>{status.label}</span>
                      </div>

                      {/* Actions */}
                      <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
