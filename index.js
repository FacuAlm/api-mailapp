import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

const app = express();

app.use(express.json());

dotenv.config();



connectDB();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
