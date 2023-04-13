import Sequelize from 'sequelize';
import database from '../database/connection';

const Transaction = database.define('transaction', {
    transaction_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        unique: true
    },
    transaction_value: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    payment_method: {
        type: Sequelize.CHAR(1),
        allowNull: false
    },
    event_id: {
        type: Sequelize.UUID,
        allowNull: false
    },
    user_id: {
        type: Sequelize.UUID,
        allowNull: false
    },
    client_id: {
        type: Sequelize.UUID,
        allowNull: false
    }
}, {
    underscored: true
})

export default Transaction