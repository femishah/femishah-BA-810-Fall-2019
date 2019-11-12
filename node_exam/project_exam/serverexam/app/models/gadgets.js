var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;
//Gadgets models file
var gadgetSchema = new Schema({
    Yoo: { type: String, required: true },
    Hoo: { type: Number, default: 10 },
   });

module.exports = Mongoose.model('gadgets', gadgetSchema);
