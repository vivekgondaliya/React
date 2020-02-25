const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/warbler", {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useMongoClient: true
});

module.exports.User = require("./user");