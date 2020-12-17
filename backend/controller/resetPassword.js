const express = require('express');
const resetPasswordRoutes=express.Router();
const aes256=require('aes256');
const User=require('../models/user');
const nodemailer=require('nodemailer');

const dotenv = require('dotenv')
dotenv.config();

const key = process.env.AES256KEY;

const myEmail = process.env.MYEMAIL;
const myEmailPassword = process.env.MYEMAILPASSWORD;



var response={
    status:200,
    message:'',
    data:''
};


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: myEmail,
      pass: myEmailPassword
    }
  });

var toEmail='instagramclone.reset@gmail.com';
var mailOptions = {
    from: myEmail,
    to: toEmail,
    subject: 'Reset Link for Password', 
    text: 'Hey Miss Vellor,\nDid you forgot your password ???\nDont Worry your Buddy is here.\nRegards,\nInstaClone Team'
  };

function setMailOption(to,name,otp)
{
    mailOptions.to=to;
    mailOptions.text="Hey "+name+",\nSeems like you forgot your password.\nNo worries here is a temporary password "+otp+".\nRegards,\nInstaClone Team"
}


resetPasswordRoutes.get('/',(req,res)=>{
    let contition={$or:[{uname:req.body.uname},{email:req.body.uname}]};
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
    
            var otp=Math.floor(100000+Math.random()*900000);
            console.log(otp);
            var otpenc=aes256.encrypt(key,otp.toString());
            setMailOption(user.email,user.fname,otp.toString());   
            
            console.log(mailOptions);
            
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                console.log(error);
                response.status=415;
                            response.message='email sending error ';
                            response.data={error:error};
                return res.status(415).json(response);
                } else {
                        console.log('Email sent: ' + info.response);
                        var nuser=new User(user);
                        nuser.password=otpenc;
                        nuser.save()
                        .then(()=>{
                            response.status=200;
                            response.message="Email sent Sucessfully";
                            response.data={sessionKey:'1000'};
                            return res.status(200).json(response);
                        })
                        .catch((error)=>{
                            response.status=416;
                            response.message="OTP update error";
                            response.data={error:error};
                            return res.status(416).json(response);
                        });
                       
                }
            });

        }
    });

    

});


module.exports=resetPasswordRoutes;
