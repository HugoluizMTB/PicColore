import Sequelize from 'sequelize';
import database from '../db.js';

const Client = database.define('client', {
    client_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    responsible_full_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    child_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    responsible_cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    responsible_cellphone_number: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    underscored: true,
    primaryKey: 'client_id', 
})

export default Client