# VPShunt-Studio

VPShunt-Studio is a lightweight dashboard for healthcare providers to monitor the status of patients' ventriculoperitoneal (VP) shunts.

Shunt failure is a common complication for patients with hydrocephalus. VPShunt-Studio helps surface critical patient data for care teams—bringing clarity and anticipation into an often reactive clinical process.
Built with modern web technologies, it provides a user-friendly interface for uploading data and visualizing key indicators related to shunt performance and replacement needs.

## Project Structure

This is a monorepo containing both frontend and backend:

```
vpshunt-studio/
├── frontend/         # React + TypeScript web application
└── api/              # FastAPI Python backend
```

## Tech Stack

### Frontend
- React 19 with TypeScript
- Vite for build tooling
- Material UI (MUI) for components
- React Router for navigation
- react-i18next for internationalization

### Backend
- FastAPI (Python 3.11+)
- Pydantic for data validation
- Uvicorn ASGI server

## Features

- Display a dashboard with current shunt status
- Dark and light mode per user preference
- Simple, responsive UI for clinical workflows
- 80% test coverage on frontend application

## Quick Start

### Frontend Setup

```bash
git clone https://github.com/gracehoober/vpshunt-studio.git
cd vpshunt-studio/frontend
npm install
npm run dev
```

Visit http://localhost:5173 to see the app running.

### API Setup

```bash
cd api
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload
```

API will be available at http://localhost:8000
API docs at http://localhost:8000/docs

See individual README files in `frontend/` and `api/` directories for detailed setup instructions.

## Development Roadmap

### In Progress
- Define API data schema and models
- Implement database layer
- Connect frontend to API endpoints

### Planned Features
- Add client state management (React Context API, Redux, Zustand, or MobX)
- Integrate patient history visualization
- Add predictive analytics for shunt failure
- User authentication and role-based access
- Comprehensive API test coverage

## Contributing

See the `CLAUDE.md` file for development guidelines and project architecture details.
