const mongoose =require("mongoose");
const userSchema=new mongoose.Schema({
    uname: {
        type: String,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    sessionKey: {
        type: String
    }

});
module.exports = mongoose.model('user',userSchema);