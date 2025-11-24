from fastapi import APIRouter

router = APIRouter()


@router.get("/")
async def get_shunts():
    """
    Get all shunt data

    TODO: Implement after schema is defined
    """
    return {"message": "Shunt endpoints will be implemented here"}


@router.get("/{shunt_id}")
async def get_shunt(shunt_id: str):
    """
    Get specific shunt by ID

    TODO: Implement after schema is defined
    """
    return {"message": f"Get shunt {shunt_id}"}
