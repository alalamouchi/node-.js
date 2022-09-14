const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("home");
    res.end();
  }
});

server.listen(5000, () => {
  console.log("server is running");
});
