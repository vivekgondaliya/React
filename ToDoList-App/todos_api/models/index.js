const mongoose = require('mongoose');
mongoose.set('debug', true);

//Connect to DB
//mongoose.connect( process.env.DB_CONNECT, { useUnifiedTopology: true, useNewUrlParser: true }, () => { console.log('connected to db!');});
mongoose.connect("mongodb://localhost/todo-api", { useUnifiedTopology: true, useNewUrlParser: true }, () => { console.log('connected to db!');});

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
