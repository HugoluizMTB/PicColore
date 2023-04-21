import Sequelize from 'sequelize';
import database from '../database/connection';
import Children from './child.model';
import Active_client from './active_client.model'
import Transactions from './transaction.model'

const Client = database.define('client', {
    client_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    client_fullname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    client_cpf: {
        type: Sequelize.CHAR(11),
        allowNull: false,
        unique: true
    },
    client_phone_number: {
        type: Sequelize.STRING(13),
        allowNull: false
    },
    client_visits: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    underscored: true 
})

Client.hasMany(Children, {
    foreignKey: "client_id"
})

Client.hasOne(Active_client, {
    foreignKey: "client_id"
})

Client.hasMany(Transactions, {
    foreignKey: "client_id"
})

export default Client