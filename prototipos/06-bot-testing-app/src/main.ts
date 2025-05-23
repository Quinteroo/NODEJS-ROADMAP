
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Create a new client instance
const client = new Client({
    authStrategy: new LocalAuth()
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Client is ready!');
});

// When the client received QR-Code
client.once('qr', (qr:string) => {
    qrcode.generate(qr, {small: true});
});

// Listening to all incoming messages
client.on('message_create', (message: {
    reply: any; body: string; 
}) => {
	if (message.body === '!ping') {
		// reply back "pong" directly to the message
		message.reply('pong');
	}
});

// Start your client
client.initialize();
