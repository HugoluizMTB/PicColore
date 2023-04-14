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
    event_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    event_address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    event_status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    event_is_freetime_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    event_freetime_price: {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    event_courtesy: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    event_price_1: {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    event_time_1: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    event_price_2: {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    event_time_2: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    event_price_3: {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    event_time_3: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    event_price_4: {
        type: Sequelize.FLOAT,
        allowNull: true
    },
    event_time_4: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    event_additional_minute: {
        type: Sequelize. INTEGER,
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