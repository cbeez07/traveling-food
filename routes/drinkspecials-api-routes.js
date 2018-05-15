var db = require("../models");
const Op = db.Sequelize.Op;

function dowFunction() {
    var d = new Date();
    var weekday = new Array(7);
    weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    var n = weekday[d.getDay()];
    return n;
};

module.exports = function (app) {

    var dow = dowFunction();

    // initial read of Drink special

    app.get("/api/DrinkSpecials", function (req, res) {
        db.DrinkSpecials.findAll({
            where: {
                [Op.or]: [{ daily: true }, { [dow]: true }]
            }
        }).then(function (dbDrinkSpecials) {
            res.json(dbDrinkSpecials);
        });
    });

    // initial read of Drink special for one location

    app.get("/api/DrinkSpecials/:place_id", function (req, res) {
        db.DrinkSpecials.findAll({
            where: {
                [Op.or]: [{ daily: true }, { [dow]: true }],
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
                place_id: req.params.place_id
            }
        }).then(function (dbDrinkSpecials) {
            res.json(dbDrinkSpecials);
        });
    });

};
