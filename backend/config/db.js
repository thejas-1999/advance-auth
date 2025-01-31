import mongoose from "mongoose";

const connectDb = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log(`connected to database`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
