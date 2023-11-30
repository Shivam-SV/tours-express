const express = require('express');
const app = express();
const db = require('../database');

// encode application/json requests
app.use(express.json());

// decode the encoded url data
app.use(express.urlencoded({ extended: true }));

(async () => {
    await db.sequelize.sync();
})();

module.exports = app;