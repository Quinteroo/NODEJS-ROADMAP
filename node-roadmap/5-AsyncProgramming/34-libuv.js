


//! LIVUB
// libuv es una librería escrita en C que se encarga de manejar operaciones de entrada
// y salida (E/S) de forma asíncrona. Fue creada originalmente para Node.js, pero es
// multiplataforma, así que también se puede usar en otros entornos.

// En Node.js, cuando haces operaciones como leer un archivo, establecer una conexión
// de red o ejecutar un temporizador con setTimeout, Node no maneja eso directamente.
// En su lugar, delega esas tareas a libuv, que se encarga de comunicarse con el sistema
// operativo para ejecutarlas de forma eficiente y no bloqueante.


// Cuando decimos que libuv se comunica con "el sistema operativo", nos referimos al sistema
// operativo del ordenador o servidor en el que está corriendo la aplicación Node.js.

// Es decir, cuando Node delega una operación, libuv la resuelve en base a las herramientas
// que le da el sistema operativo del entorno en el que corre tu app.


// ! herramientas del sistema operativo
// Las "herramientas" que el sistema operativo le da a libuv son principalmente llamadas al
// sistema (system calls). Estas llamadas permiten interactuar directamente con el hardware
// o con funciones internas del sistema operativo, sin que tu aplicación tenga que saber
// cómo funciona eso internamente.