const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Tests = new Schema({
    Category: {
        type: String
    },
    subject: {
        type: String
    },
    test: {
        type: String
    },
    answerTrue: {
        type: String
    },
    answerFalse: {
        type: Array
    }
})


module.exports = mongoose.model("Tests", Tests)