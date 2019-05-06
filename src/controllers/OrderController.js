var Order = require('../models/orderModel');

exports.addOrder = function(req, res) {
    // res.send('Calling addOrder function');
    if(!req.body) {
        return res.status(400).send('Order Infomation Missing');
    }
    var model = new Order(req.body);
    model.save()
        .then((doc) => {
            if(!doc || doc.length == 0){
                res.status(500).send('Server Error!')
            }
            res.status(201).send(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}

exports.showOrder = function(req, res) {
    // res.send('Calling showOrder function');
    if(!req.query.orderID) {
        return res.status(400).send('Missing URL parameter')
    }
    Order.findOne({
        email: req.query.orderID
    })
    .then((doc) => {
        res.json(doc);
    })
    .catch((err) => {
        res.status(500).json(err);
    });
}

exports.changeOrder = function(req, res) {
    // res.send('Calling changeOrder function');\
    if(!req.query.orderID) {
        return res.status(400).send('Missing URL parameter');
    }
    Order.findOneAndUpdate({
        orderID: req.query.orderID
    }, req.body, {new: true})
    .then((doc) => {
        res.json(doc);
    })
    .catch((err) => {
        res.status(500).json(err);
    });
}

exports.deleteOrder = function(req, res) {
    // res.send('Calling deleteOrder function');
    if(!req.query.orderID) {
        return res.status(400).send('Missing URL parameter');
    }
    Order.findOneAndDelete({
        orderID: req.query.orderID 
    })
    .then((doc) => {
        res.json(doc);
    })
    .catch((err) => {
        res.status(500).json(err);
    });
}