const mongoose = require('../database/mongodb');

const interesseSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    tel: {
        type: String,
        require: true
    },
    interesse: {
        type: String,
        require: true
    },
    cep: {
        type: String,
    },
    numero: {
        type: String,
    },
    createdAt: {
        type: Date, 
        default: Date.now
    }
});

const ChamadoInteresse = mongoose.model('Interesse', interesseSchema);

module.exports = ChamadoInteresse;