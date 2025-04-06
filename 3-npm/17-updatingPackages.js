
// ! UPDATING PACKAGES


// *1. npm update
// Este comando actualiza los paquetes listados en el archivo package.json a la versión más reciente permitida
// por las restricciones de versión. Por ejemplo, si tienes "^1.2.3", se actualizará hasta la última versión
// menor compatible, como 1.9.0, pero no a la 2.0.0.

// *2. npm outdated
// Muestra los paquetes que están desactualizados. Verás tres columnas: la versión instalada actualmente, la
// versión que permite el package.json y la última versión disponible en el registro de npm.

// *3. Actualizar un paquete específico
// Puedes usar el comando:
// ?npm install nombre-del-paquete@latest
// Esto instala la última versión disponible del paquete, incluso si es una versión mayor que la
// permitida por tu package.json.




// !Actualizar paquetes globales:
// *1. npm update -g
// Actualiza todos los paquetes instalados globalmente en tu sistema.

// *2. npm outdated -g
// Muestra una lista de paquetes globales que están desactualizados.




//! Otros puntos clave:
// Si quieres que un paquete siempre se mantenga actualizado a la última versión posible, puedes escribir "*" o "latest" en
// el campo de versión en tu package.json. Sin embargo, esto no se recomienda para entornos de producción, porque
// podrían introducirse cambios incompatibles que rompan tu aplicación.

// Para aplicar cambios de versión mayor, lo ideal es revisar las notas de la nueva versión del paquete y
// actualizar manualmente. Esto te permite controlar los cambios y hacer pruebas antes de usar una versión que
// pueda tener diferencias importantes.

