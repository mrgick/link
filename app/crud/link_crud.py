import string
import random

from typing import Optional
from pydantic import HttpUrl

from sqlmodel import select
from sqlmodel.ext.asyncio.session import AsyncSession

from ..database.models import Link
from ..config import settings


def generate_prefix(length: int = settings.link_length) -> str:
    symbols = string.ascii_letters + string.digits
    prefix = random.choices(symbols, k=length)
    return "".join(prefix)


async def get_new_prefix(session: AsyncSession) -> str:
    flag = False
    prefix = generate_prefix()
    while not flag:
        statement = select(Link).where(Link.prefix == prefix)
        links = await session.exec(statement)
        if not links.first():
            flag = True
    return prefix


async def create_link(session: AsyncSession, url: HttpUrl) -> Link:
    prefix = await get_new_prefix(session)
    link = Link(url=url, prefix=prefix)
    session.add(link)
    await session.commit()
    await session.refresh(link)
    return link


async def read_link(session: AsyncSession, prefix: str) -> Optional[Link]:
    statement = select(Link).where(Link.prefix == prefix)
    links = await session.exec(statement)
    return links.first()
