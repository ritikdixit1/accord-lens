import { Document } from '@/types/deal';
import { 
  FileText, 
  Download, 
  X, 
  Sparkles, 
  FileSpreadsheet,
  Presentation,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCw
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useState } from 'react';

interface DocumentPreviewModalProps {
  document: Document | null;
  isOpen: boolean;
  onClose: () => void;
  onAnalyze?: (docId: string) => void;
}

const fileIcons: Record<string, typeof FileText> = {
  pdf: FileText,
  xlsx: FileSpreadsheet,
  xls: FileSpreadsheet,
  pptx: Presentation,
  ppt: Presentation,
};

function formatFileSize(bytes: number): string {
  if (bytes >= 1000000) {
    return `${(bytes / 1000000).toFixed(1)} MB`;
  }
  return `${(bytes / 1000).toFixed(0)} KB`;
}

export function DocumentPreviewModal({ 
  document, 
  isOpen, 
  onClose,
  onAnalyze 
}: DocumentPreviewModalProps) {
  const [zoom, setZoom] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 12; // Mock value

  if (!document) return null;

  const FileIcon = fileIcons[document.fileType] || FileText;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl h-[85vh] flex flex-col p-0 gap-0 bg-background border-border">
        {/* Header */}
        <DialogHeader className="p-4 border-b border-border shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-secondary">
                <FileIcon className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <DialogTitle className="text-foreground">{document.filename}</DialogTitle>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                  <span>{formatFileSize(document.fileSize)}</span>
                  <span>•</span>
                  <span>{document.uploadedBy}</span>
                  <span>•</span>
                  <span>{document.uploadedAt}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => onAnalyze?.(document.id)}
              >
                <Sparkles className="h-4 w-4 mr-1.5" />
                Analyze with AI
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-1.5" />
                Download
              </Button>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>

        {/* Document Preview Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Main Preview */}
          <div className="flex-1 flex flex-col bg-muted/30">
            {/* Toolbar */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-border/50 bg-secondary/30">
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm text-muted-foreground">
                  Page {currentPage} of {totalPages}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setZoom(Math.max(50, zoom - 25))}
                >
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <span className="text-sm text-muted-foreground w-12 text-center">
                  {zoom}%
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setZoom(Math.min(200, zoom + 25))}
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                >
                  <RotateCw className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Document Content Placeholder */}
            <div className="flex-1 flex items-center justify-center p-8 overflow-auto">
              <div 
                className="bg-card border border-border rounded-lg shadow-lg p-12 text-center"
                style={{ 
                  transform: `scale(${zoom / 100})`,
                  minWidth: '600px',
                  minHeight: '800px',
                }}
              >
                <FileIcon className="h-16 w-16 mx-auto mb-6 text-muted-foreground/50" />
                <h3 className="font-display font-semibold text-foreground mb-2">
                  Document Preview
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {document.filename}
                </p>
                <Badge variant="secondary">
                  {document.fileType.toUpperCase()}
                </Badge>
                <p className="text-xs text-muted-foreground mt-6 max-w-md mx-auto">
                  In production, this would render the actual document content using PDF.js or similar library.
                </p>
              </div>
            </div>
          </div>

          {/* AI Analysis Sidebar */}
          <div className="w-80 border-l border-border bg-secondary/30 overflow-auto">
            <div className="p-4">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-4 w-4 text-primary" />
                <h3 className="font-display font-semibold text-foreground">AI Analysis</h3>
              </div>
              
              {document.analysisStatus === 'complete' ? (
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <h4 className="text-sm font-medium text-foreground mb-2">Key Findings</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        Revenue grew 45% YoY to $125M
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        EBITDA margin improved to 22.4%
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        ARR retention rate at 118%
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-3 rounded-lg bg-status-danger/5 border border-status-danger/20">
                    <h4 className="text-sm font-medium text-foreground mb-2">Risk Flags</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-status-danger mt-1">⚠</span>
                        Customer concentration: Top 3 = 45%
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Sparkles className="h-8 w-8 mx-auto mb-3 text-muted-foreground/50" />
                  <p className="text-sm text-muted-foreground mb-4">
                    Document not yet analyzed
                  </p>
                  <Button 
                    variant="glow" 
                    size="sm"
                    onClick={() => onAnalyze?.(document.id)}
                  >
                    <Sparkles className="h-4 w-4 mr-1.5" />
                    Run AI Analysis
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
