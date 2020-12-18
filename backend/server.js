const express=require('express');
const bodyParser=require('body-parser');
const app=express();
// const morgan=require('morgan');
const authRoutes=require('./controller/auth');
const testApiRoutes=require('./controller/testApi');
const resetPasswordRoutes=require('./controller/resetPassword');
const mongoose=require('mongoose');
const cors=require('cors');
const dotev=require('dotenv');

dotev.config();

const PORT=process.env.PORT;
app.use(bodyParser.json({limit: '200mb'}));
app.use(cors());
mongoose.connect('mongodb+srv://root:root@cluster0.njobl.mongodb.net/Instagram?retryWrites=true&w=majority',
{
    useNewUrlParser : true,
    useUnifiedTopology: true
},()=> console.log('DB Connected'));



app.use('/auth',authRoutes);
app.use('/reset',resetPasswordRoutes);
app.use('/api',testApiRoutes);
app.use((req,resp,next)=>{
    
    resp.status(404).send('Page not Found');
});


app.listen(PORT,()=>{
    console.log("server is running",PORT)
});

