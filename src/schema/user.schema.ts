import Sequelize from 'sequelize';
import database from '../config/database/connection';
import Transactions from './transaction.schema';
import Active_client from './active_client.schema';
import Log from './log.schema'

const User = database.define('user', {
    user_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        unique: true
    },
    user_email: {
        type: Sequelize.STRING(100),
        allowNull: true
    },
    user_password: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    user_fullname: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    user_phone_number: {
        type: Sequelize.STRING(13),
        allowNull: true
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