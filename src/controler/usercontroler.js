const usermodel = require('../models/data_book.js')
const author = require('../authorschema/author')
const create_user = async function(req,res) 
{
   let data = req.body
   let SaveData = await usermodel.create(data)
   console.log({"message" : SaveData})
   res.send({msg : SaveData})
}
const create_author = async function(req,res) 
{
   let data = req.body
   let SaveData = await author.create(data)
   console.log({"message" : SaveData})
   res.send({msg : SaveData})
}
module.exports.create_user = create_user
module.exports.create_author = create_author