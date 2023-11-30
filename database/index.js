const Sequelize = require('sequelize');
const { dbConfigs } = require('../config');


const connection = new Sequelize(dbConfigs.database, dbConfigs.user, dbConfigs.password, {
    host: dbConfigs.host,
    dialect: dbConfigs.dialect
});

const db = {
    sequelize: connection,
    models: {}
};

// registering the models
db.models.Country = require('./country.model')(connection, Sequelize.DataTypes);
db.models.State = require('./state.model')(connection, Sequelize.DataTypes, db.models.Country);
db.models.City = require('./city.model')(connection, Sequelize.DataTypes, db.models.State);

// defining relations
db.models.Country.hasMany(db.models.State);
db.models.State.hasMany(db.models.City);

db.models.City.belongsTo(db.models.State);
db.models.State.belongsTo(db.models.Country);

module.exports = db;
