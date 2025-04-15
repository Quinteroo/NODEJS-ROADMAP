


// ! EVENT LOOP
// ? https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick#what-is-the-event-loop


// ! Qué es el Event Loop en Node.js

// El Event Loop (bucle de eventos) es el mecanismo central de Node.js que se encarga de gestionar la ejecución de 
// código, eventos y tareas asíncronas.

// Dado que Node.js es single-threaded (usa un solo hilo de ejecución), no puede hacer varias cosas exactamente al mismo 
// tiempo como lo haría un programa multihilo. Pero gracias al Event Loop, puede manejar múltiples operaciones simultáneamente 
// de manera no bloqueante.

// ---

// ! Cómo funciona (idea general)

// 1. Node.js ejecuta el código sincrónico (funciones normales).
// 2. Cuando encuentra una operación asíncrona (como un `setTimeout`, una lectura de archivo o una petición HTTP), la delega al 
// sistema (libuv, que es la capa que maneja operaciones del sistema).
// 3. Cuando esa operación termina, se guarda una función (callback) que debe ejecutarse.
// 4. El Event Loop va revisando si hay callbacks pendientes, y cuando puede, los ejecuta uno a uno.

// ---

// ! Etapas principales del Event Loop

// El Event Loop tiene fases. Las más comunes:

// - Timers: Aquí se ejecutan los callbacks de `setTimeout` y `setInterval` cuando ha pasado el tiempo.
// - Pending Callbacks: Callbacks de operaciones que se han completado, pero se pospusieron.
// - Poll: Espera nuevas E/S (entrada/salida), como leer archivos o esperar conexiones.
// - Check: Se ejecutan funciones registradas con `setImmediate`.
// - Close Callbacks: Se ejecutan eventos como `'close'` en sockets o streams.


// Además, entre fase y fase, se pueden ejecutar funciones registradas con `process.nextTick()` o con promesas (`.then()`), que 
// tienen prioridad y se ejecutan antes que otras cosas.

// ---

// ! Ejemplo visual


console.log("Inicio");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});

process.nextTick(() => {
  console.log("nextTick");
});

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("Fin");


// Salida esperada:

```
Inicio
Fin
nextTick
Promise
setTimeout
setImmediate
```

// ---

// ! En resumen

// - El Event Loop permite que Node.js no se bloquee, y maneje múltiples tareas.
// - Node.js no espera a que una tarea termine, la delegará, y cuando termine, la vuelve a recoger.
// - Es la base del comportamiento asíncrono en Node.js.



