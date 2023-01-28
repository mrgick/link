from fastapi import APIRouter, Depends, status
from fastapi.exceptions import HTTPException

from sqlmodel.ext.asyncio.session import AsyncSession

from ..database.session import get_async_session
from ..crud import link_crud
from ..database.models import Link
from ..database.schemas import CreateLink


router = APIRouter(tags=["Links"])


@router.post("/link/", response_model=Link, status_code=status.HTTP_200_OK)
async def create_link(
    *, session: AsyncSession = Depends(get_async_session), link: CreateLink
):
    link = await link_crud.create_link(session, link.url)
    return link


@router.get("/link/", response_model=Link, status_code=status.HTTP_201_CREATED)
async def read_link(*, session: AsyncSession = Depends(get_async_session), prefix: str):
    link = await link_crud.read_link(session, prefix)
    if not link:
        raise HTTPException(404, "Link not found.")
    return link
