var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;

// Routes:
var personRoute = require('./routes/person');


app.use((req, res, next) => {
    console.log(`${new Date().toString()} ===> ${req.originalUrl}`);
    next();
});
app.use(express.static('public'));
app.use(personRoute);
app.use((req, res, next) => {
    res.status(404).send('Page not found, sorry!');
});

app.listen(PORT, ()=> {
    console.log(`Server has started on port ${PORT}`);
});


