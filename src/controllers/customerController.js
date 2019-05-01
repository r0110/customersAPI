var Customer = require('../models/customerModel');

exports.addCust = function(req, res) {
    // res.send('Calling addCust function');
    if(!req.body) {
        return res.status(400).send('Request body missing.');
    }
    var model = new Customer(req.body);
    model.save()
        .then((doc) => {
            if(!doc || doc.length === 0) {
                return res.status(500).send('Server error.');
            }
            res.status(201).send(doc);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}

exports.showCust = function(req, res) {
    // res.send('Calling showCust function');
}

exports.changeCust = function(req, res) {
    // res.send('Calling changeCust function');
}

exports.deleteCust = function(req, res) {
    // res.send('Calling deleteCust function');
}