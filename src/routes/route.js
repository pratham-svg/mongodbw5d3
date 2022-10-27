const express = require('express');
// const myHelper = require('../util/helper')
const usermodel = require('../models/data_book.js')
const usercontroler = require('../controler/usercontroler')
const author = require('../authorschema/author')
const moment = require('moment');
const data_book = require('../models/data_book.js');
const router = express.Router();

router.get('/test-me', function (req, res) {
 
    res.send('My first ever api!')
});
router.post("/create_books", usercontroler.create_user )
router.post("/create_author", usercontroler.create_author )
  

router.get("/bookList", async function(req,res)
{  
   let authora = await author.find( {  author_name : "Chetan Bhagat" }).select({ "author_id": 1 , _id : 0})
   let bookas = await data_book.find({ "author_id": authora[0].author_id }).select({
      name :
      1 , _id : 0})
   console.log(authora[0].author_id)

   res.send({msd : bookas})
})
router.get("/twostate", async function(req,res)
{  
   let bookas = await data_book.updateMany( {name : "Two states" } ,{ $set : {price : 100 }}).find().select({_id : 0,price : 1})
   let id = await data_book.find({name : "Two states" })
   let authorb_id = id[0].author_id
   let authora_id = await author.find( {author_id : authorb_id} ).select( { author_name : 1,_id : 0})
   console.log(authora_id) 
   let updated_price_author_name = authora_id.concat(bookas);
   
   res.send({msd : updated_price_author_name })
})
router.get("/update_prize", async function(req,res)
{  
   let update_prize = (await data_book.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1,_id : 0})).map(x => x =x.author_id)
   let unique_id = [...new Set(update_prize)];
   let author_name = await author.find( { author_id : { $in : unique_id } } ).select({author_name:  1,_id : 0})
   res.send({date : author_name})
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
