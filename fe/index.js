const express = require("express");
const app = express();
const userSignup = require("./signup");
const userSignin = require("./signin")

app.post("/signup", userSignup)
app.post("/signin", userSignin)
app.listen(3000)