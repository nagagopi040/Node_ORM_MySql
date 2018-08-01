'use strict';

var Sequelize = require('sequelize');
var sequelize = require('./db');

exports.User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        unique: 'compositeIndex',
        autoIncrement: true
    },
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
});