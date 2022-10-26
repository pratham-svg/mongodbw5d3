const mongoose =  require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
  BookName :  String, 
  AuthorName : String, 
  year : Number,
  price  : String,
  pages : Number,
  summary : mongoose.Schema.Types.Mixed, // we can send any type of data like string Number array and object,
  isDeleted : Boolean // true on book deletionf
},{ timestamps : true});

module.exports = mongoose.model("books",userSchema) // it will make collection of user in your database
