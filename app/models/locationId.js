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
            allowNull: false,
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
            allowNull: false,
            validate: {
                len: [1, 200]
            }
        },
        location_city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 200]
            }
        },
        location_state: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 2]
            }
        },
        location_zip: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1, 5]
            }
        },
        open_sunday: {
            type: DataTypes.TIME,
            allowNull: false
        },
        open_monday: {
            type: DataTypes.TIME,
            allowNull: false
        },
        open_tuesday: {
            type: DataTypes.TIME,
            allowNull: false
        },
        open_wednesday: {
            type: DataTypes.TIME,
            allowNull: false
        },
        open_thursday: {
            type: DataTypes.TIME,
            allowNull: false
        },
        open_friday: {
            type: DataTypes.TIME,
            allowNull: false
        },
        open_saturday: {
            type: DataTypes.TIME,
            allowNull: false
        },
        close_sunday: {
            type: DataTypes.TIME,
            allowNull: false
        },
        close_monday: {
            type: DataTypes.TIME,
            allowNull: false
        },
        close_tuesday: {
            type: DataTypes.TIME,
            allowNull: false
        },
        close_wednesday: {
            type: DataTypes.TIME,
            allowNull: false
        },
        close_thursday: {
            type: DataTypes.TIME,
            allowNull: false
        },
        close_friday: {
            type: DataTypes.TIME,
            allowNull: false
        },
        close_saturday: {
            type: DataTypes.TIME,
            allowNull: false
        },
        kitchen_close_sunday: {
            type: DataTypes.TIME,
            allowNull: false
        },
        kitchen_close_monday: {
            type: DataTypes.TIME,
            allowNull: false
        },
        kitchen_close_tuesday: {
            type: DataTypes.TIME,
            allowNull: false
        },
        kitchen_close_wednesday: {
            type: DataTypes.TIME,
            allowNull: false
        },
        kitchen_close_thursday: {
            type: DataTypes.TIME,
            allowNull: false
        },
        kitchen_close_friday: {
            type: DataTypes.TIME,
            allowNull: false
        },
        kitchen_close_saturday: {
            type: DataTypes.TIME,
            allowNull: false
        },
        happy_hour_start: {
            type: DataTypes.TIME,
            allowNull: false
        },
        happy_hour_stop: {
            type: DataTypes.TIME,
            allowNull: false
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
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        place_long: {
            type: DataTypes.STRING,
            allowNull: false
        },
        place_lat: {
            type: DataTypes.STRING,
            allowNull: false
        },
        family_friendly: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        cuisine: {
            type: DataTypes.STRING,
            allowNull: false
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
