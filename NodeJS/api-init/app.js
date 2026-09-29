// build-in module / core module

// http;

const http = require("http");

const server = http.createServer();

server.on("request", (request, response) => {
    response.writeHead(400, { "Content-Type": "application/json" });
    const jsonData = JSON.stringify({ message: "Hello World" });
    response.end(jsonData);
});
  
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});

