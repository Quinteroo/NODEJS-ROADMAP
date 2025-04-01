


//! CÓMO HA FUNCIONADO TRADICIONALMENTE INTERNET CON PHP??
teniendo en cuenta las tres cosas que nos hace falta

- el analizador de PHP (módulo CGI o servidor) >> programa que interpreta y ejecuta el código PHP en el servidor
- un servidor web >> software que gestiona las peticiones HTTP y sirve los archivos adecuados a los clientes (navegadores).
- un navegador web >> es el software que el usuario utiliza para acceder a las páginas webs

1. desde el navegador preguntamos por medio de internet que quiere visitar pagine.php
2. el servidor, que puede ser Apache o Ngix busca el documento.
3. el servidor le pide a PHP que ejecute el archivo PHP que ha encontrado
4. PHP llama a la base de datos, si lo necesita, y genera el html que le devuelve al servidor
5. el servidor se la entrega al navegador del usuario.


//! EL SERVIDOR
El servidor en este caso funciona como un enlace.
El serivdor está dividido en dos partes:

//* servidor (software) como Apache o Ngix
El software de servidor es un programa que gestiona peticiones y entrega contenido.



//* servidor (hardware) el "ordenador" donde se ejecuta
un servidor es un ordenador, pero no es cualquier ordenador. 

Es una máquina configurada específicamente para almacenar, procesar y servir contenido a otros dispositivos a través de internet 
o de una red privada.

En términos físicos, un servidor puede ser:
- Un ordenador potente en un centro de datos de una empresa.
- Un ordenador en tu casa si lo configuras para servir páginas web.
- Un servidor en la nube (como AWS, Google Cloud, DigitalOcean).



//! ¿DONDE ESTÁ PHP?
PHP debe estar instalado en el servidor.
💡 Opciones para tener PHP en un servidor:
🔹 En un hosting compartido (los proveedores ya tienen PHP instalado).
🔹 En un servidor dedicado o VPS, donde instalas PHP manualmente.
🔹 En tu PC con un servidor local usando herramientas como:
      - XAMPP (Windows, Mac, Linux)
      - MAMP (Mac)
      - LAMP (Linux)
      - WAMP (Windows)



//! ¿DÓNDE ESTÁ LA BASE DE DATOS?
1️⃣ En el mismo servidor físico que el servidor web (opción común en pequeños proyectos).
2️⃣ En un servidor físico separado (opción usada en grandes empresas para rendimiento y seguridad).
3️⃣ En la nube (Ejemplo: bases de datos gestionadas como AWS RDS, Google Cloud SQL, PlanetScale).
