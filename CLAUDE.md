# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

VPShunt-Studio is a healthcare dashboard for monitoring ventriculoperitoneal (VP) shunts in patients with hydrocephalus. The application helps care teams track shunt status, patient data, and replacement needs through a modern, responsive web interface.

## Development Commands

### Core Commands
- `npm run dev` - Start development server (Vite, runs on http://localhost:5173)
- `npm run build` - Build for production (runs TypeScript compiler and Vite build)
- `npm run preview` - Preview production build locally
- `npm run lint` - Lint codebase with ESLint

### Testing
- `npm test` - Run tests once with Vitest
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report

### Running Single Tests
Use Vitest's filtering:
```bash
npm test -- Dashboard.test.tsx
npm test -- -t "test name pattern"
```

## Architecture

### Tech Stack
- **React 19** with **TypeScript** for UI
- **Vite** for build tooling and dev server
- **Material UI (MUI)** for component library including DataGrid
- **React Router v7** for routing
- **react-i18next** for internationalization
- **react-hook-form** with **yup** for form validation
- **Vitest** with **Testing Library** for testing

### Application Structure

#### Entry Point Flow
1. `src/main.tsx` - Application entry, renders `<App />` in StrictMode
2. `src/App.tsx` - Wraps app in MUI ThemeProvider and renders NavBar + AppRouter
3. `src/AppRouter.tsx` - Defines routes using react-router's BrowserRouter:
   - `/` → Home
   - `/dashboard` → Dashboard (main patient data grid)
   - `/imaging-library` → ImageLibrary
   - `/*` → Home (catch-all)

#### Key Directory Organization
```
src/
  components/
    dashboard/
      Display/       - Dashboard.tsx, StyledDashboardGrid.tsx
      NewEntry/      - NewEntry.tsx (modal wrapper)
      NewEntryForm/  - NewShuntEntryForm.tsx (form component)
      schemas/       - NewShuntEntrySchema.tsx (yup validation)
      types.ts       - User, Shunt, DashboardData, Rows types
      utils.ts       - Column generation utilities for DataGrid
    home/            - Home.tsx
    navBar/          - NavBar.tsx
    imageLibrary/    - ImageLibrary.tsx
  api/
    shunts.ts        - Data fetching (currently mock data)
  locales/en/
    translation.json - i18n strings
  themes/
    theme.ts         - MUI theme configuration
  i18n.ts            - i18next initialization
  constant.ts        - API_BASE_URL from env (VITE_API_BASE_URL)
```

### Data Model

Core types defined in `src/components/dashboard/types.ts`:

- **User**: Patient information (firstName, lastName, id, DOB)
- **Shunt**: Shunt device data (model, serialId, placementDate, removalDate, isActive)
- **DashboardData**: Combines User with activeShunt and shuntHistory
- **Rows**: Flattened User & Shunt data for MUI DataGrid

### Data Flow

1. **Dashboard** component (`src/components/dashboard/Display/Dashboard.tsx`):
   - Fetches data via `fetchUserShuntData()` on mount
   - Currently uses mock data from `src/api/shunts.ts`
   - Real API implementation commented out, expects backend at `API_BASE_URL`
   - Transforms DashboardData into flat Rows structure for DataGrid
   - Uses `createColumns()` utility to dynamically generate column definitions

2. **Form Submission** (`src/components/dashboard/NewEntryForm/NewShuntEntryForm.tsx`):
   - Uses react-hook-form with yup resolver
   - Validates against NewShuntEntrySchema
   - Currently only logs data (no API integration yet)

### Internationalization

All user-facing strings should be in `src/locales/en/translation.json` and accessed via `useTranslation()` hook from react-i18next. Usage: `const { t } = useTranslation(); t("key.path")`.

### Testing Setup

- Test files colocated with components (e.g., `Dashboard.test.tsx`)
- Vitest config in `vite.config.ts` with jsdom environment
- Setup file: `src/setupTests.js`
- Special inline dependency handling for `@mui/x-data-grid`

## Current State & Known Limitations

- API layer uses mock data; real API implementation is commented out
- No authentication or state management implemented yet
- Forms submit locally without persisting data
- Testing coverage is incomplete (actively being added)

## Development Notes

- When adding new text, add translation keys to `src/locales/en/translation.json` first
- DataGrid columns are generated dynamically from row data structure
- MUI theme customizations should go in `src/themes/theme.ts`
- Environment variables use Vite's `import.meta.env` prefix (e.g., `VITE_API_BASE_URL`)
