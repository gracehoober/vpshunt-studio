# VPShunt Studio API

FastAPI backend for the VPShunt Studio healthcare dashboard.

## Setup

### Prerequisites
- Python 3.11 or higher
- pip or uv for package management

### Installation

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

Or using modern Python tools:
```bash
pip install -e .
```

3. Configure environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

## Running the API

### Development Server
```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at:
- API: http://localhost:8000
- Interactive docs (Swagger): http://localhost:8000/docs
- Alternative docs (ReDoc): http://localhost:8000/redoc

### Production
```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

## Project Structure

```
api/
├── app/
│   ├── main.py          # FastAPI application entry point
│   ├── config.py        # Configuration settings
│   ├── models/          # Pydantic models (TODO: define schema)
│   ├── routers/         # API endpoint definitions
│   ├── services/        # Business logic layer
│   └── db/              # Database configuration
├── tests/               # Test suite
├── requirements.txt     # Python dependencies
├── pyproject.toml       # Modern Python project config
└── .env.example         # Environment variables template
```

## API Endpoints

### Health Check
- `GET /health` - API health status

### Shunts (TODO)
- `GET /api/shunts` - List all shunt data
- `GET /api/shunts/{id}` - Get specific shunt

## Development

### Testing
```bash
pytest
```

### Code Quality
```bash
ruff check .
ruff format .
```

## Next Steps

1. **Define Data Schema**: Plan and implement Pydantic models for User, Shunt, and Dashboard data
2. **Database Setup**: Choose and configure database (SQLite for dev, PostgreSQL for prod)
3. **Implement Endpoints**: Build CRUD operations for shunt management
4. **Authentication**: Add user authentication and authorization
5. **Testing**: Write comprehensive test coverage
