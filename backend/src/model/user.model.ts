import Sequelize from 'sequelize';
import database from '../database/connection.js';
import Transactions from './transaction.model.js';
import Active_client from './active_client.model.js';
import Log from './log.model.js'

const User = database.define('user', {
    user_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        unique: true
    },
    user_login: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
    },
    user_password: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    user_fullname: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    user_admin: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    user_supervisor: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
}, {
    underscored: true 
})

User.hasMany(Transactions, {
    foreignKey: "user_id"
})

User.hasMany(Active_client, {
    foreignKey: "user_id"
})

User.hasMany(Log, {
    foreignKey: "user_id_entry"
})

User.hasMany(Log, {
    foreignKey: "user_id_closing"
})

export default User