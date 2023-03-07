import Sequelize from 'sequelize';
import database from '../db';

const Event_config = database.define('event_config', {
    event_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    event_address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    event_prices: {
        type: Sequelize.INTEGER
    },
    event_account_uid: {
        type: Sequelize.STRING,
    }
})

export default Event_config