import express from "express";
import { connect_db } from "./config/db.config.mjs";
import { studentsModel } from "./models/students.model.mjs";
import { requestLogger } from "./middleware/logger.mjs";
import morgan from "morgan";
import cors from "cors";

const app = express();

// middleware -> request and response
// POST, PATCH, PUT -> Body -> JSONString -> Object
app.use(express.json());

app.use(morgan("dev"));

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"]
}));

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

app.get("/api/students{/:rollNumber}", async (request, response) => {
    try {
        const { rollNumber } = request.params;
        const student = await studentsModel.findOne({ rollNumber });
        if (!student) {
            return response.status(404).send({
                message: "Student not found"
            })
        }
        return response.status(200).send(student);
    } catch (err) {
        return response.status(500).send({
            message: "Error while fetching student data"
        });
    }
})


app.listen(5000, async () => {
    await connect_db();
    console.log("Server running on port 5000");
});

