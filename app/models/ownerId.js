module.exports = function (sequelize, DataTypes) {
    var OwnerId = sequelize.define("OwnerId", {
        userid: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        secondaryId: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true  
            }
        },
        phone: {
            type: DataTypes.SMALLINT
        },
        creditCard: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            validate: {
                isCreditCard: true 
            }
        }
    });

    return OwnerId;
};
