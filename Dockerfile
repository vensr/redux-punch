FROM node:alpine
RUN npm install -g serve
COPY ./build /build
WORKDIR /build
CMD ["serve"]
