const express=require('express');
const Mango = require('mongoose');
const logger=require('morgan');
const app=express();
const url = 'mongodb://localhost:27017/Database2';
app.use(logger('dev'));
app.use(express.json());

app.use('/',require('./router/index'));
Mango.connect(url,{ useUnifiedTopology: true,useNewUrlParser: true },(err)=>
{
    if(err) throw err;
    console.log("Database connected Successfully");
});








const port=process.env.PORT||5000;
app.listen(port,(err)=>
{
    if(err)
    {
        console.log(err);
    }
    console.log("Application is working properly",port);
})
