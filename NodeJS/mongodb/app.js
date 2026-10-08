import { createServer } from "http";
import "./config/db.config.js";
import { createDBConnection } from "./config/db.config.js";

const server = createServer();

server.listen(8080, () => {
    createDBConnection();
    console.log("Server is running on port 8080");
})