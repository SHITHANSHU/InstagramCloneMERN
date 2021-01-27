const express = require('express');
const mongoose =require("mongoose");
var ObjectId = require('mongoose').Types.ObjectId; 
const userProfileRoutes=express.Router();

// const User=require('../../models/');
const UserProfile=require('../../models/userProfile');
const User=require('../../models/user');
const uuid=require('uuid');
const dotenv = require('dotenv');
dotenv.config();


var response={
    status:200,
    message:'',
    data:''
};



userProfileRoutes.post('/',(req,res)=>{
    let nuserProfile=new UserProfile(req.body);
    User.findById(req.body.user)
    .exec((error,userData)=>{
        if(userData )
        {
                  
            nuserProfile.save()
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


userProfileRoutes.get('/',(req,res)=>{
    
    UserProfile.find()
    .populate('user')
    .exec((error,userProfile)=>{
        if(!userProfile)
        {
            console.log(error);
            response.status=410;
            response.message='Cannot Find User';
            response.data={};
            return res.status(410).json(response);
        }
        else
        {
            console.log(userProfile);
            response.status=200;
            response.message=userProfile;
            return res.status(200).json(response);
            
        }
    });

});




module.exports=userProfileRoutes;

