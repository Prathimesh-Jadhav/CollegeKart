const mongoose = require("mongoose");

const facilitySchema = new mongoose.Schema({
    facilityType: {
        type: String,
        required: true,
    },
    facilityName: {
        type: String,
        required: true,
        unique: true,
    },
    ownerName: {
        type: String,
        required: true,
    },
    contact:{
        type: Number,
        required: true,
        unique: true,
    },
    certificate:{
        type: String,
    },
    ruleBook:{
        type: String,
    },
    availableRooms: {
        type: Number,
    },
    location: {
        type: String,
        required: true,
    },
    specialization: {
        type: String,
    },
    ownerID:{
        type: String,
    },
    rating: {
        type: Number,
    },
    createdBy: {
        type:String,
        ref:"userModel",
    },
    status: {
        type: String,
        enum: ["pending","approved","rejected"],
        default: "pending",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
},
{
    timestamps: true,
});

const facilityModel = mongoose.model("facility", facilitySchema);
module.exports = facilityModel;