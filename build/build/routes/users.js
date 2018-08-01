'use strict';

var _express = require('express');

var _userModel = require('../model/userModel');

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var router = (0, _express.Router)();

router.get('/', function (req, res, next) {
    _userModel.User.findAll().then(function (users) {
        res.json({ users: users });
    }).catch(function (err) {
        res.json({ error: err });
    });
});

router.get('/info', function (req, res, next) {
    var emailInput = req.query.email ? req.query.email : '';
    var query = { where: { email: emailInput } };
    _userModel.User.findOne(query).then(function (user) {
        if (user) res.json({ userInfo: user });else res.json({ message: "User doesn't exist" });
    }).catch(_sequelize2.default.ValidationError, function (err) {
        res.json({ validationerror: _sequelize2.default.ValidationError, error: err });
    });
});

router.post('/newUser', function (req, res, next) {
    var newUser = req.body;
    _userModel.User.findOne({ where: { email: newUser.email } }).then(function (user) {
        if (!user || Object.keys(user).length === 0) {
            _userModel.User.create(newUser).then(function (data) {
                res.json({ updatedInfo: data.dataValues, message: "Succesfully added" });
            }).catch(_sequelize2.default.ValidationError, function (err) {
                res.json({ validationerror: _sequelize2.default.ValidationError, error: err });
            });
        } else {
            res.json({ message: "User already exists" });
        }
    }).catch(_sequelize2.default.ValidationError, function (err) {
        res.json({ validationerror: _sequelize2.default.ValidationError, error: err });
    });
});

router.post('/update', function (req, res, next) {});

module.exports = router;