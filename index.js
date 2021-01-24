const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

app.use("/", (req, res, next) => {
  res.status(200).json({ message: "Success" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
