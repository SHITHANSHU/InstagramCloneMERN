const express = require('express');
const testApiRoutes=express.Router();
const {cloudinary}=require('../utils/cloudinary');
testApiRoutes.post('/upload',async (req,res)=>{
    console.log("calling upload");
    try{
            const fileStr=req.body.data;
            const uploadedResponse=await cloudinary.uploader
                    .upload(fileStr,{
                        upload_preset:'insta_clone'
                    })
            console.log(uploadedResponse);
            console.log("uploaded");
             
    }
    catch (error){
        
        console.log(error);

    }

});

module.exports=testApiRoutes;
