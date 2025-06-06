
const { Message, Client, LocalAuth } = require('whatsapp-web.js');
import { Message } from "whatsapp-web.js";

const qrcode = require('qrcode-terminal');

import { checkMessage } from "./utils/checkMessage";
import { messagesCustomer } from "./messages/messages";
import { replyCustomer } from "./messages/replies";



// Create a new client instance
const client = new Client({
    authStrategy: new LocalAuth()
});


//! Debemos guardar el estado del usuario
const userStates = new Map<string, { step: string, data: any }>();

// When the client received QR-Code
client.once('qr', (qr:string) => {
    qrcode.generate(qr, {small: true});
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Client is ready!');
});


// Listening to all incoming messages
client.on('message_create', async (message: Message) => {
  const userId = message.from;
  const text = message.body.trim();
  const state = userStates.get(userId);

    //SALUDO
    if (checkMessage(text,messagesCustomer.greeting)) {
        return message.reply(replyCustomer.greeting);
    }

  // Comando para mostrar menú
  if (text === '!menu') {
    return client.sendMessage(userId, {
      text: '¿Qué deseas hacer?',
      buttons: [
        { buttonId: 'reservar', buttonText: { displayText: 'Reservar habitación' }, type: 1 },
        { buttonId: 'consultar', buttonText: { displayText: 'Consultar reserva' }, type: 1 },
        { buttonId: 'agente', buttonText: { displayText: 'Hablar con agente' }, type: 1 }
      ],
      headerType: 1
    });
  }

  // Inicio de flujo de reserva
  if (text.toLowerCase() === 'reservar') {
    userStates.set(userId, { step: 'awaiting_date', data: {} });
    return message.reply('Por favor, indícame la fecha de la reserva en formato DD/MM/AA HH:MM');
  }

  // Captura de fecha
  if (state?.step === 'awaiting_date') {
    const fecha = text;

    userStates.set(userId, {
      step: 'awaiting_confirmation',
      data: { fecha }
    });

    return client.sendMessage(userId, {
      text: `¿Desea confirmar la reserva para el ${fecha}?`,
      buttons: [
        { buttonId: 'confirmar', buttonText: { displayText: 'Confirmar reserva' }, type: 1 }
      ],
      headerType: 1
    });
  }

  // Confirmación
  if (text.toLowerCase() === 'confirmar reserva') {
    const reserva = state?.data?.fecha;

    if (!reserva) {
      return message.reply('No tengo una fecha registrada. Escriba "reservar" para empezar.');
    }

    userStates.delete(userId); // limpieza del estado

    return message.reply(`¡Estupendo! Su reserva para el ${reserva} ha sido confirmada. Si no va a venir, por favor llame al 666555444 para cancelarla.`);
  }
});

// Start your client
client.initialize();
