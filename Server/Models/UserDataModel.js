const mongoose = require('mongoose')
const Scehma = mongoose.Schema


const userSchema = new Scehma ({
    name: String,
    email: String,
    firstContact: Date,
    emailType: String,
    sold: Boolean,
    owner: String,
    country: String
})

const User = mongoose.model("User", userSchema)

module.exports = User
