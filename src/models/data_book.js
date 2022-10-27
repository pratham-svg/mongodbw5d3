const mongoose =  require('mongoose');
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
   
    name:String,
    author_id: {
      type: Number, required: true},
    price:Number,
    ratings:Number,


},{ timestamps : true});

module.exports = mongoose.model("data_book",userSchema) // it will make collection of user in your database
