
const { Message, Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');


import { checkMessage } from "./utils/checkMessage";
import { messagesCustomer } from "./messages/messages";
import { replyCustomer } from "./messages/replies";
import { Message } from "whatsapp-web.js";



const client = new Client({
    authStrategy: new LocalAuth()
});


const userStates = new Map<string, { step: string, data:any }>();


client.once('qr', (qr:string) => {
    qrcode.generate(qr, {small: true});
});


client.once('ready', () => {
    console.log('Client is ready!');
});


client.on('message', async (message: Message) => {
  const userId = message.from;
  const text = message.body.trim();
  const state = userStates.get(userId);

  // Inicializar estado si no existe par anosobreescribirlo y borrarlo en cada mensjae dej usuario
  if (!state) {
    userStates.set(userId, {
      step: '',
      data: {
        greeting: '',
        parking: '',
        restaurants: '',
        guide: '',
        bye: ''
      }
    });
    return; // salimos hasta el siguiente mensaje
  }



  //SALUDO
  if (checkMessage(text,messagesCustomer.greeting) && state?.data.greeting === '') {
    state.data.greeting = "done"
    userStates.set(userId,state)

    setTimeout(()=>{
      message.reply(replyCustomer.greeting); //setTimeout es para simular una rspuesta humana, y tzrdar un poco en respuesta
    },4000)
  }

  //PARKING
  if (checkMessage(text,messagesCustomer.parking) && state?.data.parking === '') {
    state.data.parking = "done"
    userStates.set(userId,state)
    return message.reply(replyCustomer.parking);
  }

  //RESTAURANTS
  if (checkMessage(text,messagesCustomer.restaurants) && state?.data.restaurants === '') {
    state.data.restaurants = "done"
    userStates.set(userId,state)
    return message.reply(replyCustomer.restaurants);
  }

  //GUIDE
  if (checkMessage(text,messagesCustomer.guide) && state?.data.guide === '') {
    state.data.guide = "done"
    userStates.set(userId,state)
    return message.reply(replyCustomer.guide);
  }

  //BYE-BYE
  if (checkMessage(text,messagesCustomer.bye) && state?.data.bye === '') {
    userStates.delete(userId)
    return message.reply(replyCustomer.bye);
  }


});



client.initialize();
