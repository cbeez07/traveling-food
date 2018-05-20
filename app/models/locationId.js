module.exports = function (sequelize, DataTypes) {
    var LocationId = sequelize.define("LocationId", {
        userid: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20]
            }
        },
        secondaryId: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 20]
            }
        },
        location_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 200]
            }
        },
        location_address: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 200]
            }
        },
        location_city: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 200]
            }
        },
        location_state: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 2]
            }
        },
        location_zip: {
            type: DataTypes.INTEGER,
            validate: {
                len: [1, 5]
            }
        },
        open_sunday: {
            type: DataTypes.TIME,
        },
        open_monday: {
            type: DataTypes.TIME,
           
        },
        open_tuesday: {
            type: DataTypes.TIME,
           
        },
        open_wednesday: {
            type: DataTypes.TIME,
           
        },
        open_thursday: {
            type: DataTypes.TIME,
           
        },
        open_friday: {
            type: DataTypes.TIME,
           
        },
        open_saturday: {
            type: DataTypes.TIME,
           
        },
        close_sunday: {
            type: DataTypes.TIME,
           
        },
        close_monday: {
            type: DataTypes.TIME,
           
        },
        close_tuesday: {
            type: DataTypes.TIME,
           
        },
        close_wednesday: {
            type: DataTypes.TIME,
           
        },
        close_thursday: {
            type: DataTypes.TIME,
           
        },
        close_friday: {
            type: DataTypes.TIME,
           
        },
        close_saturday: {
            type: DataTypes.TIME,
           
        },
        kitchen_close_sunday: {
            type: DataTypes.TIME,
           
        },
        kitchen_close_monday: {
            type: DataTypes.TIME,
           
        },
        kitchen_close_tuesday: {
            type: DataTypes.TIME,
           
        },
        kitchen_close_wednesday: {
            type: DataTypes.TIME,
           
        },
        kitchen_close_thursday: {
            type: DataTypes.TIME,
           
        },
        kitchen_close_friday: {
            type: DataTypes.TIME,
           
        },
        kitchen_close_saturday: {
            type: DataTypes.TIME,
           
        },
        happy_hour_start: {
            type: DataTypes.TIME,
           
        },
        happy_hour_stop: {
            type: DataTypes.TIME,
           
        },
        currently_open: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        kitchen_currently_open: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        place_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            validate: {
                len: [1, 50]
            }
        },
        place_long: {
            type: DataTypes.STRING,
           
        },
        place_lat: {
            type: DataTypes.STRING,
           
        },
        family_friendly: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        cuisine: {
            type: DataTypes.STRING,
           
        }
    });
    LocationId.associate = function (models) {
        LocationId.belongsTo(models.OwnerId, {
            foreignKey: {
                onDelete: "cascade",
                allowNull: false
            }
        });
    };

    return LocationId;
};
