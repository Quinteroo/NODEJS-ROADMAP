


! AJAX

### 🟩 **Node.js**  
- **¿Qué es?**  
  Es un *entorno de ejecución* para JavaScript del lado del **servidor**.  
  Permite usar JavaScript para crear aplicaciones backend (como servidores web, APIs, scripts, etc.).

- **Dónde se usa:** En el **servidor**  
- **¿Para qué sirve?**  
  - Leer y escribir archivos (como los PDF y JSON que estás manejando)
  - Conectarse a bases de datos
  - Crear servidores web (como con Express)
  - Ejecutar tareas de backend en general

- **Ejemplo:**  
  ```js
  const fs = require("fs");
  const data = fs.readFileSync("archivo.txt", "utf-8");
  console.log(data);
  ```

---

### 🟦 **AJAX** (*Asynchronous JavaScript and XML*)  
- **¿Qué es?**  
  Es una *técnica* (no una tecnología por sí sola) que permite que una página web (en el navegador) haga peticiones al servidor **sin recargar la página**.

- **Dónde se usa:** En el **navegador / frontend**  
- **¿Para qué sirve?**
  - Enviar o recibir datos del servidor en segundo plano (como pedir datos a una API)
  - Actualizar partes de la web sin recargarla
  - Mejorar la experiencia de usuario en apps web

- **Ejemplo con fetch:**  
  ```js
  fetch("/facturacion.json")
    .then(res => res.json())
    .then(data => console.log(data));
  ```

---

### 🔄 En resumen:

| Característica         | Node.js                       | AJAX                           |
|------------------------|-------------------------------|--------------------------------|
| ¿Qué es?               | Entorno de ejecución de JS    | Técnica para hacer peticiones |
| ¿Dónde se usa?         | En el **servidor**            | En el **navegador**            |
| ¿Quién lo ejecuta?     | El sistema (con Node instalado)| El navegador (Chrome, Firefox...) |
| ¿Qué hace?             | Ejecuta JS del lado servidor  | Envía/recibe datos sin recargar la página |
| ¿Ejemplo de uso?       | Crear una API                 | Pedir datos a esa API          |

---

¿Quieres que te monte un ejemplo donde uses ambos a la vez? Tipo: Node.js crea un servidor y AJAX pide datos a ese servidor desde el navegador.
