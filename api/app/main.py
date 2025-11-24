from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import shunts
from app.config import settings

app = FastAPI(
    title="VPShunt Studio API",
    description="API for managing VP shunt patient data",
    version="1.0.0"
)

# Configure CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(shunts.router, prefix="/api/shunts", tags=["shunts"])


@app.get("/")
async def root():
    return {"message": "VPShunt Studio API", "version": "1.0.0"}


@app.get("/health")
async def health_check():
    return {"status": "healthy"}
