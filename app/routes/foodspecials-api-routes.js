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

    // initial read of food special

    app.get("/api/FoodSpecials", function (req, res) {
        db.FoodSpecials.findAll({
            where: {
                [Op.or]: [{ allDay: true }, { [dow]: true }]
            }
        }).then(function (dbFoodSpecials) {
            res.json(dbFoodSpecials);
        });
    });


    // initial read of food specials for one location

    app.get("/api/FoodSpecials/:place_id", function (req, res) {
        db.FoodSpecials.findAll({
            where: {
                [Op.or]: [{ allDay: true }, { [dow]: true }],
                place_id: req.params.place_id
            }
        }).then(function (dbFoodSpecials) {
            res.json(dbFoodSpecials);
        });
    });

    // add new food special

    app.post("/api/FoodSpecials", function (req, res) {
        console.log('one', req.body);
        db.FoodSpecials.create(req.body).then(function (dbFoodSpecials) {
            res.json(dbFoodSpecials);
        });
    });

    // delete food special

    app.delete("/api/FoodSpecials/:id", function (req, res) {
        db.FoodSpecials.destroy({
            where: {
                place_id: req.params.place_id
            }
        }).then(function (dbFoodSpecials) {
            res.json(dbFoodSpecials);
        });
    });

};
