const mongoose = require("mongoose");
const Schema = mongoose.Schema
const PostSchema = new mongoose.Schema({
    
    user: {
        type: Schema.ObjectId,
        ref: 'user',
        required:true
    },
    img_url: {
        type: String,
        required: true
    },
    caption: {
        type: String,
        required: true
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
module.exports = mongoose.model('post',PostSchema);