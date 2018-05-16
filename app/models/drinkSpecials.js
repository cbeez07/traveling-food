module.exports = function (sequelize, DataTypes) {
    var DrinkSpecials = sequelize.define("DrinkSpecials", {
        place_id: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        special: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 160]
            }
        },
        price: {
            type: DataTypes.DECIMAL(10,2)
        },
        happyHour: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        daily: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        sunday: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        monday: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        tuesday: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        wednesday: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        thursday: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        friday: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        saturday: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    DrinkSpecials.associate = function (models) {
        DrinkSpecials.belongsTo(models.LocationId, {
            foreignKey: {
                onDelete: "cascade",
                allowNull: false
            }
        });
    };

    return DrinkSpecials;
};
