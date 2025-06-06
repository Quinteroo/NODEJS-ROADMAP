"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const checkMessage_1 = require("./utils/checkMessage");
const messages_1 = require("./messages/messages");
const replies_1 = require("./messages/replies");
// Create a new client instance
const client = new Client({
    authStrategy: new LocalAuth()
});
// When the client received QR-Code
client.once('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});
// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Client is ready!');
});
// Listening to all incoming messages
client.on('message_create', (message) => {
    if (message.body === '!ping') {
        // reply back "pong" directly to the message
        message.reply('pong');
    }
    if ((0, checkMessage_1.checkMessage)(message.body, messages_1.messagesCustomer.greeting)) {
        message.reply(replies_1.replyCustomer.greeting);
    }
});
// Start your client
client.initialize();
