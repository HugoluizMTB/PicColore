( async () => {

    const database = require('./db');
    const Cliente = require('./models/cliente')
    const Unidade = require('./models/unidade')
    await database.sync();

})();