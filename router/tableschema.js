const Mongo=require('mongoose');


const tableschema=Mongo.Schema({
    EmployeeId:{
        type:Number,
        required:true,
        auto_increment:true
    },
    Name:{
        type:String,
        required:true,
    },
    Place:{
        type:String,
        required:true
    }

});

module.exports=Mongo.model('Table2',tableschema);