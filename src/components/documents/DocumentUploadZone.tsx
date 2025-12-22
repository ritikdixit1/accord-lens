import { useState, useCallback } from 'react';
import { Upload, FileText, X, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

interface UploadingFile {
  id: string;
  file: File;
  progress: number;
  status: 'uploading' | 'complete' | 'error';
}

interface DocumentUploadZoneProps {
  onUpload?: (files: File[]) => void;
  dealId?: string;
}

export function DocumentUploadZone({ onUpload, dealId }: DocumentUploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadingFiles, setUploadingFiles] = useState<UploadingFile[]>([]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const simulateUpload = (file: File, id: string) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setUploadingFiles(prev => 
          prev.map(f => f.id === id ? { ...f, progress: 100, status: 'complete' } : f)
        );
        setTimeout(() => {
          setUploadingFiles(prev => prev.filter(f => f.id !== id));
        }, 2000);
      } else {
        setUploadingFiles(prev => 
          prev.map(f => f.id === id ? { ...f, progress } : f)
        );
      }
    }, 200);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      const newUploadingFiles: UploadingFile[] = files.map(file => ({
        id: Math.random().toString(36).substr(2, 9),
        file,
        progress: 0,
        status: 'uploading' as const,
      }));
      
      setUploadingFiles(prev => [...prev, ...newUploadingFiles]);
      newUploadingFiles.forEach(f => simulateUpload(f.file, f.id));
      onUpload?.(files);
    }
  }, [onUpload]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      const newUploadingFiles: UploadingFile[] = files.map(file => ({
        id: Math.random().toString(36).substr(2, 9),
        file,
        progress: 0,
        status: 'uploading' as const,
      }));
      
      setUploadingFiles(prev => [...prev, ...newUploadingFiles]);
      newUploadingFiles.forEach(f => simulateUpload(f.file, f.id));
      onUpload?.(files);
    }
  };

  const removeFile = (id: string) => {
    setUploadingFiles(prev => prev.filter(f => f.id !== id));
  };

  return (
    <div className="space-y-4">
      {/* Drop Zone */}
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={cn(
          'relative border-2 border-dashed rounded-xl p-8 transition-all duration-300 text-center',
          isDragging 
            ? 'border-primary bg-primary/5 scale-[1.02]' 
            : 'border-border hover:border-primary/50 hover:bg-secondary/50'
        )}
      >
        <input
          type="file"
          multiple
          onChange={handleFileSelect}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        
        <div className={cn(
          'mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-300',
          isDragging ? 'bg-primary text-primary-foreground scale-110' : 'bg-secondary text-muted-foreground'
        )}>
          <Upload className="h-5 w-5" />
        </div>
        
        <h3 className="font-display font-semibold text-foreground mb-1">
          {isDragging ? 'Drop files here' : 'Drag & drop files'}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          or click to browse from your computer
        </p>
        <p className="text-xs text-muted-foreground">
          Supports PDF, XLSX, PPTX, DOCX up to 50MB each
        </p>
      </div>

      {/* Uploading Files */}
      {uploadingFiles.length > 0 && (
        <div className="space-y-2 animate-fade-in">
          {uploadingFiles.map((uploadFile) => (
            <div
              key={uploadFile.id}
              className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border/50"
            >
              <div className="p-2 rounded-lg bg-secondary">
                <FileText className="h-4 w-4 text-muted-foreground" />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {uploadFile.file.name}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <Progress value={uploadFile.progress} className="h-1.5 flex-1" />
                  <span className="text-xs text-muted-foreground w-10">
                    {Math.round(uploadFile.progress)}%
                  </span>
                </div>
              </div>
              
              {uploadFile.status === 'uploading' ? (
                <Loader2 className="h-4 w-4 text-primary animate-spin" />
              ) : uploadFile.status === 'complete' ? (
                <CheckCircle className="h-4 w-4 text-status-success" />
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => removeFile(uploadFile.id)}
                >
                  <X className="h-3 w-3" />
                </Button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
