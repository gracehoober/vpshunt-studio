# VPShunt Studio - Frontend

React + TypeScript web application for monitoring VP shunt patient data.

## Tech Stack

- **React 19** with **TypeScript**
- **Vite** - Build tooling and dev server
- **Material UI (MUI)** - Component library and DataGrid
- **React Router v7** - Client-side routing
- **react-i18next** - Internationalization
- **react-hook-form** + **yup** - Form handling and validation
- **Vitest** + **Testing Library** - Testing framework

## Prerequisites

- Node.js 18+ and npm
- Git

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the `frontend/` directory:

```bash
VITE_API_BASE_URL=http://localhost:8000
```

### 3. Start development server

```bash
npm run dev
```

Visit http://localhost:5173 to see the application.

## Available Scripts

### Development

- `npm run dev` - Start Vite dev server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

### Testing

- `npm test` - Run tests once
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate coverage report

### Running Specific Tests

```bash
# Test a specific file
npm test -- Dashboard.test.tsx

# Test files matching a pattern
npm test -- -t "test name pattern"
```

## Project Structure

```
src/
├── components/
│   ├── dashboard/
│   │   ├── Display/          # Dashboard component and styled grid
│   │   ├── NewEntry/          # New entry modal wrapper
│   │   ├── NewEntryForm/      # Shunt entry form
│   │   ├── schemas/           # Yup validation schemas
│   │   ├── types.ts           # TypeScript type definitions
│   │   └── utils.ts           # DataGrid utilities
│   ├── home/                  # Home page component
│   ├── navBar/                # Navigation bar
│   └── imageLibrary/          # Imaging library component
├── api/
│   └── shunts.ts              # API client (currently mock data)
├── locales/en/
│   └── translation.json       # i18n strings
├── themes/
│   └── theme.ts               # MUI theme configuration
├── contexts/                  # React contexts (theme, etc.)
├── App.tsx                    # Root component with providers
├── AppRouter.tsx              # Route definitions
├── main.tsx                   # Application entry point
├── i18n.ts                    # i18next configuration
└── constant.ts                # Environment constants
```

## Key Features

- **Dashboard**: DataGrid displaying patient and shunt information
- **New Entry Form**: Add new shunt records with validation
- **Dark/Light Mode**: User preference-based theming
- **Internationalization**: Multi-language support via i18next
- **Responsive Design**: Mobile-friendly UI with Material UI

## Development Guidelines

### Adding New Text/Labels

Always add translation keys to `src/locales/en/translation.json`:

```json
{
  "dashboard": {
    "title": "Dashboard"
  }
}
```

### Testing

- Write tests alongside components (e.g., `Dashboard.test.tsx`)
- Use Testing Library best practices
- Target 80%+ coverage
- Run tests before committing

## Current Limitations

- API integration is mocked (awaiting backend implementation)
- No global state management (considering Context API, Redux, or Zustand)
- Forms don't persist data yet
- No user authentication

## Troubleshooting

### Port 5173 already in use

```bash
# Kill the process using the port
lsof -ti:5173 | xargs kill -9

# Or specify a different port
npm run dev -- --port 3000
```

### Module not found errors

```bash
rm -rf node_modules package-lock.json
npm install
```

### Test failures after dependency updates

```bash
npm run test:coverage
# Check which tests are failing and update as needed
```
