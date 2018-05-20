var authController = require('../controllers/authcontroller.js');
var db = require('../models');
 
module.exports = function(app, passport) {
 
 
    app.get('/signup', authController.signup);
 
 
    app.get('/signin', authController.signin);
 
 
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',
 
            failureRedirect: '/dashboard'
        }
 
    ));

    app.get('/api/users', function(req, res){
        if(req.isAuthenticated()) {
            db.user.find({where: {
                id: req.user.id
            }
            }).then(function (dbUser) {
            res.json(dbUser);
            });
        }
    });

    app.get('/dashboard', isLoggedIn, authController.dashboard);

    app.get('/user', authController.user);
 
 
    app.get('/logout', authController.logout);
 
 
    app.post('/signin', passport.authenticate('local-signin', {
            successRedirect: '/dashboard',
 
            failureRedirect: '/signin'
        }
 
    ));
 
 
    function isLoggedIn(req, res, next) {
 
        if (req.isAuthenticated())
 
            return next();
 
        res.redirect('/signin');
 
    }
 
}