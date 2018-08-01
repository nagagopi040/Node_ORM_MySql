'use strict';

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _db = require('../db/db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.User = _db2.default.define('user', {
    id: {
        type: _sequelize2.default.INTEGER,
        unique: 'compositeIndex',
        autoIncrement: true,
        allowNull: false
    },
    firstName: {
        type: _sequelize2.default.STRING,
        allowNull: false
    },
    lastName: {
        type: _sequelize2.default.STRING,
        allowNull: false
    },
    email: {
        type: _sequelize2.default.STRING,
        allowNull: false,
        primaryKey: true,
        validate: {
            isEmail: true
            // is: ["^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,6})$"],
        },
        get: function get() {
            return this.getDataValue('email');
        }
    },
    createdAt: _sequelize2.default.DATE,
    updatedAt: _sequelize2.default.DATE
}, {
    getterMethods: {
        fullName: function fullName() {
            return this.firstName + ' ' + this.lastName;
        }
    },

    setterMethods: {
        fullName: function fullName(value) {
            var names = value.split(' ');

            this.setDataValue('firstname', names.slice(0, -1).join(' '));
            this.setDataValue('lastname', names.slice(-1).join(' '));
        }
    }
}, {
    tableName: 'users'
});