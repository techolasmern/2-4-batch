// build-in module / core module

// http;

const http = require("http");

const server = http.createServer();

server.on("request", (request, response) => {

    const pathname = request.url;
    const contentType = { "Content-Type": "text/plain" };
    const statusCode = 200;
    
    if (pathname == "/") {
        response.writeHead(statusCode, contentType);
        return response.end("Welcome to Home Page");
    }

    if (pathname == "/profile") {
        response.writeHead(statusCode, contentType);
        return response.end("Welcome to Profile Page");
    }

    if(pathname == "/about") {
        response.writeHead(statusCode, contentType);
        return response.end("Welcome to About Page");
    }

    response.writeHead(404, { "Content-Type": "text/plain" });
    return response.end("404 Not Found");
});
  
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});

