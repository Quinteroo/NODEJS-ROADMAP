

//! QUÉ ES UN COMMAND LINE APP??
// Son aplicaciones que se ejecutan desde la terminal en lugar de una interfaz gráfica. 
// Se usan para automatizar tareas, herramientas de desarrollo, scripts de administración, etc.

// Características:

// * Reciben argumentos y opciones.
// * Suelen mostrar texto como salida.
// * Fáciles de integrar en pipelines.

// Ejemplo simple en Node.js con `commander`:


const { program } = require('commander');

program
  .name('saludo')
  .description('Saluda al usuario')
  .option('-n, --name <nombre>', 'Nombre del usuario');

program.parse();

const options = program.opts();
console.log(`Hola, ${options.name || 'mundo'}!`);


//! ¿DIFERENCIAS ENTRE CLA Y CLI??
// Node, son lo mismo. CLI significa "Command Line Interface", y un command line app es una
// aplicación que expone una interfaz de ese tipo. El término CLI es más común.


//! EJEMPLO DE UN CLI
// vite es un CLI. Es un paquete npm que se ejecuta desde la terminal para crear y
// servir proyectos frontend con configuración mínima y recarga rápida