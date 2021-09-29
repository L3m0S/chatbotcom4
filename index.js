const venom = require('venom-bot');
const mainFunction = require('./main');


venom
  .create({headless: false})
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

async function start(client) {
  await client.onMessage((message) => {
    if (message.isGroupMsg === false) {
        mainFunction(client, message)
    };
  });

  
}


