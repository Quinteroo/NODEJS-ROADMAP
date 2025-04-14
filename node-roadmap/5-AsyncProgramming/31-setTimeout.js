




// !setTimeout
// setTimeout sirve para ejecutar una función una sola vez después de un cierto retraso (en milisegundos).

//* Sintaxis:
setTimeout(función, tiempoEnMilisegundos);


//* Ejemplo
setTimeout(() => {
  console.log('Esto se imprime después de 2 segundos');
}, 2000);


// En este ejemplo, la función se ejecuta una sola vez, después de 2 segundos (2000 milisegundos).



// !setInterval
// setInterval ejecuta una función de forma repetida cada cierto intervalo de tiempo (en milisegundos), hasta que se detenga manualmente.

//* Sintaxis:
setInterval(función, tiempoEnMilisegundos);


// Ejemplo:
setInterval(() => {
  console.log('Esto se imprime cada 3 segundos');
}, 3000);


// Este código seguirá ejecutando la función cada 3 segundos, hasta que se cancele con `clearInterval`.



// !Cómo detenerlos
// - Para detener un `setTimeout` o un `setInterval`, se guarda su ID y se pasa a `clearTimeout` o `clearInterval`.

// Ejemplo de cancelar un intervalo:

const id = setInterval(() => {
  console.log('Esto se repetirá hasta que lo cancelemos');
}, 1000);

setTimeout(() => {
  clearInterval(id);
  console.log('Intervalo detenido');
}, 5000);


// Aquí, el intervalo se ejecuta cada segundo, pero se detiene después de 5 segundos.
