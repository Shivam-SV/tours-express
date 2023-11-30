module.exports = (sequelize, DataTypes, Country) => {
    const State = sequelize.define('state',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,            
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        // country_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: Country,
        //         key: 'id'
        //     }
        // },
    });

    return State;
};