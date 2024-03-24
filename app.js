import cors from "cors";
import express from "express";
import conn from "./db/conn.js";
import routes from "./routes/router.route.js";
import dotenv from "dotenv";

const app = express();

//CORS
app.use(cors());

//Body parser
app.use(express.json());

//Public folder
app.use("/public", express.static("public"));

//Load env vars
dotenv.config();

//DB Connection
conn();

//Routes
app.use("/api", routes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
