import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://trevorkayiira:mqmZQ07ro8dqHTat@cluster0.17uiyub.mongodb.net/foodie').then(() => console.log("db connected"))
}