const Sequelize = require('sequelize');
const database = require('../db');

const Unidade = database.define('unidade', {
    id_unidade: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    local_unidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = Unidade;