'use strict';

var Sequelize = require('sequelize');
var sequelize = new Sequelize({
    database: 'sampledb',
    username: 'root',
    password: null,
    dialect: 'mysql'
});

module.exports = sequelize;