'use strict';

var _express = require('express');

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var router = (0, _express.Router)();

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;