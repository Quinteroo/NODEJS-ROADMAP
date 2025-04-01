📌 Instalación del entorno de desarrollo en Node.js
A diferencia de PHP, donde se necesita instalar un entorno que simule un servidor web, Node.js ya incluye su propio entorno de ejecución, 
por lo que no es necesario instalar software adicional como Apache o MAMP.

Es necesario instalarlo en local para poder trabajar porque con ello simulamos el servidor web que tendríamos al llevarlo a producción.

📌 Instalación de Node.js
Para desarrollar con Node.js, solo necesitas instalar Node.js en tu ordenador. Esto incluye:
✔️ El motor V8 para ejecutar JavaScript en el servidor.
✔️ Un gestor de paquetes (npm o pnpm).

1️⃣ Descarga Node.js desde la página oficial:
🔗 https://nodejs.org

2️⃣ Instálalo siguiendo las instrucciones de tu sistema operativo.

3️⃣ Verifica la instalación con:

sh
Copiar
Editar
node -v  # Ver versión de Node.js
npm -v   # Ver versión de npm


📌 Diferencias con PHP y MAMP

Característica	          PHP + MAMP	                                    Node.js
Servidor web             	Necesita Apache	                                Node.js tiene su propio servidor
Base de datos	            MySQL con MAMP	                                Cualquier DB (MySQL, MongoDB, PostgreSQL)
Ejecución	Código          PHP interpretado en cada petición	              Código JavaScript ejecutado en un proceso continuo
Manejo de peticiones    	Apache procesa cada petición por separado	      Node.js usa un solo proceso con event loop



//! Bases de datos en local?
puedes tener la base de datos en local cuando desarrollas con Node.js, y esto es común durante el desarrollo de aplicaciones.

¿Cómo funciona?
Base de datos en local:
Puedes instalar bases de datos como MySQL, PostgreSQL, MongoDB, SQLite, entre otras, directamente en tu máquina para pruebas y desarrollo.

Conexión desde Node.js:
Desde tu aplicación Node.js, puedes conectar y consultar esas bases de datos locales. Usualmente, 
esto se hace a través de bibliotecas o drivers específicos para cada base de datos.
