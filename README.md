# ResearchReasoner 🧠

> **AI-powered research discovery that builds knowledge graphs from scientific literature**


[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-blue)](https://www.typescriptlang.org/)

ResearchReasoner transforms scattered research papers into interactive knowledge graphs, helping researchers discover hidden connections and develop hypotheses through intelligent exploration of scientific literature. Built for the Perplexity Hackathon.

## 🎯 What ResearchReasoner Does

### The Problem
Modern researchers face an impossible task: navigating millions of research papers to find relevant work, understand connections between studies, and develop novel hypotheses. Traditional literature reviews are time-consuming and often miss crucial interdisciplinary connections.

### The Solution
ResearchReasoner automatically:
1. **Discovers** comprehensive research using Perplexity's Sonar API
2. **Analyzes** relationships between papers through citations, authors, content, and timing
3. **Visualizes** research networks as interactive knowledge graphs
4. **Enables** natural language querying of your research domain
5. **Facilitates** systematic hypothesis development through AI reasoning

## 🚀 Key Features

### 🔍 **Deep Literature Discovery**
- Powered by Perplexity's Sonar API for comprehensive academic search
- Searches across arXiv and Semantic Scholar databases
- Automatically downloads and processes PDFs when available
- Fallback text generation for inaccessible papers

### 🌐 **Interactive Knowledge Graphs**
- Real-time visualization using force-directed graphs
- Clickable nodes reveal full paper content
- Color-coded by download status and content availability
- Relationship lines show connection types and strengths

### 💬 **AI-Powered Chat Interface**
- Natural language research questions powered by Sonar
- Multi-step investigation mode for complex queries
- Conversation memory across sessions
- Contextual follow-up suggestions

### 📊 **Advanced Analytics**
- Research trend analysis over time
- Author collaboration networks
- Citation impact analysis
- Topic synthesis across domains

### 🔧 **Smart Relationship Detection**
- **Citation-based**: Direct paper references
- **Content-based**: Semantic similarity analysis
- **Author-based**: Shared researchers and collaborations
- **Temporal**: Papers published in similar timeframes
- **Venue-based**: Conference and journal clustering

## 🛠️ Tech Stack

### Frontend
```typescript
// React with TypeScript for type safety
React 18 + TypeScript
Tailwind CSS for styling
react-force-graph-2d for interactive visualizations
Lucide React for icons
```

### Backend
```javascript
// Node.js server with Neo4j graph database
Node.js + Express server
Neo4j Desktop for graph database
Perplexity Sonar API for AI reasoning and research discovery
Custom vector embeddings (512-dimensional)
```

### APIs & Integrations
- **Perplexity Sonar**: Primary research discovery and AI reasoning engine
- **Semantic Scholar API**: Academic paper metadata (fallback)
- **arXiv API**: Preprint repository access (fallback)

### Database Schema
```cypher
// Neo4j graph structure
(:Paper)-[:CITES]->(:Paper)
(:Author)-[:AUTHORED]->(:Paper)
(:Paper)-[:BELONGS_TO]->(:Topic)
(:Paper)-[:RELATED_TO {type: 'content|temporal|venue'}]->(:Paper)
```

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js** 18.0.0 or higher
- **Neo4j Desktop** (download from neo4j.com)
- **API Keys**:
  - Perplexity API key (required for Sonar)
- **Git** for version control

## ⚡ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Shubham00-3/Research-Reasoner.git
cd Research-Reasoner
```

### 2. Neo4j Desktop Setup
1. Download and install [Neo4j Desktop](https://neo4j.com/download/)
2. Create a new project called "ResearchReasoner"
3. Add a local DBMS with:
   - **Name**: research-reasoner-db
   - **Password**: Choose a strong password
   - **Version**: 4.4 or later
4. Start the database
5. Note the connection details (usually `bolt://localhost:7687`)

### 3. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit environment variables
nano .env
```

### 4. Environment Configuration
Create a `.env` file in the backend directory:

```env
# Server Configuration
PORT=3002
NODE_ENV=development

# Neo4j Desktop Database
NEO4J_URI=bolt://localhost:7687
NEO4J_USERNAME=neo4j
NEO4J_PASSWORD=your_neo4j_password

# Perplexity Sonar API
PERPLEXITY_API_KEY=your_perplexity_api_key

# Optional: API Rate Limiting
SEMANTIC_SCHOLAR_DELAY=1000
ARXIV_DELAY=800
```

### 5. Frontend Setup
```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install

# Create environment file (if needed)
echo "REACT_APP_API_URL=http://localhost:3002" > .env.local
```

### 6. Start the Application
```bash
# Terminal 1: Start backend
cd backend
npm run dev

# Terminal 2: Start frontend
cd frontend
npm start
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3002
- **Neo4j Browser**: http://localhost:7474

## 🎮 Usage Guide

### Basic Workflow

1. **Search for Research**
   ```
   Enter a research topic (e.g., "machine learning", "quantum computing")
   → Sonar API searches academic databases
   → Papers are downloaded and analyzed
   → Knowledge graph is built automatically
   ```

2. **Explore the Knowledge Graph**
   ```
   → Click nodes to view paper details
   → See relationship connections
   → Filter by paper type or year
   → Zoom and pan for navigation
   ```

3. **Chat with Your Research**
   ```
   Ask: "What are the main approaches to transformer architectures?"
   → Sonar AI analyzes your paper collection
   → Provides contextual answers with citations
   → Suggests follow-up questions
   ```

### Advanced Features

#### Multi-Step Investigation Mode
For complex research questions:
```
Question: "How has attention mechanism research evolved from 2017 to 2024?"
→ Sonar AI breaks into systematic steps:
  1. Find foundational attention papers (2017-2018)
  2. Identify key innovations (2019-2021)
  3. Analyze recent developments (2022-2024)
  4. Synthesize evolution patterns
```

#### Research Analytics
Access comprehensive analytics:
- Paper distribution by year
- Top authors and collaborations
- Citation impact analysis
- Research trend identification

## 🔧 API Documentation

### Core Endpoints

#### Search and Discovery (Powered by Sonar)
```javascript
// Search for papers using Sonar
POST /api/search-papers
{
  "query": "machine learning"
}

// Get papers by topic
GET /api/papers/:topic

// Semantic search using Sonar
POST /api/semantic-search
{
  "query": "neural networks",
  "limit": 10
}
```

#### Knowledge Graph
```javascript
// Build knowledge graph
POST /api/build-knowledge-graph
{
  "papers": [...],
  "topic": "AI research"
}

// Get graph relationships
GET /api/graph-relationships/:topic
```

#### AI Chat Interface (Powered by Sonar)
```javascript
// Simple chat with Sonar
POST /api/chat
{
  "question": "What is attention mechanism?",
  "mode": "simple"
}

// Advanced investigation with Sonar
POST /api/chat
{
  "question": "Compare different transformer architectures",
  "mode": "investigation"
}
```

#### Paper Content
```javascript
// Get full paper content
GET /api/paper-content/:paperId

// Download paper PDF
GET /api/download/paper/:paperId

// Batch content retrieval
POST /api/batch-paper-content
{
  "paperIds": ["paper1", "paper2", ...]
}
```

### Response Formats

#### Paper Object
```typescript
interface Paper {
  id: string;
  title: string;
  authors: string[];
  abstract: string;
  year: number;
  citationCount: number;
  venue: string;
  url?: string;
  doi?: string;
  hasLocalFile: boolean;
  hasFullContent: boolean;
  contentType?: 'application/pdf' | 'text/plain';
}
```

#### Chat Response (from Sonar)
```typescript
interface ChatResponse {
  answer: string;
  sources: Paper[];
  confidence: number;
  suggestedQuestions: string[];
  reasoning?: string;
}
```

## 🔍 Architecture Deep Dive

### System Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   Neo4j         │
│   React + TS    │◄──►│   Node.js       │◄──►│   Desktop       │
│   Force Graph   │    │   Express       │    │   Graph DB      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │                       ▼                       │
         │              ┌─────────────────┐              │
         │              │ Perplexity Sonar│              │
         └──────────────┤ • AI Reasoning  │──────────────┘
                        │ • Research      │
                        │   Discovery     │
                        │ • Multi-step    │
                        │   Analysis      │
                        └─────────────────┘
```

### How Perplexity Sonar is Used

1. **Research Discovery Engine**
   - User enters research topic
   - Sonar searches comprehensive academic databases
   - Returns structured paper metadata and abstracts
   - Provides real-time, up-to-date research findings

2. **AI Chat Interface**
   - User asks research questions
   - Sonar processes queries with context from knowledge graph
   - Generates comprehensive answers with citations
   - Suggests relevant follow-up questions

3. **Multi-Step Investigation**
   - Complex questions broken into systematic steps
   - Each step uses Sonar for targeted research
   - Results synthesized into comprehensive analysis
   - Conclusions and research gaps identified

4. **Relationship Analysis**
   - Sonar helps identify semantic relationships between papers
   - Content similarity analysis for graph connections
   - Research trend identification across time periods

### Data Flow
1. **Research Discovery**: User query → Perplexity Sonar → Structured paper data
2. **Content Processing**: Papers analyzed → Relationships identified → Embeddings generated
3. **Graph Storage**: Papers + Relationships → Neo4j Desktop database
4. **Interactive Query**: User questions → Sonar AI → Graph traversal → Comprehensive responses

### Key Components

#### SonarRAGService
```typescript
class SonarRAGService {
  async discoverResearch(query: string): Promise<Paper[]>
  async askQuestion(question: string, context: Paper[]): Promise<RAGResponse>
  async investigateComplexQuery(question: string): Promise<Investigation>
  async compareTopics(topic1: string, topic2: string): Promise<Comparison>
}
```

#### Neo4jService
```typescript
class Neo4jService {
  async storeResearchGraph(papers: Paper[], relationships: Relationship[]): Promise<void>
  async semanticSearch(query: string, limit: number): Promise<Paper[]>
  async findRelatedPapers(paperId: string): Promise<Paper[]>
  async getAuthorNetwork(authorName: string): Promise<AuthorGraph>
}
```

## 🔧 Troubleshooting

### Common Issues

#### Neo4j Desktop Connection
```bash
# Check if Neo4j is running
# In Neo4j Desktop, ensure your database is started
# Verify connection details in .env file

# Test connection
curl http://localhost:7474
```

#### Perplexity API Issues
```bash
# Verify API key in .env file
PERPLEXITY_API_KEY=pplx-xxxxx

# Check API quota and limits
# Monitor response times and adjust rate limiting
```

#### Frontend Build Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node.js version
node --version  # Should be 18+
```

### Performance Optimization

#### For Large Datasets
- Enable database indexing on paper titles and authors
- Use connection pooling for Neo4j
- Implement pagination for large result sets
- Cache frequent Sonar API responses

#### Memory Management
```javascript
// Optimize Neo4j queries
MATCH (p:Paper) 
WHERE p.title CONTAINS $query 
RETURN p 
LIMIT 100
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Add tests for new features
- Update documentation for API changes
- Use conventional commit messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Perplexity Team** for the powerful Sonar API that makes this project possible
- **Neo4j Community** for the excellent graph database platform
- **Academic Research Community** for open access to research papers
- **React and TypeScript Communities** for the robust development frameworks

## 📞 Support

- Create an [Issue](https://github.com/Shubham00-3/Research-Reasoner/issues) for bug reports
- Join our [Discussions](https://github.com/Shubham00-3/Research-Reasoner/discussions) for questions
- Follow the project for updates

---

**Built with ❤️ for the research community using Perplexity's Sonar API**
