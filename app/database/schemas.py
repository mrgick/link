from pydantic import HttpUrl
from sqlmodel import SQLModel


class CreateLink(SQLModel):
    url: HttpUrl
