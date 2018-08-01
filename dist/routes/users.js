'use strict';

var _express = require('express');

var _userModel = require('../model/userModel');

var router = (0, _express.Router)();

router.get('/', function (req, res, next) {
    _userModel.User.findAll().then(function (users) {
        res.json({ users: users });
    });
});

router.get('/info', function (req, res, next) {
    var emailInput = req.query.email ? req.query.email : '';
    // var queryAttributes = ['firstName', 'lastName', 'email']
    var query = { where: { email: emailInput } };
    _userModel.User.findOne(query).then(function (user) {
        if (user) res.json({ userInfo: user });else res.json({ message: "User doesn't exist" });
    });
});

router.post('/newUser', function (req, res, next) {
    var newUser = req.body;
    // var queryAttributes = ['firstName', 'lastName', 'email']
    _userModel.User.findOne({ where: { email: newUser.email } }).then(function (user) {
        if (!user || Object.keys(user).length === 0) {
            _userModel.User.create(newUser).then(function (data) {
                res.json({ updatedInfo: data.dataValues, message: "Succesfully added" });
            });
        } else {
            res.json({ message: "User already exists" });
        }
    });
});

router.post('/update', function (req, res, next) {});

module.exports = router;