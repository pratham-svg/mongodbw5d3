const express = require('express');
// const myHelper = require('../util/helper')
const usermodel = require('../models/usermodel.js')
const usercontroler = require('../controler/usercontroler')
const moment = require('moment');
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
router.get("/bookList", async function(req,res)
{
   let allUser = await usermodel.find().select({ BookName : 1 , AuthorName : 1 , _id : 0})
   console.log(allUser)
   res.send({msd : allUser})
})
router.get("/bookLista1", async function(req,res)
{
   let allUser = await usermodel.find()
   const d = new Date();
   const a = d.split("-")
   if(allUser && allUser.length != 0 ) {res.send({msd : allUser})}
   else{  console.log(allUser) 
      res.send({msg : "no books are found"})}
})
router.post("/bookLista1", async function(req,res)
{  
   let data = req.body
   let allUser = await usermodel.updateMany({BookName : "abcd"},//condition
      { $set: data },
      // {new : true},
      {upsert : true}  ) //for updated document 
      
      res.send({msg :allUser})
 
})
router.get("/momentapi", async function(req,res)
{  
   const today = moment();
   console.log(today.format("DD-MM-YYYY"));
   const datea = moment("15-10-2041","DD-MM-YYYY")
   const dateb = moment("30-11-2045","DD-MM-YYYY")
   console.log('Difference is ', dateb.diff(datea), 'days');
   res.send({msg : today.format("DD-MM-YYYY")})
 
})
router.get("/deletedbooks", async function(req,res)
{  
   let data = req.body
   let allUser = await usermodel.updateMany({BookName : "abcd"},//condition
      { $set: {isDeleted : true} },
      {new : true} ) 
      res.send({msg :allUser})
 
})

router.post("/geBooksInYear", async function(req,res)
{  
   let year = req.query.year;
   let allUser = await usermodel.find({ year : year })
   console.log(allUser)
   res.send({msd : allUser})
})
router.get("/getXINRBooks", async function(req,res)
{  
   let allUser = await usermodel.find({price : {$in: [199,95,125]}})
   console.log(allUser)
   res.send({msd : allUser})
})
router.get("/getRandomBooks", async function(req,res)
{  
   let allUser = await usermodel.find(   { pages : { $gt: 200 } })
   console.log(allUser)
   res.send({msd : allUser})
})
router.get("/getParticularBooks", async function(req,res)
{  
   let allUser = await usermodel.find(   { $or :[ { BookName : "Journey to the Centre of the Earth" },{ year: 2018 } ]})
   console.log(allUser)
   res.send({msd : allUser})
})

module.exports = router;
// adding this comment for no reason
