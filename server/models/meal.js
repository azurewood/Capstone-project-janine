//importing mongoose library and creating schema 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mealSchema = new Schema ({
   title: {type: String, trim: true, required: true},
   price: {type: String, trim: true, required: true}, 
   image: {type: String, trim: true},
})

module.exports = mongoose.model("meal", mealSchema);
