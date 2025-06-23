import pkg from 'whatsapp-web.js';
const { Client, LocalAuth } = pkg;
import qrcode from "qrcode-terminal"



const client = new Client({
    authStrategy: new LocalAuth()
});

const userStates = new Map<string, { step: string, data: any }>();


client.once('qr', qr => {
    qrcode.generate(qr, {small: true});
});


client.once('ready', () => {
    console.log('🤖 Bot is ready!');
});

client.on("message",async (message) => {
  const userId = message.from;
  const text = message.body.trim();
  const state = userStates.get(userId);

  if(!userStates.has(userId)){
    userStates.set(userId,{
        step : "",
        data: {
            greetings: false,
            bye: false,
        }
    })
    return
  }

  if(text.includes("!hola") && state?.data.greetings === false){
    state.data.greetings = true;
    userStates.set(userId,state);

    return client.sendMessage(message.from, 'hola caracola')
    // message.reply(...) Automáticamente hace referencia visual al mensaje original (como una “respuesta citada”).
  }



});

client.initialize();
