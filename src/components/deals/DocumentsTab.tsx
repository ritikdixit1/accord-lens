import { useState } from 'react';
import { Document } from '@/types/deal';
import { cn } from '@/lib/utils';
import { 
  FileText, 
  Folder, 
  Download, 
  Search,
  MoreVertical,
  Sparkles,
  Clock,
  CheckCircle,
  AlertCircle,
  FileSpreadsheet,
  FileImage,
  Presentation,
  LayoutGrid,
  List,
  Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { DocumentUploadZone } from '@/components/documents/DocumentUploadZone';
import { DocumentPreviewModal } from '@/components/documents/DocumentPreviewModal';
import { FolderTree } from '@/components/documents/FolderTree';

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
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [showUploadZone, setShowUploadZone] = useState(false);
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

  // Filter documents by selected folder
  const filteredDocuments = selectedFolder 
    ? documents.filter(doc => doc.folderPath === selectedFolder)
    : documents;

  // Group documents by folder for display
  const folders = filteredDocuments.reduce((acc, doc) => {
    const folder = doc.folderPath;
    if (!acc[folder]) {
      acc[folder] = [];
    }
    acc[folder].push(doc);
    return acc;
  }, {} as Record<string, Document[]>);

  const handleOpenPreview = (doc: Document) => {
    setSelectedDocument(doc);
    setIsPreviewOpen(true);
  };

  const handleUpload = (files: File[]) => {
    console.log('Uploading files:', files);
    // In production, this would call the upload API
  };

  return (
    <div className="flex gap-6 animate-fade-in">
      {/* Sidebar with Folder Tree */}
      <div className="w-56 shrink-0">
        <div className="glass-card rounded-xl p-4 sticky top-4">
          <h3 className="font-display font-semibold text-foreground text-sm mb-3">Folders</h3>
          <FolderTree 
            documents={documents} 
            selectedFolder={selectedFolder}
            onSelectFolder={setSelectedFolder}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-6">
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
            <Badge variant="secondary">{filteredDocuments.length} documents</Badge>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center border border-border rounded-lg p-0.5">
              <Button
                variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                size="icon"
                className="h-7 w-7"
                onClick={() => setViewMode('list')}
              >
                <List className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                size="icon"
                className="h-7 w-7"
                onClick={() => setViewMode('grid')}
              >
                <LayoutGrid className="h-3.5 w-3.5" />
              </Button>
            </div>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-1.5" />
              Download All
            </Button>
            <Button 
              size="sm" 
              variant="glow"
              onClick={() => setShowUploadZone(!showUploadZone)}
            >
              Upload Files
            </Button>
          </div>
        </div>

        {/* Upload Zone */}
        {showUploadZone && (
          <DocumentUploadZone onUpload={handleUpload} />
        )}

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
              <div className={cn(
                viewMode === 'grid' 
                  ? 'grid grid-cols-3 gap-4 p-4' 
                  : 'divide-y divide-border/50'
              )}>
                {folderDocs.map((doc) => {
                  const FileIcon = fileIcons[doc.fileType] || FileText;
                  const status = statusConfig[doc.analysisStatus];
                  const StatusIcon = status.icon;

                  if (viewMode === 'grid') {
                    return (
                      <div
                        key={doc.id}
                        className="p-4 rounded-lg bg-secondary/30 border border-border/50 hover:border-primary/30 transition-all cursor-pointer group"
                        onClick={() => handleOpenPreview(doc)}
                      >
                        <div className="flex items-center justify-center h-24 mb-3 rounded-lg bg-secondary">
                          <FileIcon className="h-10 w-10 text-muted-foreground" />
                        </div>
                        <p className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                          {doc.filename}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {formatFileSize(doc.fileSize)}
                        </p>
                        <div className={cn('inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs mt-2', status.bg)}>
                          <StatusIcon className={cn('h-3 w-3', status.color)} />
                          <span className={status.color}>{status.label}</span>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={doc.id}
                      className="flex items-center justify-between px-4 py-3 hover:bg-secondary/30 transition-colors group cursor-pointer"
                      onClick={() => handleOpenPreview(doc)}
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
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenPreview(doc);
                          }}
                        >
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={(e) => e.stopPropagation()}
                        >
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

      {/* Document Preview Modal */}
      <DocumentPreviewModal
        document={selectedDocument}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </div>
  );
}
