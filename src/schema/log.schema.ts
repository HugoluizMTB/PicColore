import Sequelize from 'sequelize';
import database from '../config/database/connection';

const Log = database.define('log', {
    log_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    is_event_open: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
}, {
    underscored: true 
})



export default Log