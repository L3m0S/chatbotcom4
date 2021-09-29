const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chatBot', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('Conectado ao BD...'))
    .catch(err => console.log('não foi possivel conectar ao BD...', err));
mongoose.Promise = global.Promise;

module.exports = mongoose;
