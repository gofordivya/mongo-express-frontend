const express = require("express");
const router = require("./config/router");
require("./config/mongo");

const app = express();
const port = 2000;

app.set(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(port, console.log(`app is running in the port ${port}`));
