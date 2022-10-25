const express = require('express');
const myHelper = require('../util/helper')
const usermodel = require('../models/usermodel.js')
const usercontroler = require('../controler/usercontroler')

const router = express.Router();

router.get('/test-me', function (req, res) {
 
    res.send('My first ever api!')
});
router.post("/create_user", usercontroler.create_user )
  

router.get("/get_user", async function(req,res)
{
//    let allUser = await usermodel.find({ $or: [{ sales: 10 },{ authorName : "pratham"}] } ).select({ bookName : 1 , authorName : 1, _id : 0})
// let allUser = await usermodel.find({ $or: [{ sales: 10 },{ authorName : "pratham"}] } ).skip(1).sort({sales : -1}).limit(3).select({ bookName : 1 , authorName : 1, _id : 0})
  // let allUser = await usermodel.find( {sales : {$gt: 10 , $lt : 90}}).select({sales : 1 , bookName : 1, _id : 0})
//   let allUser = await usermodel.update( {sales : {$gt : 60}}  ,{ $set: { ispublished : true} })
   
   console.log(allUser)
   res.send({msd : allUser})
})
// let a = [ 10,20,23,1,5,50]
// router.get("/query:number", async function(req,res)
// {
//    let b = req.query.number
//    let s = []
//    for(let i =0; i<a.length;i++)
//    {
//       if(b>a[i])
//       {
//         s.push(a[i])
//       }
//    }
//    res.send({msd : s})
// })

module.exports = router;
// adding this comment for no reason
