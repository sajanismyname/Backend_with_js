import mongoose from " mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const conInt = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n Mongodb connected !! DB Host: ${conInt}`);
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1)
    }
}

export default connectDB