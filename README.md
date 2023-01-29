# Link shortener
Available example on [https://mrgick.github.io/link/](https://mrgick.github.io/link/)
## Technologies
Created with using FastApi and async SqlModel.
## How to run
- front 

Files for the static hosting on github pages are in dir docs. Run it with web server.
- backend
  
Dockerfile - can build api
```docker
docker build -t link .
```
```
docker run -e DB_URL="postgresql+asyncpg://YOUR_POSTGRESQL_STRING" -p 80:80 link
```
- database

Run init_db from app/database/init_db.py to initialize table link.
