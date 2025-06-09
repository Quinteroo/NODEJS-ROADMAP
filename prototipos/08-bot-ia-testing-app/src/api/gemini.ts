
import { promp } from "./promp";


export async function getGeminiResponse(apiKey:string | undefined, messageBody:string) {


  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  try {
    const respuesta = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: promp + messageBody }
            ]
          }
        ]
      })
    });

    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    const data = await respuesta.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || "No pude generar una respuesta."
  } catch (error) {
    console.log('Error al llamar a la API:', error);
  }
}
