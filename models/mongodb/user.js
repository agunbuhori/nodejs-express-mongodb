const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
    uid: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

module.exports = User;
