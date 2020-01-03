const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/GamePontal', {useUnifiedTopology: true ,useNewUrlParser: true})
    .then(() => {
        console.log("MongoDb conectado production!")
    }).catch(e => {
        const msg = 'Erro de conexão ao MongoDB!'
        console.log ('\x1b[41m%s\x1b[37m', msg, '\x1b[0m \n', e);
    })
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

mongoose.Promise = global.Promise;

`useFindAndModify`

module.exports = mongoose;
