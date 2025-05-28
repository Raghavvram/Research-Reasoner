export interface RealPaper {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  year: number;
  citationCount: number;
  venue: string;
  doi?: string;
  url?: string;
  references?: string[];
  citations?: string[];
  keywords?: string[];
  localFilePath?: string;
  hasLocalFile?: boolean;
  fileSize?: number;
  downloadedAt?: string;
  storedInDatabase?: boolean;
}

export interface RAGContext {
  papers: RealPaper[];
  query: string;
  topic?: string; // ✅ Added this property
  searchMethod: string;
  confidence: number;
  totalSources: number;
}
interface RAGResponse {
  answer: string;
  sources: any[];
  context: {
    relevantPapers: any[];
    searchQuery: string;
    searchType: string;
    totalPapersFound: number;
    confidence: number;
    topic?: string; // ✅ Add this property
  };
  suggestedQuestions: string[];
  reasoning: string;
}
export interface InvestigationStep {
  stepNumber: number;
  question: string;
  findings: string;
  sources: RealPaper[];
  confidence: number;
}
interface MultiStepResult {
  originalQuestion: string;
  steps: any[];
  synthesis: string;
  conclusions: string[];
  limitationsAndGaps: string[];
  suggestedResearch: string[];
  sources: any[];
  totalConfidence: number;
  // ✅ Add compatibility properties for union type handling
  answer?: string;
  suggestedQuestions?: string[];
  confidence?: number;
  investigation?: {
    question: string;
    steps: any[];
    synthesis: string;
    gaps: string[];
    futureWork: string[];
  };
}

export interface InvestigationStep {
  stepNumber: number;
  question: string;
  findings: string;
  sources: RealPaper[];
  confidence: number;
}

export interface ResearchStats {
  totalPapers: number;
  uniqueAuthors: number;
  recentPapers: number;
  topVenues: any[];
  connections?: number; // ✅ Added missing connections property
}
export interface BulkOperationResult {
  success: boolean;
  message: string;
  filesProcessedAttempted?: number; // ✅ Added missing properties
  successfullyStoredInDB?: number;
  papersAttempted?: number;
  filesWritten?: number;
  details?: any;
}

// ✅ FIX 6: Update function signatures interface
export interface Neo4jServiceInterface {
  getPapersByTopic(topic: string, limit?: number): Promise<RealPaper[]>; // ✅ Made limit optional
  storeResearchGraph(papers: RealPaper[], relationships: any[], topic: string, paperFiles?: Map<string, Buffer | string>): Promise<void>; // ✅ Made paperFiles optional
}

// Export types for use in other files
export type SearchMode = 'simple' | 'advanced' | 'investigation';
export type ContentType = 'application/pdf' | 'text/plain';

// Database operation result types
export interface DatabaseOperationResult extends BulkOperationResult {
  timestamp: string;
  operationType: 'store' | 'export' | 'update';
}

// Chat and conversation types
export interface ConversationMessage {
  id: string;
  content: string;
  timestamp: string;
  type: 'user' | 'assistant';
  sources?: RealPaper[];
}

export interface Conversation {
  id: string;
  topic: string;
  messages: ConversationMessage[];
  createdAt: string;
  lastUpdated: string;
}

export interface PaperData {
  paperId: string;
  type: string;
  content: string | Buffer | null;
  hasFullContent: boolean;
  contentType: string | null;
  originalSize: number;
  title: string;
  source: string;
  downloadUrl?: string;
  message?: string;
  filePath?: string;
  fileSize?: number;
} 
export interface KeyFinding {
  title: string;
  description: string;
  impact: string;
}

export interface Insight {
  category: string;
  content: string;
  sources: number;
}
export interface ResultsData {
  papersFound: number;
  authorsAnalyzed: number;
  connectionsDiscovered: number;
  summary: string;
  keyFindings: KeyFinding[];
  insights: Insight[];
  papers?: RealPaper[];
}