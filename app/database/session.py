from typing import AsyncGenerator

from sqlmodel.ext.asyncio.session import AsyncSession
from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy.orm import sessionmaker

from ..config import settings
from .models import *


engine = create_async_engine(
    settings.db_url,
    future=True,
    echo=True,
    pool_size=50,
    max_overflow=10,
    isolation_level="AUTOCOMMIT",
)

async_session_maker = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)


async def get_async_session() -> AsyncGenerator[AsyncSession, None]:
    async with async_session_maker() as session:
        yield session
