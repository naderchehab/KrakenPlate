'use strict';

var TransactionModel = require('../models/transaction');

module.exports = function (router) {

    var model = new TransactionModel();

    router.get('/send-money', function (req, res) {
        res.render('send-money', model);
    });
};
