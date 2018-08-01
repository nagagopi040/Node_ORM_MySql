'use strict';

var Sequelize = require('sequelize');
var sequelize = require('./db');

exports.Products = sequelize.define('products', {
    productID: {
        type: Sequelize.INTEGER
    },
    productName: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.DOUBLE
    },
    specifications: {
        type: Sequelize.STRING
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
});