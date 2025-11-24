# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

VPShunt-Studio is a healthcare dashboard for monitoring ventriculoperitoneal (VP) shunts in patients with hydrocephalus. The application helps care teams track shunt status, patient data, and replacement needs through a modern, responsive web interface.

**This is a monorepo containing:**
- `frontend/` - React + TypeScript web application
- `api/` - FastAPI Python backend

## Development Commands

### Frontend Commands (run from `frontend/` directory)
- `npm run dev` - Start development server (Vite, runs on http://localhost:5173)
- `npm run build` - Build for production (runs TypeScript compiler and Vite build)
- `npm run preview` - Preview production build locally
- `npm run lint` - Lint codebase with ESLint

### Frontend Testing
- `npm test` - Run tests once with Vitest
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report

### Running Single Tests
Use Vitest's filtering:
```bash
npm test -- Dashboard.test.tsx
npm test -- -t "test name pattern"
```

### API Commands (run from `api/` directory)
- `uvicorn app.main:app --reload` - Start FastAPI dev server (http://localhost:8000)
- `pytest` - Run API tests
- `ruff check .` - Lint Python code
- `ruff format .` - Format Python code

## Architecture

### Tech Stack

#### Frontend
- **React 19** with **TypeScript** for UI
- **Vite** for build tooling and dev server
- **Material UI (MUI)** for component library including DataGrid
- **React Router v7** for routing
- **react-i18next** for internationalization
- **react-hook-form** with **yup** for form validation
- **Vitest** with **Testing Library** for testing

#### Backend
- **FastAPI** for Python web framework
- **Pydantic** for data validation and settings
- **Uvicorn** as ASGI server
- **pytest** for testing (TODO: implement tests)

### Internationalization

All user-facing strings should be in `frontend/src/locales/en/translation.json` and accessed via `useTranslation()` hook from react-i18next. Usage: `const { t } = useTranslation(); t("key.path")`.

### Testing Setup

#### Frontend Testing
- Test files colocated with components (e.g., `Dashboard.test.tsx`)
- Vitest config in `frontend/vite.config.ts` with jsdom environment
- Setup file: `frontend/src/setupTests.js`
- Special inline dependency handling for `@mui/x-data-grid`

#### API Testing (TODO)
- Tests will go in `api/tests/`
- Use pytest with FastAPI's TestClient
- Target 80%+ test coverage

## Current State & Known Limitations

### Frontend
- Uses mock data; real API integration is commented out in `frontend/src/api/shunts.ts`
- No state management implemented yet (considering React Context API, Redux, Zustand, or MobX)
- Forms submit locally without persisting data
- Testing coverage is 80% (actively maintained)

### API
- FastAPI structure is set up but schema is not yet defined
- All endpoints are placeholders
- No database connection configured
- No authentication implemented
- No tests written yet

## Development Notes

### Frontend
- When adding new text, add translation keys to `frontend/src/locales/en/translation.json` first
- DataGrid columns are generated dynamically from row data structure
- MUI theme customizations should go in `frontend/src/themes/theme.ts`
- Environment variables use Vite's `import.meta.env` prefix (e.g., `VITE_API_BASE_URL`)

### API
- Define data models in `api/app/models/shunt.py` to match frontend TypeScript types
- Use Pydantic for request/response validation
- Environment variables loaded from `.env` via `api/app/config.py`
- API documentation automatically generated at `/docs` (Swagger) and `/redoc`
- When working on the API, always run from the `api/` directory
