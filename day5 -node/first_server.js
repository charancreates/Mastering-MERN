import http from "http";

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end("Hello world");
});

server.listen(port, () => console.log("server is running broo"));
