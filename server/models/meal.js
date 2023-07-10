//importing mongoose library and creating schema 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mealSchema = new Schema ({
   mealname: {type: String, trim: true, required: true},
   description: {type: String, trim: true, required: true}, //ingredients, nutrition info
   price: {type: String, trim: true, required: true}, 
   imageURL: {type: String, trim: true},
})

module.exports = mongoose.model("meal", mealSchema);
