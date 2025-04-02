


! VARIABLE GLOBAL
es una variable que contiene todas las funciones, objetos, variables... de nuestra aplicación.

En Node.js, la palabra clave global hace referencia a un objeto que contiene todas las variables, funciones y 
objetos disponibles en todo el entorno de ejecución de Node.js.

global es similar al objeto window en el navegador, pero se usa en el entorno de Node.js. Puedes acceder a objetos o 
variables definidas globalmente en cualquier parte del código.

Ejemplo:
global.miVariable = "Soy global!";
console.log(global.miVariable); // "Soy global!"

------------------------------------------------------------------

Es decir, tenemos dos entornos de ejecución, uno el navegaor y otro el servidor,
en JS tenemos la variable globalThis, en el navegador se interpreta como window y en el servidor como global.

De hecho, muchas de las herramientas que usamos (fetch, console...) son propiedades de globalthis: globalThis.console.log("hola")

------------------------------------------------------------------


Sin embargo, en Node.js es recomendable evitar el uso de global a menos que sea necesario, 
ya que puede hacer que el código sea más difícil de depurar y mantener.
