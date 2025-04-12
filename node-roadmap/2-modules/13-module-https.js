


//! MÓDULO NATIVO HTTPS

//! ### 🌍 **¿Qué es `https` en Node.js?**  
// `https` es un módulo nativo de Node.js que permite crear servidores web seguros usando SSL/TLS.  


//! ### 🔗 **¿Cómo se relaciona con el "https://" que ves en las URL?**  
// Cuando navegas por una página con `https://`, significa que la comunicación entre tu navegador y 
// el servidor web **está cifrada** usando un certificado SSL/TLS. 
// Esto protege la información sensible, como contraseñas o datos bancarios.  

//* En Node.js, si quieres crear un servidor que use `https`, necesitas usar el módulo `https` y un certificado SSL.  



//!EJEMPLO DE UN SERVIDOR CON HTTPS

const https = require('https');
const fs = require('fs');


// Cargar los certificados SSL
const options = {
  key: fs.readFileSync('clave-privada.pem'),
  cert: fs.readFileSync('certificado.pem')
};


// Crear servidor HTTPS
https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('¡Servidor HTTPS en Node.js funcionando!');
}).listen(443, () => {
  console.log('Servidor HTTPS corriendo en https://localhost');
});




//! Diferencias entre `http` y `https`
//* | Característica |         `http`              `https`
// | Seguridad |              No cifrado 🔴        Cifrado con SSL/TLS 🟢
// | Puerto por defecto       80                   443 |
// | Uso recomendado          Contenido público    Información sensible


//! CASOS DE USO
//* si alojas tu mismo la aplicaicón, necesitar generar el certificado SSL con alguna empresa como Let'sEncrypt
// Usar `https` es imprescindible si manejas datos sensibles, como en **pasarelas de pago, login de usuarios,
// o transmisión de información privada**.

//* si despliegas en Heroku, Vercel etc
// Si vamos a desplegar en Heroku, Vercel, Render u otro servicio que ya maneje SSL, no necesitamos configurar un
// servidor HTTPS en tu código con el módulo https de Node.js.
// ya nos beneficiamos del que tienen estas platafomras.