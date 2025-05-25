const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const axios = require("axios");
require("dotenv").config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const client = new Client({
  authStrategy: new LocalAuth(),
});

const greetedUsers = new Set();
const userMessageCounts = new Map();

//! `greetedUsers = new Set()`
// Sirve para guardar qué usuarios ya fueron saludados con "hola". Así evitas responder "¡Hola!" múltiples 
// veces al mismo usuario. Un `Set` es ideal porque no permite duplicados.

//! `userMessageCounts = new Map()`
// Lleva un control de cuántos mensajes ha enviado cada usuario en una hora. Es para limitar el uso 
// del bot (15 mensajes por hora). `Map` permite asociar datos (como contador y timestamp) a cada usuario.

// No vienen "de ningún lado", son estructuras estándar de JavaScript. Se inicializan vacías al principio del 
// script y se van llenando con los eventos entrantes (`message`).

// No son necesarias para que Gemini funcione, pero sí para controlar spam y respuestas duplicadas.


client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("BOT READY!");
});

//! esta parte se puede sacar a otro archivo para hacer el texto más lejible
async function getGeminiResponse(messageText) {
  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent",
      {
        contents: [
          {
            parts: [
              {
                text:
                  "Eres un bot de WhastApp creado por Josue Hoenicka, pero tienes uso de razonamiento porque eres Gemini la AI de Google, ahora debes responder el siguiente mensaje que acabas de recibir (y debes decir del mensaje [Bot Gemini AI creador por Josue Hoenicka] :" +
                  messageText,
              },
            ],
          },
        ],
      },
      {
        params: { key: GEMINI_API_KEY },
        headers: { "Content-Type": "application/json" },
      }
    );

    return (
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text.trim() ||
      "No pude generar una respuesta. Inténtalo nuevamente."
    );
  } catch (error) {
    console.error(
      "Error en la API de Gemini:",
      error.response?.data || error.message
    );
    return "Ocurrió un error al obtener una respuesta de la IA.";
  }
}

//! genera respuestas
client.on("message", async (message) => {
  const user = message.from;
  const messageText = message.body.toLowerCase().trim();

  if (messageText === "hola" && !greetedUsers.has(user)) {
    await message.reply("¡Hola! Soy el bot de Josue. ¿En qué puedo ayudarte?");
    greetedUsers.add(user);
    return;
  }

  if (messageText === "adiós") {
    await message.reply("¡Adiós! Fue un gusto hablar contigo.");
    return;
  }

  let userData = userMessageCounts.get(user);
  const now = Date.now();

  if (!userData) {
    userData = { count: 1, firstMessageTime: now };
  } else {
    const timeElapsed = now - userData.firstMessageTime;
    if (timeElapsed > 3600000) {
      userData.count = 1;
      userData.firstMessageTime = now;
    } else {
      userData.count += 1;
    }
  }

  console.log("userData: ", userData);

  userMessageCounts.set(user, userData);

  if (userData.count > 15) {
    await message.reply(
      "Lo siento, alcanzaste el límite de preguntas por hora."
    );
    return;
  }

  //! esta es la única parte estrictamente necesaria
  // Lo demás (greetedUsers, userMessageCounts, condiciones de saludo, despedida y límites por hora) son 
  // solo lógica adicional de control para:

  // - Evitar repetir saludos
  // - Detectar “adiós”
  // - Limitar el número de mensajes por usuario

  // Puedes quitar todo eso y el bot seguiría funcionando como generador de respuestas usando Gemini. 
  // Solo perderías esas reglas de interacción.


  try {
    const aiResponse = await getGeminiResponse(message.body);
    await message.reply(aiResponse);
  } catch (error) {
    console.error("Error al procesar mensaje:", error);
    await message.reply("Lo siento, hubo un error al procesar tu mensaje.");
  }
});

client.initialize();