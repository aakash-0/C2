const express = require("express");
const app = express();

app.use(express.json());

const userconroller= require("./controller/user.controller");

app.use("/user", userconroller)


module.exports= app;