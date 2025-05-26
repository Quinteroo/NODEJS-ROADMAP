const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const {getGeminiResponse} = require("./api/gemini")
require('dotenv').config()


const apiKey = process.env.GEMINI_API_KEY


if (!apiKey) {
  console.error("API Key de Gemini no configurada.");
  process.exit(1);
}

// Create a new client instance
const client = new Client({
    authStrategy: new LocalAuth()
});

// When the client received QR-Code
client.once('qr', (qr:string) => {
    qrcode.generate(qr, {small: true});
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Client is ready!');
});


// Listening to all incoming messages
client.on('message_create', async(message: {
    reply: any; body: string; 
}) => {

try {
    const aiResponse = await getGeminiResponse(apiKey,message.body);
    await message.reply(aiResponse);
    
  } catch (error) {
    console.error("Error al procesar mensaje:", error);
    await message.reply("Lo siento, hubo un error al procesar tu mensaje.");
  }
});

// Start your client
client.initialize();
