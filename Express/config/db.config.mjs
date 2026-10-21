import mongoose from "mongoose";

const db_string = "mongodb://localhost:27017";
const db_name = "COLLEGE_STUDENTS_DATA";

export const connect_db = async () => {
    try {
        const { connection } = await mongoose.connect(db_string, {
            dbName: db_name
        })
        return console.log(`MongoDB: ${connection.db.databaseName}`);
    } catch (err) {
        return process.exit(1);
    }
}