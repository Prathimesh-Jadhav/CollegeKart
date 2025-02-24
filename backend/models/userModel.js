const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    userType:{
        type: String,
        required: true,
        enum:["owner","user","superAdmin"],
    },
    subType:{
        type: String,
        required: true,
        enum:["medical","room","clinic","mess","stationary","none"],
    }
});