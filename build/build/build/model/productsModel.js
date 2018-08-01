'use strict';

var Sequelize = require('sequelize');
var sequelize = require('../db/db');

exports.Products = sequelize.define('products', {
    productID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    productName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    specifications: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
});