FROM python:3.10.9-slim

WORKDIR /link-shortener

COPY ./requirements.txt /link-shortener/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /link-shortener/requirements.txt

COPY ./app /link-shortener/app

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "80"]
