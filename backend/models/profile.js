const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
   Headline : {
    type:String,
    required: true,
   },
   backgroundColor:{
    type:String,
    required:true,
   },
   ButtonColor:{
    type:String,
    required:true,
   },
   Logo:{
    type:String,
    required:false,
   },
   user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
   }
}) ;

module.exports = mongoose.model("Profile", ProfileSchema)