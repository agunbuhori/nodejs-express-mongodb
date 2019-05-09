const mongoose = require("mongoose");
const db = {};

mongoose.connect("mongodb://localhost/absence", {useNewUrlParser: true})
.then(() => console.log("MongoDB is running"))
.catch(err => console.error());

function getModel(model) {
    return require("../models/mongodb/"+model);
}

db.User = mongoose.model('User', getModel("user"));

module.exports = db;
