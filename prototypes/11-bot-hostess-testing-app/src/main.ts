import pkg from 'whatsapp-web.js';
const { Client, LocalAuth } = pkg;
import qrcode from "qrcode-terminal"
import { checkMessage } from './utils/checkMessage.js';
import { messageCustomer } from './messages/received.js';
import { replyCustomer } from './messages/replies.js';
import { getGeminiResponse } from './service/getGeminiResponse.js';



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
  const text = message.body.trim().toLowerCase()
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

  // GREETINGS MESSAGE
  if(checkMessage(text,messageCustomer.greeting) && state?.data.greetings === false){
    state.data.greetings = true;
    userStates.set(userId,state);

    setTimeout(()=>{
      message.reply(replyCustomer.greeting)
    },2000)
    return
  }

  //BYE MESSAGE
    if(checkMessage(text,messageCustomer.bye) && state?.data.bye === false){
    state.data.bye = true;
    userStates.set(userId,state);

    setTimeout(()=>{
    message.reply(replyCustomer.bye)
    },2000)
    return
  }

  try {
    const aiResponse = await getGeminiResponse(text)
      setTimeout(()=>{
      return message.reply(aiResponse)
    },3000)

  } catch (error) {
    console.log("❌ Error al generar respuesta", error)
  }

});

client.initialize();
