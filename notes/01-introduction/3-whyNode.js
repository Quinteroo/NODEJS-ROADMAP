


//!¿Por qué Node.js fue revolucionario?
// - Usa JavaScript en el backend, permitiendo que los desarrolladores frontend lo usen también en servidores.
// - Modelo asíncrono y no bloqueante, lo que lo hace ideal para aplicaciones en tiempo real (chats, APIs, streaming, etc.).
// - npm facilita la reutilización de paquetes, con más de 1 millón de módulos disponibles.
// - Gran comunidad y soporte, lo que ha impulsado su adopción en startups y grandes empresas.
// - a diferencia de PHP que se ejecuta cuando hay una petición, los servidores Node.js están siempre escuchando
// - PHP devuelve html y Node.js devuelve JSON
// - Compilación Just-In-Time (JIT)


// 🔹 Backend = Todo el conjunto de lógica de negocio (incluye bases de datos, autenticación, lógica de procesamiento, etc.).
// 🔹 Servidor = El programa que maneja las solicitudes y entrega respuestas (puede incluir una API, servir archivos, gestionar sesiones, etc.).
// 🔹 API = La forma estructurada en que otros sistemas pueden comunicarse con el servidor (a través de endpoints REST, GraphQL, etc.).


//! JERARQUÍA DE CONCEPTOS
//* 1. Backend  
//? El backend es todo lo que ocurre del lado del servidor y que no se ve en el navegador. Incluye:

// - El servidor (el programa que recibe las peticiones y devuelve respuestas).
// - La lógica de negocio (cálculos, validaciones, procesos).
// - La base de datos (donde se guarda la información).
// - La autenticación/autorización, gestión de sesiones, envío de emails, etc.

// Piensa en el backend como todo el sistema detrás de escena que hace que la app funcione.

// ---

//* 2. Servidor  
//? El servidor es una pieza específica del backend. Es el programa (como Express en Node.js) que:

// - Escucha peticiones (GET, POST, etc.)
// - Las interpreta
// - Llama a la lógica correspondiente
// - Y responde al cliente (por ejemplo, con JSON)

// El servidor puede exponer una API, servir archivos HTML, manejar websockets, etc.

// ---

//* 3. API  
//? Una API (Interfaz de Programación de Aplicaciones) es una parte del servidor que define cómo los 
//? clientes (como el frontend o apps externas) pueden comunicarse con él.  
// En Node.js, podrías crear una API REST con rutas como:

```ts
GET /productos
POST /login
DELETE /usuarios/:id
```

// O usar GraphQL, etc. La API es la interfaz pública del servidor para interactuar con el backend.






//! 📌 ¿Qué es I/O en informática?
//? I/O significa Input/Output (Entrada/Salida) y se refiere a cualquier operación donde un
//? sistema interactúa con el exterior. Puede ser:

// >> Entrada (Input): Datos que recibe un sistema (teclado, archivos, red, base de datos).
// >> Salida (Output): Datos que el sistema envía (pantalla, archivos, respuesta HTTP).

// Ejemplos de operaciones I/O:
// ✅ Leer un archivo del disco.
// ✅ Consultar una base de datos.
// ✅ Enviar una solicitud HTTP a una API.
// ✅ Recibir datos de un usuario a través de un formulario.
