//importing mongoose library and creating schema 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema ({
   // TOOD: add the user to the order
   // user: {
   //    type: Schema.Types.ObjectId,
   //    ref: 'user',
   //    required: true
   // },
   meals: [
      {
         meal: {type: Schema.Types.ObjectId, ref: 'meal', required: true},
         quantity: {type: Number, default: 1}
      }
   ],
   totalprice: {type: Number,required: true},
   status: {type: String, enum: ['Draft', 'Paid', 'Done'], default: 'Draft'}
}, {
   timestamps: true
});

module.exports = mongoose.model("order", orderSchema);