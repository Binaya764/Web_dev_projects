const express = require("express");
const app = express();
const port = 3000;

const Users = [];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post("/register", (req, res) => {
  res.send("Register");
});

app.post("/login", (req, res) => {
  res.send("Login");
});

app.get("/questions", (req, res) => {
  res.send("Questions");
});

app.get("/submissions", (req, res) => {
  res.send("Submissions");
});
