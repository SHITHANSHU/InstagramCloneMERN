const express = require('express');
const mongoose =require("mongoose");
var ObjectId = require('mongoose').Types.ObjectId; 
const PostRoutes=express.Router();

// const User=require('../../models/');
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

PostRoutes.post('/',(req,res)=>{
    let nPost=new Post(req.body);
    User.findById(req.body.user)
    .exec((error,userData)=>{
        if(userData)
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
            response.message="user not found with id "+req.body.user;
            response.data={}
            
            return res.status(404).json(response);
        }
    })
    
});

module.exports=PostRoutes;