import Sequelize from 'sequelize';
import database from '../config/database/connection';

const Children = database.define('children', {
    child_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    child_fullname: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
}, {
    underscored: true,
    freezeTableName: true
})


export default Children