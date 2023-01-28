from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routers import links
from .config import settings


app = FastAPI(
    title=settings.app_title,
    description=settings.app_description,
    version=settings.app_version,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(links.router)


@app.get("/")
async def root():
    return {"message": "Shorter Link API!"}
