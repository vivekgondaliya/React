//load environment variables
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require('./handlers/error');
const authRoutes = require("./routes/auth");

const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
//routes

app.use((req, res, next) => {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

//middleware
app.use(errorHandler);

app.listen(PORT, function(){
    console.log(`Server is running on ${PORT}...`);
});