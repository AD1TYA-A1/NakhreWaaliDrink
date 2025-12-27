import mongoose from "mongoose";
export const connDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected!!");

    } catch (e) {
        console.log("Error in connection to DATABASE");
        process.exit(1);  //In CASE OF ANY ERROR WE TERMINATE OUR BACKEND!!
    }
}