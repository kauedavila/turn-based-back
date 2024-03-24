import mongoose from "mongoose";

async function main() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to the database");
  } catch (error) {
    console.log("Error when connecting do the database:", error);
  }
}

export default main;
