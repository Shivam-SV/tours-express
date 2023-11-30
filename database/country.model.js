module.exports = (sequelize, DataTypes) => {
    const Country = sequelize.define('country',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,            
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        code: {
            type: DataTypes.STRING,
            len: [1,3],
            allowNull: true
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    });

    return Country;
};