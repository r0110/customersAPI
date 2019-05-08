var express = require('express');
var router = express.Router();

var orderController = require('../controllers/OrderController');

// POST
router.post('/order',orderController.addOrder);

// GET
router.get('/order', orderController.showOrder);

//PUT
router.put('/order', orderController.changeOrder);

//DELETE
router.delete('/order', orderController.deleteOrder);

module.exports = router;