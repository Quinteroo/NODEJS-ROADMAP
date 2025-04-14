



//! COMANDOS HABITUALES NPM
//* 1. npm init
// - Inicializa un proyecto Node.js creando un archivo package.json.

//* 2. npm init -y
// - Crea un package.json con valores predeterminados.

//* 3. npm install o npm i
// - Instala las dependencias del proyecto.
// npm install genera //?node_modules
// porque está instalando las dependencias necesarias para el funcionamiento de npm y cualquier
// posible configuración predeterminada del proyecto, incluso si no has especificado paquetes explícitos.


//* 4. npm install <paquete>
// - Instala un paquete y lo agrega a las dependencias.

//* 5. npm install <paquete> --save-dev o npm install <paquete> -D
// - Instala un paquete como una dependencia de desarrollo.

//* 6. npm install <paquete> --global o npm install <paquete> -g
// - Instala un paquete globalmente, disponible en todo el sistema.

//* 7. npm uninstall o npm remove
// - Elimina un paquete de las dependencias.

//* 8. npm uninstall <paquete>
// - Elimina un paquete de las dependencias.

//* 9. npm uninstall <paquete> --save-dev o npm uninstall <paquete> -D
// - Elimina un paquete de las dependencias de desarrollo.

//* 10. npm update
// - Actualiza las dependencias a las últimas versiones permitidas por el package.json.

//* 11. npm run
// - Ejecuta un script definido en el archivo package.json.

//* 12. npm run <script>
// - Ejecuta un script personalizado.
// Ejemplo: npm run start (si el script "start" está definido en el archivo package.json).

//* 13. npm audit
// - Escanea el proyecto en busca de vulnerabilidades de seguridad en las dependencias.

//* 14. npm audit
// - Muestra las vulnerabilidades.

//* 15. npm audit fix
// - Intenta corregir las vulnerabilidades de seguridad.

//* 16. npm list
// - Muestra las dependencias del proyecto y sus versiones.

//* 17. npm list
// - Muestra todas las dependencias.

//* 18. npm list -g
// - Muestra las dependencias instaladas globalmente.

//* 19. npm outdated
// - Muestra las dependencias que están desactualizadas.

//* 20. npm publish
// - Publica un paquete en el registro de npm para compartirlo con otros.

//* 21. npm publish
// - Publica el paquete en npm.

//* 22. npm login
// - Inicia sesión en npm para poder publicar paquetes.

//* 23. npm login
// - Permite autenticarte en tu cuenta de npm.

//* 24. npm config
// - Modifica la configuración global de npm.

//* 25. npm config set <key> <value>
// - Establece una configuración.

//* 26. npm config get <key>
// - Obtiene el valor de una configuración.

//* 27. npx
// - Ejecuta un paquete sin necesidad de instalarlo globalmente.

//* 28. npx <comando>
// - Ejecuta el comando de un paquete sin instalarlo previamente (como ejecutar create-react-app sin instalación previa).