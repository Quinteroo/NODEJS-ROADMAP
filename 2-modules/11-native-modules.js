


//! 🔹 MÓDULOS NATIVOS DE NODE.JS
// Los módulos nativos de Node.js son paquetes integrados en Node que no 
// necesitan instalación con npm. Están listos para usarse en cualquier aplicación y permiten 
// interactuar con el sistema operativo, manejar archivos, crear servidores, trabajar con eventos y más.

const fs = require("node:fs") // desde node 16 se recomienda -->node:



//! ### 🗂️ **Manejo de Archivos y Directorios**
// - `fs` → Trabaja con el sistema de archivos (leer, escribir, modificar archivos)
// - `path` → Manipula rutas de archivos y directorios
// - `os` → Proporciona información del sistema operativo

//! ### 🌍 **Red y Servidores**
// - `http` → Crea servidores web y maneja peticiones HTTP
// - `https` → Similar a `http`, pero con soporte para SSL/TLS
// - `net` → Trabaja con conexiones TCP/UDP

//! ### ⏳ **Manejo de Procesos y Sistema**
// - `process` → Información del proceso de Node.js en ejecución
// - `os` → Información sobre el sistema operativo
// - `child_process` → Permite ejecutar comandos del sistema

//! ### 📡 **Manejo de Datos y Buffers**
// - `buffer` → Maneja datos binarios en la memoria
// - `stream` → Trabaja con flujos de datos (lectura/escritura)

//! ### 🛠️ **Otros Módulos Útiles**
// - `events` → Permite trabajar con eventos y listeners
// - `crypto` → Proporciona funciones criptográficas como hash y encriptación
// - `util` → Ofrece herramientas y utilidades para debugging y desarrollo  