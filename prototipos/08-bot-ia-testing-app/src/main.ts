const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
import { Message } from "whatsapp-web.js";

const {getGeminiResponse} = require("./api/gemini")
require('dotenv').config()

import { checkMessage } from "./utils/checkMessage";
import { messagesCustomer } from "./messages/messages";
import { replyCustomer } from "./messages/replies";


const apiKey = process.env.GEMINI_API_KEY

if (!apiKey) {
  console.error("API Key de Gemini no configurada.");
  process.exit(1);
}

const userStates = new Map<string, {step:string, data:any}>()


const client = new Client({
    authStrategy: new LocalAuth()
});


client.on('qr', (qr:string) => {
    qrcode.generate(qr, {small: true});
});


client.once('ready', () => {
    console.log('Client is ready!');
});



client.on('message', async(message:Message) => {

  const userId = message.from;
  const text = message.body.trim();
  
  // Inicializar estado si no existe par anosobreescribirlo y borrarlo en cada mensjae dej usuario
  if (!userStates.has(userId)) {
    userStates.set(userId, {
      step: '',
      data: {
        greeting: false,
        bye: false
      }
    });
    return;
  }
  
  const state = userStates.get(userId);

  //SALUDO
  if (checkMessage(text,messagesCustomer.greeting) && state?.data.greeting === false) {
    state.data.greeting = true
    userStates.set(userId,state)

    setTimeout(()=>{
      message.reply(replyCustomer.greeting); //setTimeout es para simular una rspuesta humana, y tzrdar un poco en respuesta
    },2000)
    
    return
  }


  //BYE-BYE
  if (checkMessage(text,messagesCustomer.bye) && state?.data.bye === false) {
    userStates.delete(userId)
    return message.reply(replyCustomer.bye);
  }



  try {
    const aiResponse = await getGeminiResponse(apiKey,text);
    await message.reply(aiResponse);
    
  } catch (error) {
    console.error("Error al procesar mensaje:", error);
    await message.reply("Lo siento, hubo un error al procesar tu mensaje.");
  }


});



client.initialize();
