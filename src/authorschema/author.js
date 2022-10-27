const mongoose =  require('mongoose');
const { Schema } = mongoose;

const authorschema = new mongoose.Schema({
       
        author_id: { type: Number, required: true},
        author_name:  String,
        age:Number,
        address: String
    

},{ timestamps : true});

module.exports = mongoose.model("authors",authorschema) // it will make collection of user in your database
