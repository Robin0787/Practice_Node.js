const http = require("http");
const fs = require("fs");

// Creating a server using raw Node.js

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/read-file" && req.method === "GET") {
    const readableStream = fs.createReadStream(
      process.cwd() + "/texts/read.txt"
    );
    readableStream.on("data", (buffer) => {
      res.write(buffer);
    });
    readableStream.on("end", () => {
      res.end("Hello Dear!");
    });
  }
});

server.listen(2000, () => {
  console.log("Server is running on port", 2000);
});
