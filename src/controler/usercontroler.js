const usermodel = require('../models/usermodel.js')
const create_user = async function(req,res) 
{
   let data = req.body
   let SaveData = await usermodel.create(data)
   console.log({"message" : SaveData})
   res.send({msg : SaveData})
}
module.exports.create_user = create_user