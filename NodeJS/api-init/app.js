// build-in module / core module

// http;

const todoList = [];

const http = require("http");
const url = require("url");

const server = http.createServer();

server.on("request", (request, response) => {

    const { pathname, query } = url.parse(request.url, true);
    const method = request.method;

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

    if (pathname == "/todo") {
        if (method == "GET") {
            const todo = query.todo;
            todoList.unshift(todo);
            response.writeHead(statusCode, { "Content-Type": "application/json" });
            const responseBody = JSON.stringify({
                message: "Todo added successfully",
                new: todo
            });
            return response.end(responseBody);
        }
        if (method == "POST") {
            return response.end("POST request received for /todo");
        }
    }

    if (pathname == "/todos") {
        response.writeHead(statusCode, { "Content-Type": "application/json" });
        const responseBody = JSON.stringify({
            message: "Todo list fetched successfully",
            todos: todoList
        });
        return response.end(responseBody);
    }

    response.writeHead(404, { "Content-Type": "text/plain" });
    return response.end("404 Not Found");
});
  
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// GET, POST, PUT, PATCH, DELETE