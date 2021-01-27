const mongoose =require("mongoose");
const Schema=mongoose.Schema
const userProfileSchema=new mongoose.Schema({
    
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        unique:true
    },
    profile_picture: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    last_seen: {
        type: Date,
        default: Date.now()
    },
    followers: {
        type: Number,
        required: false,
        default:0
    },
    following:{
        type: Number,
        required: false,
        default:0
    },
    is_private:{
        type:Boolean,
        required:true
    }

});
module.exports = mongoose.model('user_profile',userProfileSchema);