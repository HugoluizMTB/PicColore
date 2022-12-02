const Sequelize = require('sequelize');
const database = require('../db');
const Unidade = require('./unidade')

const Cliente = database.define('cliente', {
    id_cliente: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_responsavel: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    cpf_responsavel: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nome_crianca: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tempo_desejado: {
        type: Sequelize.STRING,
        allowNull: false
    },
    hora_entrada: {
        type: Sequelize.STRING,
        allowNull: false
    },
    voucher: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

Cliente.belongsTo(Unidade, {
    constraint: true,
    foreignKey: 'id_unidade'
})

module.exports = Cliente;