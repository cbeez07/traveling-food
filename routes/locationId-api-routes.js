var db = require("../models");
const Op = db.Sequelize.Op;

// console.log(dow);

function dowFunction() {
  var d = new Date();
  var weekday = new Array(7);
  weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
  var n = weekday[d.getDay()];
  return n;
};

module.exports = function (app) {

  // initial read of locations

  app.get("/api/LocationIds", function (req, res) {
    db.LocationId.findAll({
      where: {
        [Op.or]: [{ currently_open: true }, { kitchen_currently_open: true }]
      }
    }).then(function (dbLocationId) {
      res.json(dbLocationId);
    });
  });

  // set location open or closed

  app.get("/api/LocationOpen", function (req, res) {
    db.LocationId.findAll({
      where: {
        [Op.or]: [{ currently_open: true }, { kitchen_currently_open: true }]
      }
    }).then(function (dbLocationId) {
      console.log(res.json(dbLocationId));
      res.json(dbLocationId);
    });
  });

  // add new location

  app.post("/api/LocationIds", function (req, res) {
    db.dbLocationId.create(req.body).then(function (dbLocationId) {
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
