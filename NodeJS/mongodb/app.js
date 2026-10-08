import { createServer } from "http";
import "./config/db.config.js";
import { createDBConnection } from "./config/db.config.js";
import link from "url";
import { todoModel } from "./models/todo.schema.js";

const server = createServer();

server.on("request", async (request, response) => {
    const { url, method } = request;
    const { pathname, query } = link.parse(url, true);

    if (pathname == "/todo" && method == "POST") {
        let bodyData = "";
        request.on("data", (chunk) => {
            bodyData += chunk;
        })
        request.on("end", async () => {
            const data = JSON.parse(bodyData);
            const res = await todoModel.create(data); 
            return response.end(JSON.stringify(res));
        })
    }

    if(pathname == "/todo" && method == "GET") {
        const res = await todoModel.find();
        return response.end(JSON.stringify(res));
    }
    
})

server.listen(8080, () => {
    createDBConnection();
    console.log("Server is running on port 8080");
})