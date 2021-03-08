const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: String,
    name: [{
        first: {
            type: String,
            default: ''
        },
        last: {
            type: String,
            default: ''
        }
    }],
    email: [{
        type: String,
    }]
})

const user = mongoose.model("user", userSchema);

module.exports = user;
