import { useState } from 'react';
import { Document } from '@/types/deal';
import { cn } from '@/lib/utils';
import { 
  Folder, 
  FolderOpen, 
  ChevronRight,
  FileText,
  FileSpreadsheet,
  Presentation
} from 'lucide-react';

interface FolderTreeProps {
  documents: Document[];
  selectedFolder: string | null;
  onSelectFolder: (folder: string | null) => void;
}

interface FolderNode {
  name: string;
  path: string;
  children: FolderNode[];
  documentCount: number;
}

const fileIcons: Record<string, typeof FileText> = {
  pdf: FileText,
  xlsx: FileSpreadsheet,
  xls: FileSpreadsheet,
  pptx: Presentation,
  ppt: Presentation,
};

function buildFolderTree(documents: Document[]): FolderNode[] {
  const folders = new Map<string, { count: number; children: Set<string> }>();
  
  documents.forEach((doc) => {
    const path = doc.folderPath;
    if (!folders.has(path)) {
      folders.set(path, { count: 0, children: new Set() });
    }
    folders.get(path)!.count++;
  });

  return Array.from(folders.entries()).map(([path, data]) => ({
    name: path.split('/').filter(Boolean).pop() || path,
    path,
    children: [],
    documentCount: data.count,
  }));
}

interface FolderItemProps {
  folder: FolderNode;
  isSelected: boolean;
  isExpanded: boolean;
  onSelect: () => void;
  onToggle: () => void;
  depth: number;
}

function FolderItem({ folder, isSelected, isExpanded, onSelect, onToggle, depth }: FolderItemProps) {
  const FolderIcon = isExpanded ? FolderOpen : Folder;

  return (
    <div
      className={cn(
        'flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-pointer transition-colors',
        isSelected 
          ? 'bg-primary/10 text-primary' 
          : 'hover:bg-secondary text-foreground'
      )}
      style={{ paddingLeft: `${depth * 12 + 8}px` }}
      onClick={onSelect}
    >
      {folder.children.length > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          className="p-0.5 hover:bg-secondary rounded"
        >
          <ChevronRight 
            className={cn(
              'h-3 w-3 transition-transform',
              isExpanded && 'rotate-90'
            )} 
          />
        </button>
      )}
      <FolderIcon className={cn('h-4 w-4', isSelected ? 'text-primary' : 'text-muted-foreground')} />
      <span className="text-sm flex-1">{folder.name}</span>
      <span className="text-xs text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">
        {folder.documentCount}
      </span>
    </div>
  );
}

export function FolderTree({ documents, selectedFolder, onSelectFolder }: FolderTreeProps) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set());
  const folders = buildFolderTree(documents);

  const toggleFolder = (path: string) => {
    setExpandedFolders((prev) => {
      const next = new Set(prev);
      if (next.has(path)) {
        next.delete(path);
      } else {
        next.add(path);
      }
      return next;
    });
  };

  return (
    <div className="space-y-1">
      {/* All Documents */}
      <div
        className={cn(
          'flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-pointer transition-colors',
          selectedFolder === null 
            ? 'bg-primary/10 text-primary' 
            : 'hover:bg-secondary text-foreground'
        )}
        onClick={() => onSelectFolder(null)}
      >
        <Folder className={cn('h-4 w-4', selectedFolder === null ? 'text-primary' : 'text-muted-foreground')} />
        <span className="text-sm flex-1">All Documents</span>
        <span className="text-xs text-muted-foreground bg-secondary px-1.5 py-0.5 rounded">
          {documents.length}
        </span>
      </div>

      {/* Folder List */}
      {folders.map((folder) => (
        <FolderItem
          key={folder.path}
          folder={folder}
          isSelected={selectedFolder === folder.path}
          isExpanded={expandedFolders.has(folder.path)}
          onSelect={() => onSelectFolder(folder.path)}
          onToggle={() => toggleFolder(folder.path)}
          depth={0}
        />
      ))}
    </div>
  );
}
