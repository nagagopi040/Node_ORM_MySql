var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var sequelize = require('./db/db.js');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept')
    next();
});

app.use( (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, *')
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
        res.send(200)
    } else {
        next();
    }
});

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
// app.use('/products', require('./routes/products'))

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        app.listen(8080)
    })
    .catch(err => {
        console.error('Unable to connect to the database');
    });

module.exports = app;