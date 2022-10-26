const mongoose =  require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  BookName :  String, 
  AuthorName : String, 
  year : Number,
  price  : String,
  pages : Number

},{ timestamps : true});

module.exports = mongoose.model("books",userSchema) // it will make collection of user in your database
