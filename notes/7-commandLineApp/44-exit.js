

//! EXIT
//? https://nodejs.org/api/process.html#event-exit
// El evento `exit` del proceso en Node.js se dispara cuando la app está por terminar. 
// Puedes usarlo para hacer limpieza final.

// El *exit code* es el número que el proceso devuelve al sistema operativo al salir. 
// Por convención:

// * `0` significa salida exitosa.
// * Cualquier otro valor indica un error.



// Ejemplo:
process.on('exit', (code) => {
  console.log(`Saliendo con código ${code}`);
});

process.exit(1); // termina el proceso con código 1



//! QUÉ ES TERMINAR APP¿¿
// ¡Exacto! Node.js está basado en un event loop, lo que significa que está diseñado para mantener
// el proceso activo esperando eventos, como peticiones HTTP o mensajes de eventos. Esto hace que
// el proceso se mantenga "vivo" mientras haya tareas pendientes que atender.

// Sin embargo, cuando todas las tareas se completan y no hay más eventos en la cola del event loop
// (como consultas a base de datos, peticiones HTTP, etc.), el proceso de Node.js termina automáticamente.
// En ese punto es cuando se dispara el evento `exit`.

// En resumen:

// * Mientras haya tareas pendientes, Node.js sigue ejecutándose.
// * Cuando todas las tareas se completan, Node.js termina el proceso y dispara el evento `exit`.

// Por ejemplo, un servidor HTTP se queda "escuchando" porque espera peticiones, pero si el server se cierra
// o no hay peticiones, el proceso terminará.


//? UN EJEMPLO
// un usuario entra en mi web, al entrar en la web, está solicitando a la base de datos imágenes, texto,
// formularios, etc... mientras está navegando en la web el usuario está "haciendo peticiones al servidor"
// y cuando sale de la web, si no hay nadie más navegando en ella, la app se cierra
