'use strict';

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _db = require('../db/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.Products = _db2.default.define('products', {
    productID: {
        type: _sequelize2.default.INTEGER,
        allowNull: false,
        unique: 'compositeIndex'
    },
    productName: {
        type: _sequelize2.default.STRING,
        allowNull: false
    },
    price: {
        type: _sequelize2.default.DOUBLE,
        allowNull: false
    },
    specifications: {
        type: _sequelize2.default.STRING,
        allowNull: false
    },
    createdAt: _sequelize2.default.DATE,
    updatedAt: _sequelize2.default.DATE
});