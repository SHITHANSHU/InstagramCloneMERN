const express = require('express');
const authRoutes=express.Router();
const aes256=require('aes256');
const User=require('../models/user');
const uuid=require('uuid');
const dotenv = require('dotenv');
dotenv.config();
const key=process.env.AES256KEY;

var response={
    status:200,
    message:'',
    data:''
};

function saveSessionKey(user,sessionKey)
{
    var updateUser=new User(user);
    updateUser.sessionKey=sessionKey;
    updateUser.save()
        .then(()=>{
            
        })
        .catch((error)=>{
            response.status=416;
            response.message="error in saving session key";
            response.data={};
            return {resp:false,error:error}
        })
}

authRoutes.get('/',(req,res)=>{
    let contition={uname:req.body.uname};
    User.findOne(contition,(error,user)=>{
        if(!user)
        {
            console.log(error);
            response.status=410;
            response.message='Cannot Find User';
            response.data={};
            return res.status(410).json(response);
        }
        else
        {
            console.log(user);
            console.log(req.body);
            var decryptedPassword=aes256.decrypt(key,user.password);
            console.log(user);
            
            if(decryptedPassword=== req.body.password)
            {
                
                response.status=200;
                response.message="Logged in sucessfully";
                var sessionKey=uuid.v4();
                response.data={sessionKey:sessionKey};
                saveSessionKey(user,sessionKey);
                return res.status(200).json(response);
            }
            else
            {
                response.status=411;
                response.message='Invalid Password ';
                response.data={};
                return res.status(411).json(response);
            }
        }
    });

});


authRoutes.post('/',(req,res)=>{
    console.log(req.body)
    let contition={$or:[{uname:req.body.uname},{email:req.body.email}]};
    User.find(contition,(error,user)=>{
        console.log(user);
        if(user.length === 0)
        {
            console.log(req.body);
            // req.body.password=aes256.encrypt(key,req.body.password);
            let nuser=new User(req.body);
            console.log(req.body);
            nuser.password=aes256.encrypt(key,nuser.password);
            nuser.sessionKey=uuid.v4();
            nuser.save()
                .then(userData=>{
                    response.status=200;
                    response.message="signup sucessfull";
                    response.data={sessionKey:nuser.sessionKey};

                    return res.status(200).json(response);
                })
                .catch(errorn=>{
                    
                    response.status=412;
                    response.message="signup unsucessful";
                    response.data={error:errorn}
                    return res.status(412).json(response);
                });


        }
        else
        {
            
                response.status=413;
                response.message='Username/Email already in use';
                response.data={};
                return res.status(413).json(response);
            
        }
    });

});


module.exports=authRoutes;

