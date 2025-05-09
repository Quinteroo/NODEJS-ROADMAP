


// ! DONDE SE USAN LOS EVENT EMITTER ??
// Se usa internamente en muchos lugares de Node.js:
// - HTTP servers (eventos como 'request')
// - Streams
// - Procesos
// - Bases de datos
// - Y puedes usarlo en tus propias apps para eventos personalizados


// ! RAZONAMIENTO...
// ¿entonces cuando levantamos un servidor por ejemplo con express estamos usando internamente 
// un eventEmitter? tengo entendido que los servidores de node.js a diferencia por ejemplo de 
// los php que se ejecutan cuando entra una petición, estos están siempre "escuhando", 
// ¿es por esto?



// ! ✅ Sí: cuando levantas un servidor con Express (o directamente con Node.js), por debajo se está usando un `EventEmitter`.
// ! 🧠 ¿Por qué?
// Node.js está basado en eventos, y su núcleo está diseñado alrededor del Event Loop y 
// el sistema de eventos. Muchas de sus APIs, incluidas las de red como los servidores HTTP, 
// están construidas con la clase `EventEmitter`.



// ! 🔥 Ejemplo real:
// Cuando creas un servidor con Node:


const http = require("http");


const server = http.createServer((req, res) => {
  res.end("Hola mundo");
});


server.listen(3000, () => {
  console.log("Servidor escuchando en puerto 3000");
});


// Este `server` es una instancia de un EventEmitter que escucha eventos como:

- `'request'` //(cada vez que alguien accede al servidor),
  - `'connection'`
  - `'close'`
  - `'error'`

// Internamente hace esto:

const server1 = new EventEmitter();


//? Cuando alguien entra a `localhost:3000`, se emite un evento `'request'`, y el callback que tú defines se ejecuta.



// ! ⚙️ ¿Por qué Node.js siempre está “escuchando”?
// Porque se basa en el Event Loop. A diferencia de PHP (que termina el script en cada request), Node inicia el servidor una sola vez, y queda escuchando constantemente eventos, como:

// - peticiones HTTP,
// - timers (`setTimeout`, `setInterval`),
// - lectura de archivos,
// - WebSockets,
// - y mucho más.

// Es decir, el servidor sigue vivo gracias al event loop, y reacciona solo cuando recibe un evento.



// ! 🧩 Y Express...
// Express solo se monta encima del módulo `http`, y también usa EventEmitter para que puedas hacer cosas como:

app.get('/hola', (req, res) => {
  res.send('¡Hola!');
});


// Esto básicamente escucha eventos de tipo `'GET /hola'`.



// ! 📝 En resumen:
// - Node usa `EventEmitter` en muchos módulos (incluido HTTP).
// - Los servidores están siempre activos, esperando eventos (gracias al event loop).
// - PHP y otros entornos tradicionales funcionan de forma sincrónica por petición: se ejecutan y se terminan.
// - Node se queda vivo y escuchando eventos como un vigilante 👀

// ¿Quieres que te muestre un mini servidor en Express donde se vea el EventEmitter actuando más explícitamente?
