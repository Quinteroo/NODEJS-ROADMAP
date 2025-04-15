


//! EVENT EMITTER
//? https://nodejs.org/en/learn/asynchronous-work/the-nodejs-event-emitter

Claro. Según la documentación oficial de Node.js, un **EventEmitter** es un **módulo del núcleo** que permite a 
los objetos **emitir eventos** y **escuchar eventos**. Es una **base fundamental para la programación asíncrona en Node.js**.

### Qué es un EventEmitter

Un **EventEmitter** es una clase que forma parte del módulo `events` de Node.js. Puedes crear instancias de 
esta clase para que tus objetos:

- **emitan eventos** (`emit`)
- **escuchen eventos** (`on` o `once`)

Esto permite una **arquitectura basada en eventos**, en la que puedes **reaccionar a sucesos** en lugar de seguir un flujo 
lineal de llamadas.

---

### Ejemplo básico

```js
const EventEmitter = require('events');

const emisor = new EventEmitter();

emisor.on('saludo', (nombre) => {
  console.log(`Hola, ${nombre}`);
});

emisor.emit('saludo', 'Carlos');
```

**Salida:**  
`Hola, Carlos`

---

### Explicación paso a paso

1. Se importa el módulo `events`.
2. Se crea una instancia de `EventEmitter`.
3. Se define un **listener** con `.on('nombreEvento', callback)`.
4. Se **lanza el evento** con `.emit('nombreEvento', argumentos)`.

---

### Métodos comunes

- `.on(event, listener)` → Escucha el evento cada vez que ocurra
- `.once(event, listener)` → Escucha el evento **una sola vez**
- `.emit(event, args)` → Dispara el evento
- `.removeListener()` o `.off()` → Elimina un listener
- `.listenerCount()` → Número de listeners registrados

---

### ¿Dónde se usa?

Se usa internamente en muchos lugares de Node.js:
- **HTTP servers** (eventos como `'request'`)
- **Streams**
- **Procesos**
- **Bases de datos**
- Y puedes usarlo en tus propias apps para eventos personalizados

---

¿Quieres un ejemplo más complejo con múltiples eventos o integración con HTTP?
