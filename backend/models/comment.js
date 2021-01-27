const mongoose =require("mongoose");
const Schema=mongoose.Schema
const CommentSchema=new mongoose.Schema({
    
    user: {
        type: Schema.ObjectId,
        ref: 'user',
        required:true
    },
    post_id: {
        type: Schema.ObjectId,
        ref: 'posts',
        required:true
    },
    text: {
        type: String,
        required: false
    },
    timestamp: {
        type: Date,
        default: Date.now()
    },
    likes: {
        type: Number,
        required: false,
        default:0
    }
});
module.exports = mongoose.model('comment',CommentSchema);