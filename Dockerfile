FROM alpine
RUN apk update && apk add git && apk add vim
CMD ["echo", "hello world"]