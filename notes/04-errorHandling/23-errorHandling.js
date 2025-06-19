


//! MANEJO DE ERRORES
//? Error handling o manejo de errores es el proceso de detectar, gestionar y responder a errores que pueden ocurrir mientras se
//? ejecuta una aplicación.

// En Node.js (y en cualquier lenguaje), los errores pueden venir de muchos lados:

//- Archivos que no existen (fs.readFile)
//- Problemas en la red (APIs, bases de datos)
//- Código mal escrito
//- Datos inesperados



//! ES NECESARIO
//? El manejo de errores es responsabilidad directa del desarrollador. No es algo que ocurra automáticamente ni que
//? el lenguaje controle por sí solo.
//? Es parte fundamental del diseño y la escritura del código.

//! Incluir buen manejo de errores significa:
// - Anticipar qué cosas pueden fallar.
// - Escribir código que lo detecte y responda de forma útil.
// - Asegurar que el programa no se caiga innecesariamente.
// - Informar correctamente al usuario o al sistema (logs, respuestas HTTP, alertas, etc).