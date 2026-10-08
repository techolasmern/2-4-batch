import mongoose from "mongoose";

const mongodb_connection_string = "mongodb://localhost:27017";

// mongoose.connect(mongodb_connection_string, {
//     dbName: "database_01"
// }).then((response) => {
//     console.log(`Connected DB:`, response.connection.db.databaseName);
// })

export const createDBConnection = async () => {
    try {
        const dbResponse = await mongoose.connect(mongodb_connection_string, {
            dbName: "database_01"
        });
        return console.log(dbResponse.connection.db.databaseName);
    } catch (err) {
        return process.exit(1);
    }
}