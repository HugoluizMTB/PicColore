import Sequelize from 'sequelize';
import database from '../database/connection';
import Active_client from './active_client.model';
import Transactions from './transaction.model';

const Event = database.define('event', {
    event_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    event_address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    event_prices: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
}, {
    underscored: true
})

Event.hasMany(Active_client, {
    foreignKey: "event_id"
})

Event.hasMany(Transactions, {
    foreignKey: "event_id"
})

export default Event