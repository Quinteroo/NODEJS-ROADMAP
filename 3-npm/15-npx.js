
NPX
npx es una herramienta que viene junto con npm a partir de la versión 5.2 en adelante. Sirve para ejecutar 
paquetes de npm directamente, sin necesidad de instalarlos previamente en tu sistema.

? Normalmente se ejecuta en paquetes que solo vas a necesitar una vez en el desarrollo, por ejemplo vite o create-react-app

En lugar de hacer primero npm install -g <paquete> para poder usarlo desde la terminal, puedes hacer directamente npx <paquete> y este 
  se descargará y ejecutará temporalmente, sin ocupar espacio permanente ni contaminar tu sistema con instalaciones globales innecesarias.

Características principales de npx:
- Permite ejecutar paquetes sin instalarlos globalmente.
- Usa la versión más reciente del paquete si no está instalado.
- Si el paquete ya está instalado localmente, usará esa versión.
- Es útil para herramientas que solo necesitas usar una vez o de forma puntual.

    
Ejemplo de uso:
-> npx create-react-app mi-app
Esto ejecuta el paquete create-react-app sin necesidad de haberlo instalado antes. Crea una nueva aplicación React en una carpeta llamada mi-app.

  
Casos de uso típicos:
- Ejecutar herramientas de scaffolding como create-react-app, vite, express-generator, etc.
- Probar scripts o comandos de paquetes rápidamente.
- Ejecutar herramientas que no necesitas mantener instaladas de forma permanente.

  
SCAFFOLDING
Scaffolding es un término que se usa en desarrollo de software para referirse al proceso de generar automáticamente la estructura básica de un proyecto o
  de una parte del proyecto, con archivos y carpetas preconfiguradas.
    
En otras palabras, es como crear un “esqueleto” del proyecto con todo lo necesario para empezar a trabajar, 
    sin tener que crear manualmente cada archivo, configuración o estructura inicial.

    
QUÉ SUCEDE CUANDO LO USAS??
Cuando usas npx para ejecutar un paquete, lo que sucede es lo siguiente:

1. Búsqueda local: primero verifica si el paquete ya está instalado en tu proyecto local (en node_modules).
2. Descarga temporal: si no está, lo descarga temporalmente desde el registro de npm.
3. Ejecución: ejecuta el comando del paquete.
4. Eliminación: una vez que termina de ejecutarse, el paquete temporal se elimina automáticamente (no queda guardado en tu proyecto 
  ni ocupa espacio permanentemente).

