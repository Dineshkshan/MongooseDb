const Mongo=require('mongodb');
const express=require('express');
const router=express.Router();
const tableschema=require('./tableschema');
router.post('/insert',async(req,res)=>
{
    var data=new tableschema({
        EmployeeId:req.body.EmployeeId,
        Name:req.body.Name,
        Place:req.body.Place
    });
    await data.save();
    res.status(200).json(data);
});
router.get('/get',async(req,res)=>
{
    var data=await tableschema.find();
    res.status(200).send(data);
});
router.put('/update/:employeeid/:place',async(req,res)=>
{
    var id=req.params.employeeid;
    var placedata=req.params.place;
    var data=await tableschema.updateOne({EmployeeId:id},{$set:{Place:placedata}});
    res.status(200).send(data);
});
router.delete('/delete/:employeeid',async(req,res)=>
{
    var item=req.params.employeeid;
    await tableschema.deleteOne({EmployeeId:item}).then(e=>
        {
            res.status(200).send("Deleted Successfully");
        });  
})

module.exports=router;