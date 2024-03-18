const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());

app.use(express.json());

app.use("/public", express.static("public"));

//DB Connection
const conn = require("./db/conn");

conn();

//Routes
const routes = require("./routes/router");

app.use("/api", routes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
