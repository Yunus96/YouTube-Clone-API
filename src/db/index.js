/* below is 2nd approach to connect to DB and this is professional way
(production grade) */
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB host :`, connectionInstance.connection.host)
    } 
    catch (error) {
        console.log(`${process.env.MONGODB_URI}`)
        console.log("MONGODB connection error : ", error)

        process.exit(1)
    }
}

export default connectDB

