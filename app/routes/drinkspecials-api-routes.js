var db = require("../models");
const Op = db.Sequelize.Op;

module.exports = function (app) {

    // initial read of Drink special

    app.get("/api/DrinkSpecials", function (req, res) {
        db.DrinkSpecials.findAll({
        })
            .then(function (dbDrinkSpecials) {
                res.json(dbDrinkSpecials);
            });
    });

    // initial read of Drink special for one location

    app.get("/api/DrinkSpecials/:place_id", function (req, res) {
        db.DrinkSpecials.findAll({
            where: {
                place_id: req.params.place_id
            }
        }).then(function (dbDrinkSpecials) {
            res.json(dbDrinkSpecials);
        });
    });

    // add new Drink special

    app.post("/api/DrinkSpecials", function (req, res) {
        db.dbDrinkSpecial.create(req.body).then(function (dbDrinkSpecials) {
            res.json(dbDrinkSpecials);
        });
    });

    // delete Drink special

    app.delete("/api/DrinkSpecials/:id", function (req, res) {
        db.dbDrinkSpecials.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbDrinkSpecials) {
            res.json(dbDrinkSpecials);
        });
    });

};
