FROM node:16.14 AS JS_BUILD
COPY web-app /web-app
WORKDIR webapp
RUN npm install && npm start

FROM golang:1.18.4-alpine3.15 AS GO_BUILD
COPY server /server
WORKDIR /server
RUN apk add build-base
RUN go build -v -o /go/bin/server

FROM alpine:3.11
COPY --from=JS_BUILD /webapp/build* ./webapp/
COPY --from=GO_BUILD /go/bin/server ./
CMD ./server
