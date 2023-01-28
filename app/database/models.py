from typing import Optional

from pydantic import HttpUrl

from sqlmodel import SQLModel, Field


class Link(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    prefix: str = Field(unique=True, index=True)
    url: HttpUrl
