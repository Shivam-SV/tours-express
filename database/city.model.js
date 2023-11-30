module.exports = (sequelize, DataTypes, State) => {
    const City = sequelize.define('city',{
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
        // state_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: State,
        //         key: 'id'
        //     }
        // }
    });

    return City;
};