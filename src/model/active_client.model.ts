import Sequelize from 'sequelize';
import database from '../database/connection';

const Active_client = database.define('active_client', {
    active_client_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true
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

export default Active_client