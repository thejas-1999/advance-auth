import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
