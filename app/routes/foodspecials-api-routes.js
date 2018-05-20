var db = require("../models");
const Op = db.Sequelize.Op;

module.exports = function (app) {

    // initial read of food special

    app.get("/api/FoodSpecials", function (req, res) {
        db.FoodSpecials.findAll({
        })
            .then(function (dbFoodSpecials) {
                res.json(dbFoodSpecials);
            });
    });

    // initial read of food special for one location

    app.get("/api/FoodSpecials/:place_id", function (req, res) {
        console.log("place_id", req.params.place_id);
        
        db.FoodSpecials.findAll({
            where: {
                place_id: req.params.place_id
            }
        }).then(function (dbFoodSpecials) {
            res.json(dbFoodSpecials);
        });
    });

    // add new food special

    app.post("/api/FoodSpecials", function (req, res) {
        console.log('foodPost', req.body);
        db.FoodSpecials.create(req.body).then(function (dbFoodSpecials) {
            res.json(dbFoodSpecials);
        });
    });

    // delete food special

    app.delete("/api/FoodSpecials/:id", function (req, res) {
        db.FoodSpecials.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbFoodSpecials) {
            res.json(dbFoodSpecials);
        });
    });

};
