import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./config/db.js";

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Api is running");
});

connectDb();

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
