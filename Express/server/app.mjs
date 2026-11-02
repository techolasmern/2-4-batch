import express from "express";
import { connect_db } from "./config/db.config.mjs";
import { studentsModel } from "./models/students.model.mjs";
import morgan from "morgan";
import cors from "cors";
import bcrypt from "bcrypt";
import { passwordModel } from "./models/password.model.mjs";

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

app.post("/api/passwords", async (request, response) => {
    try {
        const body = request.body;
        const { password } = body;
        // install bcrypt -> (npm i bcrypt) or (pnpm add bcrypt)
        const hash = await bcrypt.hash(password, 10);
        const passwordDoc = await passwordModel.create({ hash });
        if (!passwordDoc) {
            throw new Error("Error while saving password");
        }
        return response.status(200).send({ hash });
    } catch (err) {
        return response.status(500).send({
            message: "Error while processing password"
        });
    }
});

app.post("/api/passwords/verify", async (request, response) => {
    try {
        const body = request.body;
        const { password } = body;
        const passwordDoc = await passwordModel.findOne();
        if (!passwordDoc) {
            return response.status(404).send({
                message: "No password found"
            });
        }
        const isMatched = await bcrypt.compare(password, passwordDoc.hash);
        return response.status(200).send({ password_matched: isMatched });
    } catch (err) {
        return response.status(500).send({
            message: "Error while verifying password"
        });
    }
});

app.get("/api/passwords", async (request, response) => {
    try {
        const docs = await passwordModel.find();
        return response.status(200).send(docs);
    } catch (err) {
        return response.status(500).send({
            message: "Error while fetching passwords"
        });
    }
});

app.listen(5000, async () => {
    await connect_db();
    console.log("Server running on port 5000");
});

