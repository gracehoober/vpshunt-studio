# VP Shunt Studio + MCP Integration - Project Instructions

## Project Overview

### Problem Statement
This project aims to learn and explore MCP (Model Context Protocol) servers and backend infrastructure by building a complete backend system for the VP Shunt Studio frontend application. The project combines backend development, MCP architecture, SQL database management, and meaningful healthcare data visualization.

### Learning Objectives
By completing this project, you will:
- Understand MCP server and client functionality
- Learn how MCP integrates with backend systems
- Master FastAPI backend development
- Practice writing raw SQL for database operations
- Develop skills in meaningful healthcare data visualization
- Implement statistical modeling for shunt life expectancy prediction
- Build unit testing practices into your development workflow

---

## Technology Stack

### Frontend
- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **UI Library**: Material UI
- **Code Style**: ESLint

### Backend
- **API Framework**: FastAPI (Python)
- **Database**: SQLite with raw SQL queries (no ORM)
- **MCP**: Python MCP Server & Client (STDIO communication)
- **LLM**: Claude API (Anthropic)
- **Code Style**: Black formatter + isort

### Future Enhancements
- **Cloud Storage**: AWS S3 (Phase 6)

---

## Architecture Overview

```
┌─────────────────────┐
│   React Frontend    │
│  (VP Shunt Studio)  │
└──────────┬──────────┘
           │ HTTP
           ↓
┌─────────────────────┐
│    FastAPI Server   │
│   (CRUD + Analysis) │
└──────┬──────────────┘
       │              ↓
       │         ┌────────────┐
       │         │   SQLite   │
       │         │  Database  │
       │         └────────────┘
       │ calls
       ↓
┌─────────────────────┐
│    MCP Client       │
│ (Python - Analysis  │
│   Orchestration)    │
└──────────┬──────────┘
           │ STDIO
           ↓
┌─────────────────────┐
│    MCP Server       │
│  (Analysis Tools)   │
└─────────────────────┘
           │
           ↓
      ┌─────────┐
      │ Claude  │
      │   API   │
      └─────────┘
```

### Component Responsibilities

**React Frontend (VP Shunt Studio)**
- Display patient dashboards
- Visualize time-series data (ICP readings, valve pressures, symptoms)
- Show shunt life expectancy predictions
- Trigger analysis workflows
- Handle user interactions

**FastAPI Server**
- CRUD operations for patient data
- Serve time-series data to frontend
- Trigger MCP client for analysis
- Calculate baseline statistics
- Manage S3 image references (Phase 6)

**SQLite Database**
- Store patient demographics
- Store shunt details and revision history
- Store time-series data (ICP, valve pressure, symptoms)
- Store analysis results history

**MCP Client**
- Orchestrate LLM-powered analysis
- Control sampling parameters
- Make API calls to Claude
- Coordinate multiple MCP tool calls
- Return comprehensive analysis results

**MCP Server**
- Provide analysis tools via STDIO
- Patient history summarization
- Trend analysis for time-series data
- Anomaly detection
- Shunt life expectancy prediction (statistical model)

---

## Development Prerequisites

### Required Knowledge
- Python basics (functions, classes, async/await)
- React and TypeScript fundamentals
- SQL query writing
- Git and version control
- Basic understanding of REST APIs

### Required Software
- Python 3.10 or higher
- Node.js 18 or higher
- Git
- Code editor (VS Code recommended)
- SQLite (usually comes with Python)

### Required Accounts
- GitHub account (for repository hosting)
- Anthropic API account (Claude API key)

### Development Tools Setup
- Black formatter configured for Python
- isort configured for Python imports
- ESLint configured for React/TypeScript

---

## Project Phases & Steps

Refer to `VP_SHUNT_STUDIO_PROJECT_PLAN.md` for detailed step-by-step breakdown.

### Phase 1: Backend Foundation & Data Layer (Steps 1-5)
Replace mocked frontend data with real database and API.

### Phase 2: MCP Server Development (Steps 6-10)
Create MCP server with intelligent analysis tools.

### Phase 3: MCP Client Development (Steps 11-14)
Build client that orchestrates LLM analysis.

### Phase 4: API Integration Layer (Steps 15-16)
Connect MCP client to FastAPI backend.

### Phase 5: Frontend Integration (Steps 17-19)
Add analysis features to React UI.

### Phase 6: Future Enhancements (Steps 20-21)
S3 image integration, documentation, and testing.

---

## Data Visualization Goals

### Meaningful Data Display
The frontend should provide clear, actionable visualizations:

1. **Time-Series Charts**
   - ICP readings over time
   - Valve pressure changes
   - Symptom severity trends
   - Visual highlighting of anomalies

2. **Patient Dashboard**
   - Demographic information
   - Shunt details and revision history
   - Current status indicators

3. **Life Expectancy Prediction Display** (Key Feature)
   - Visual representation of predicted shunt lifespan
   - Confidence intervals
   - Contributing risk factors displayed
   - Comparison to population averages

### Shunt Life Expectancy Model

**Goal**: Predict the remaining functional life of a VP shunt based on multiple factors.

**Factors to Consider**:
- Patient age
- Shunt age (time since placement/last revision)
- Historical clog/revision count
- Blood lab test results (relevant markers)
- Symptom frequency and severity
- ICP reading trends
- Valve pressure history

