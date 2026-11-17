import "dotenv/config";
import { connect } from "mongoose";

export const createDBConnection = async () => {
    try {
        const { connection } = await connect(process.env.database_string, {
            dbName: process.env.database_name
        });
        return console.log(`🦖 MongoDB : ${connection.db.databaseName}`);
    } catch (err) {
        return process.exit(1);
    }
}