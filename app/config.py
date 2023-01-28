import pathlib
from pydantic import BaseSettings, PostgresDsn

BASE_DIR = pathlib.Path().resolve()


class Settings(BaseSettings):
    app_title: str = "Shorter Link"
    app_description: str = "Api that short links =)"
    app_version: str = "0.0.1"
    link_length: int = 4
    db_url: PostgresDsn
    origins: list = [
        "http://localhost:8080",
    ]

    class Config:
        env_file = BASE_DIR / ".env"
        env_file_encoding = "utf-8"


settings = Settings()
