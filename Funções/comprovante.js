const fs = require('fs');
const mime = require('mime-types');
const textos = require('../manifest.json');
const dataBase = require('../Database/data')


const comprovante =  async function(client, message, user) {
    if (message.isMedia === true || message.isMMS === true) {
        const buffer = await client.decryptFile(message);
        // At this point you can do whatever you want with the buffer
        // Most likely you want to write it into a file
        console.log(message.mimetype)
        await fs.writeFile(`./temp/${message.from}.${mime.extension(message.mimetype)}`, buffer, (err) => {
            if(err){
              return console.log(err)
            }
            client
            .sendText(message.from, textos.opcoes.segunda.op1)
            .then((result) => {
                console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
            });

            const index = dataBase.indexOf(user)
            dataBase.splice(index, 1);
        });
    }
}

module.exports  = comprovante;