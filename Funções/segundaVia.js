const textos = require('../manifest.json');

const segundaVia = function(client, message, user) {
    client
    .sendText(message.from, "CPF VALIDADO!")
    .then((result) => {
        //console.log('Result: ', result); //return object success
    })
    .catch((erro) => {
        console.error('Error when sending: ', erro); //return object error
    });
    user.state = 'menu'
    console.log(user)
    return
}

module.exports = segundaVia;