var Order = require('../models/orderModel');

exports.addOrder = function(req, res) {
    res.send('Calling addOrder function');
}

exports.showOrder = function(req, res) {
    res.send('Calling showOrder function');
}

exports.changeOrder = function(req, res) {
    res.send('Calling changeOrder function');
}

exports.deleteOrder = function(req, res) {
    res.send('Calling deleteOrder function');
}