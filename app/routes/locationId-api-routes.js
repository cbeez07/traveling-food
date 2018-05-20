var db = require("../models");
const Op = db.Sequelize.Op;

module.exports = function (app) {

  // initial read of all locations

  app.get("/api/LocationIds", function (req, res) {
    db.LocationId.findAll({
      where: {
        [Op.or]: [{ currently_open: true }, { kitchen_currently_open: true }]
      }
    }).then(function (dbLocationId) {
      res.json(dbLocationId);
    });
  });

  // add new location

  app.post("/api/LocationIds", function (req, res) {
    db.LocationId.create(req.body).then(function (dbLocationId) {
      res.json(dbLocationId);
    });
  });

  // delete location

  app.delete("/api/LocationIds/:place_id", function (req, res) {
    db.dbLocationId.destroy({
      where: {
        place_id: req.params.place_id
      }
    }).then(function (dbLocationId) {
      res.json(dbLocationId);
    });
  });

};
