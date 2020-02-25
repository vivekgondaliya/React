const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require('./handlers/error');

const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

//routes

app.use((req, res, next) => {
    let err = new Error();
    err.status = 404;
    next(err);
});

//middleware
app.use(errorHandler);

app.listen(PORT, function(){
    console.log(`Server is running on ${PORT}...`);
});