var db = require("../models");

module.exports = function(app) {

// initial read of owner table/user check

  app.get("/api/OwnerIds", function(req, res) {
    db.LocationId.findAll({
      include: [db.OwnerId]
    }).then(function(LocationId) {
      res.json(LocationId);
    });
  });

// add new owner/user

  app.post("/api/OwnerIds", function(req, res) {
    db.OwnerIds.create(req.body).then(function(dbOwnerId) {
      res.json(dbOwnerId);
    });
  });

// delete owner/user

  app.delete("/api/OwnerIds/:userid", function(req, res) {
    db.OwnerId.destroy({
      where: {
        id: req.params.userid
      }
    }).then(function(dbOwnerId) {
      res.json(dbOwnerId);
    });
  });

};
