const express = require("express");
const home = express.Router();

home.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

home.get("/", (req, res) => {
  res.status(200).json({ message: "Successful" });
});

module.exports = home;
