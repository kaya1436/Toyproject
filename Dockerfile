FROM golang:1.18.4-alpine3.15 AS GO_BUILD
COPY server /server
WORKDIR /server
RUN apk add build-base
RUN go build -v -o /go/bin/server

FROM alpine:3.11
COPY --from=GO_BUILD /go/bin/server ./
CMD ./server
