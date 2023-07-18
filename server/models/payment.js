//importing the 'mongoose' module
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//defining the paymentSchema using mongoose.schema
const paymentSchema = new Schema({
    userId: {type: Schema.Types.ObjectId, ref: 'user', required: true}, //referencing the 'user' model and the objectId that is auto generated from mongodb
    orderId: {type: Schema.Types.ObjectId, ref: 'order', required: true},
    amount: {type: Number, required: true},
    paymentMethod: {type: String, required: true},
    paymentStatus: {type: String, required: true},
   //do not put card information in here for security reasons. 
   
});

module.exports = mongoose.model("payment", paymentSchema)