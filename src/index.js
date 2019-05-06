var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');

// Routes:
var personRoute = require('./routes/person');
var customerRoute = require('./routes/customer');
var orderRoute = require('./routes/order');

//Database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/customers', {useNewUrlParser: true});

app.use((req, res, next) => {
    console.log(`${new Date().toString()} ===> ${req.originalUrl}`);
    next();
});

app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/test', personRoute);
app.use(customerRoute);
app.use(orderRoute);

app.use((req, res, next) => {
    res.status(404).send('Page not found, sorry!');
});

app.listen(PORT, ()=> {
    console.log(`Server has started on port ${PORT}`);
});


