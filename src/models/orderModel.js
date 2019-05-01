var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var OrderSchema = new Schema({
    orderID: {
        type: String,
        required: true,
        unique: true
    },
    orderDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Orders', OrderSchema);