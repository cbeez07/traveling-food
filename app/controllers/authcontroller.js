var exports = module.exports = {};
var db = require('../models');
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
}

exports.signin = function(req, res) {
 
    res.render('signin');
 
}

exports.dashboard = function(req, res) {
    
    db.OwnerId.findAll({
    })
        .then(function (OwnerId) {
            res.render('dashboard', {OwnerId: OwnerId})
    });
 
}

exports.user = function(req, res) {
    res.render('user');
}

exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/');
 
    });
 
}