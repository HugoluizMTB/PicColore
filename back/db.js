const Sequelize = require('sequelize');
const sequelize = new Sequelize('nopzttpp', 'nopzttpp', 'ZFXKRNdw_PEuGNKxNQuzIGrtQYkew7jo', {
    dialect: 'postgres',
    host: 'babar.db.elephantsql.com'
});
 
module.exports = sequelize;