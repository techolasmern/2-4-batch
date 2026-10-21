import express from "express";
import { connect_db } from "./config/db.config.mjs";
import { studentsModel } from "./models/students.model.mjs";

const app = express();

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

app.listen(3000, async () => {
    await connect_db();
    console.log("Server running on port 3000");
});

