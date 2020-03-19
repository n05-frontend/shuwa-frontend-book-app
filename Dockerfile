FROM golang:1.14.0-alpine3.11
RUN apk update && \
    apk add --no-cache tzdata && \
    cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
    apk del tzdata

WORKDIR /app
COPY . .

CMD ["go", "run", "main.go"]
