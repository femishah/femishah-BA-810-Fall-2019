var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var statuses = ['Gadget','In Process','Completed'];

var GadgetSchema = new Schema({
  
        userId: { type: Schema.Types.ObjectId},
        gadget: { type: String, required: true },
        detail: { type: String },
        dateCreate: { type: Date, default: Date.now },
        dateDue: { type: Date, default: Date.now },
        status: { type: String, enum: statuses, default: 'Gadget' }
    });
    

module.exports = Mongoose.model('Gadgets', GadgetSchema);