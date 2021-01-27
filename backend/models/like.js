const mongoose =require("mongoose");
const Schema=mongoose.Schema
const LikeSchema=new mongoose.Schema({
    
    user: {
        type: Schema.ObjectId,
        ref: 'user',
        required:true
    },
    content_id: {
        type: Schema.ObjectId,
        required:true
    },
    like_type:{
        type:Boolean,
        required:true
    }

});
module.exports = mongoose.model('like',LikeSchema);