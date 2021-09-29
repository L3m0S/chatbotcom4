const express = require('express');


const app = express();

app.use(express.json());

//Rota para salvar os chamados de interesse no BD
require('./controllers/chamadosController')(app);

app.listen(5000, () => {
    console.log(`Server escutando na porta 5000...`)
});