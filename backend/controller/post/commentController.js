const express = require('express');
const mongoose =require("mongoose");
var ObjectId = require('mongoose').Types.ObjectId; 
const CommentRoutes=express.Router();

// const User=require('../../models/');
const Comment=require('../../models/comment');
const Post=require('../../models/post');
const User=require('../../models/user');
const uuid=require('uuid');
const dotenv = require('dotenv');
dotenv.config();


var response={
    status:200,
    message:'',
    data:''
};

CommentRoutes.post('/',(req,res)=>{
    let nComment=new Post(req.body);
    User.findById(req.body.user)
    .exec((error,userData)=>{
        if(userData)
        {

            Post.findById(req.body.post_id)
            .exec((error,postData)=>{
                if(postData)
                {
                    console.log("userPost")
        
                    nPost.save()
                    .then(userData=>{
                        response.status=200;
                        response.message="insertion Successful";
                        response.data={userData};

                        return res.status(200).json(response);
                    })
                    .catch(errorn=>{
                        
                        response.status=412;
                        response.message="insertion unsucessful";
                        response.data={error:errorn}
                        return res.status(412).json(response);
                    });
                }

                else
                {
                    response.status=404;
                    response.message="post not found with id "+req.body.post_id;
                    response.data={}
                }
            })
            

        }
        else
        {
            response.status=404;
            response.message="user not found with id "+req.body.user;
            response.data={}
            
            return res.status(404).json(response);
        }
    })
    
});

module.exports=PostRoutes;