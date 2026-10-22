import express from "express";
import { connect_db } from "./config/db.config.mjs";
import { studentsModel } from "./models/students.model.mjs";

const app = express();

// middleware -> request and response
// POST, PATCH, PUT -> Body -> JSONString -> Object
app.use(express.json());

app.use((request, response, next) => {
    const requestedPath = request.url;
    const requestedMethod = request.method;
    const startTime = Date.now();
    response.on("finish", () => {
        const endTime = Date.now();
        const diff = endTime - startTime;
        const statusCode = response.statusCode;
        console.log(`${requestedMethod} ${requestedPath} ${statusCode} -${diff}ms`);
    });
    next();
});

app.get("/api/students", async (request, response) => {
    try {
        const query = request.query;
        const limit = isNaN(query?.limit) ? 10 : Number(query?.limit); 
        const skip = isNaN(query?.skip) ? 0 : Number(query?.skip);
        const stdCount = await studentsModel.estimatedDocumentCount();
        const students = await studentsModel.find().skip(skip).limit(limit);
        return response.status(200).send({ limit, skip, students, total: stdCount });
    } catch (error) {
        return response.status(500).send({
            message: "Error while fetching students data"
        });
    }
});


app.listen(5000, async () => {
    await connect_db();
    console.log("Server running on port 5000");
});

