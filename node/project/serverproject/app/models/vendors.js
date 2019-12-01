var Mongoose = require('mongoose');
var status = ['Vendor','InProcess','Completed'];
var Schema = Mongoose.Schema;

var VendorsSchema = new Schema({
    userid : { type: Schema.Types.ObjectId, required: true },
    vendor : { type: String, required: true },
    detail :{ type: String},
    dateCreated :{type: Date, default: Date.now},
    dateDue :{type: Date, default: Date.now},
    status: { type: String, Enum: ['Vendor', 'In Process', 'Completed'], default: 'Vendor' },
    
    file : {
        
            name:        { type: String },
            originalname: { type: String }
        
    
    }

});

module.exports = Mongoose.model('vendors', VendorsSchema);
