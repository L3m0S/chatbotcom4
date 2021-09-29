const mongoose = require('../database/mongodb');

const AlterarDataSchema = new mongoose.Schema({
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
        require: true,
        default: "Alterar Data de Vencimento"
    },

    documento: {
        type: String,
        require: true
    },
    vencimento: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const ChamadoAlterarData = mongoose.model('alterardatas', AlterarDataSchema);

module.exports = ChamadoAlterarData;

