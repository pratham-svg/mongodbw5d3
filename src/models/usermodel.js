const mongoose =  require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  bookName :  String, 
  authorName : String, 
  tags : [ String],
  date : { type : Date,
   default : Date.now },
  ispublished : { type : Boolean , default : false } ,
  sales : { type : Number,
    default : 10 }

},{ timestamps : true});

module.exports = mongoose.model("bookname",userSchema) // it will make collection of user in your database
