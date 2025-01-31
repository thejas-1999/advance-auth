import express from "express";

const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