**Implementation Approach**:
- Statistical model calculated in FastAPI backend
- MCP server performs trend analysis on contributing factors
- MCP client orchestrates comprehensive analysis
- Results displayed with confidence levels in frontend

**Note**: For this learning project, we will create a reasonable mock statistical model based on clinical factors. Real-world implementation would require validated medical research and clinical data.

---

## Development Workflow

### Git Workflow
1. Create feature branches for each major step
2. Commit frequently with clear, descriptive messages
3. Push to GitHub regularly
4. Merge to main when phase is complete and tested

### Suggested Commit Frequency
- After completing each substep within a phase
- When unit tests are written and passing
- Before making major architectural changes
- At natural stopping points in your work

### Testing Approach
- Write unit tests for each new function/method
- Run tests before committing
- Ensure all tests pass before moving to next step
- Focus on testing business logic and data transformations

### When to Seek Help
Come back for discussion when you:
- Get stuck on implementation details
- Want code review or feedback
- Need clarification on requirements
- Want to discuss architectural decisions
- Have completed a phase and want to review before proceeding

---

## Collaboration Model

### Your Responsibilities
- Implement each step independently
- Write code following the tech stack guidelines
- Create unit tests for your implementations
- Push code to GitHub
- Document your learnings as you go

### Available Support
- Clarification on requirements or concepts
- Code review and feedback when requested
- Help debugging when stuck
- Assistance with documentation
- Discussion of architectural decisions

### Documentation Process
- We will create README files together for each major component
- You document what you learned after completing each phase
- Key concepts will be explained in plain language
- Code comments should explain "why," not just "what"

---

## Clinical Context & References

### VP Shunt Background
A ventriculoperitoneal (VP) shunt is a medical device used to treat hydrocephalus by draining excess cerebrospinal fluid (CSF) from the brain's ventricles to the abdominal cavity.

### Key Clinical Concepts

**Intracranial Pressure (ICP)**
- Normal range: 7-15 mmHg in adults
- Elevated ICP indicates potential shunt malfunction
- Monitoring frequency varies by patient condition

**Shunt Components**
- Ventricular catheter (in brain)
- Valve (regulates flow and pressure)
- Distal catheter (drains to abdomen)

**Common Complications**
- Obstruction/clogging (most common)
- Infection
- Over-drainage or under-drainage
- Mechanical failure

**Revision Indicators**
- Persistent headaches
- Vision changes
- Nausea/vomiting
- Changes in consciousness
- Abnormal ICP readings

### Clinical Resources Used
*Note: As we reference specific clinical papers or guidelines for the statistical model, we will document them here.*

---

## File Structure

```
vp-shunt-studio/
├── frontend/                  # React application
│   ├── src/
│   │   ├── components/
│   │   ├── services/         # API client
│   │   ├── types/
│   │   └── utils/
│   ├── package.json
│   └── README.md
│
├── backend/                   # FastAPI application
│   ├── app/
│   │   ├── api/              # Route handlers
│   │   ├── models/           # Data models
│   │   ├── services/         # Business logic
│   │   ├── database/         # DB connection & queries
│   │   └── tests/            # Unit tests
│   ├── requirements.txt
│   └── README.md
│
├── mcp-server/               # MCP Server (analysis tools)
│   ├── src/
│   │   ├── tools/            # MCP tool implementations
│   │   └── server.py
│   ├── tests/
│   ├── requirements.txt
│   └── README.md
│
├── mcp-client/               # MCP Client (orchestration)
│   ├── src/
│   │   ├── client.py
│   │   └── orchestrator.py
│   ├── tests/
│   ├── requirements.txt
│   └── README.md
│
├── database/
│   ├── schema.sql            # Database schema
│   ├── seed_data.sql         # Mock data
│   └── migrations/           # Schema versions
│
├── docs/
│   ├── architecture.md
│   ├── api_documentation.md
│   └── mcp_tools.md
│
└── PROJECT_INSTRUCTIONS.md   # This file
└── VP_SHUNT_STUDIO_PROJECT_PLAN.md
```

---

## Code Style Guidelines

### Python (Backend, MCP Server, MCP Client)
- Use **Black** for formatting (line length: 88)
- Use **isort** for import sorting
- Follow PEP 8 conventions
- Use type hints for function signatures
- Write docstrings for classes and functions

### React/TypeScript (Frontend)
- Use **ESLint** for linting
- Use functional components with hooks
- Prefer explicit types over `any`
- Use meaningful variable names
- Keep components focused and modular

### SQL
- Use uppercase for SQL keywords (SELECT, FROM, WHERE)
- Use lowercase for table and column names
- Indent subqueries
- Use meaningful table/column names
- Comment complex queries

---

## Testing Strategy

### Unit Testing Focus
For this project, we'll focus on unit tests to build testing fundamentals:

**Backend (FastAPI)**
- Test SQL query functions
- Test API endpoint handlers
- Test data validation logic
- Test statistical calculations

**MCP Server**
- Test individual tool handlers
- Test data analysis algorithms
- Test anomaly detection logic

**MCP Client**
- Test orchestration logic
- Test error handling
- Mock LLM responses for testing

**Frontend**
- Test utility functions
- Test data transformation logic
- Component testing as time permits

### Testing Tools
- **Python**: pytest
- **React**: Jest + React Testing Library

### Test Coverage Goals
- Aim for >80% coverage on business logic
- Focus on critical paths first
- Don't stress about 100% coverage



