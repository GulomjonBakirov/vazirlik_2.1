const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Videos = new Schema({
    Category: {
        type: String,
    },
    Subject: {
        type: String,
    },
    Goal: {
        type: String,
    },
    Lesson: {
        type: String,
    },
    Date:{
        type: String
    },
});
module.exports = mongoose.model("Videos", Videos);
