const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://" + process.env.MONGODB_USER + ":" + process.env.MONGODB_PASSWORD + "@turnbasedcluster.r9hyqrc.mongodb.net/?retryWrites=true&w=majority&appName=TurnBasedCluster"
    );
    console.log("Connected to the database");
  } catch (error) {
    console.log("Error when connecting do the database:", error);
  }
}

module.exports = main;
