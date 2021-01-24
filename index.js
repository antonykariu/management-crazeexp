const express = require("express");
const home = require("./Routes/home");

const app = express();
const port = process.env.PORT || 5000;

app.use("/", home);

app.listen(port, () => console.log(`listening on port ${port}`));
