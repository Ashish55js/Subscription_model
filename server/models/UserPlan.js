const mongoose = require("mongoose");

const UserPlanSchema = new mongoose.Schema({
    planName:{
        type:"string",
        required:true
    },
    monthlyPrice:{
        type:Number,
        required:true
    },
    yearlyPrice:{
        type:Number,
        required:true
    },
    videoQuality:{
        type:"string",
        required:true
    },
    resolution:{
        type:"string",
        required:true
    },
    devices:{
        type:["string"],
        required:true
    },
    activeScreens:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("UserPlan", UserPlanSchema);