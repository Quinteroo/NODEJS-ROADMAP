



// ! QUÉ ES LA COMPILACIÓN JUST-IN-TIME?

// Tradicionalmente, JavaScript era //? interpretado, es decir:

//? > El motor del navegador leía línea por línea y ejecutaba inmediatamente sin convertirlo
//? a código máquina completo antes de empezar.

// Pero los motores modernos, como V8 (usado en Chrome y Node.js), mejoraron esto con JIT (Just-In-Time),
// que mezcla lo mejor de los lenguajes interpretados y compilados.

// ---

// !¿Qué hace exactamente V8 con JIT?

// Cuando ejecutas JavaScript:

// 1. Primero interpreta el código rápidamente, como si fuera interpretado de forma normal. Esto
// permite empezar la ejecución casi de inmediato.

// 2. Mientras el código se ejecuta, V8 observa el comportamiento del programa (por ejemplo, qué
//   funciones se llaman más, qué tipos de datos se usan, etc.).

// 3. Cuando encuentra partes frecuentemente usadas (por ejemplo, una función que se llama muchas veces),
// las compila a código máquina real (binario) mientras se está ejecutando.
// Esto es la "compilación Just-In-Time".

// 4. Además, optimiza ese código: elimina repeticiones, ajusta los tipos, reestructura operaciones...
// para hacerlo más rápido.

// ---

// !¿Compila línea por línea?

// No exactamente línea por línea, sino por bloques o funciones completas que se ejecutan muchas veces. Lo que hace es:

// - Ejecuta normalmente (interpretado)
// - Detecta lo que se usa mucho
// - Compila y reemplaza ese bloque con su versión optimizada en caliente (mientras ya se está ejecutando)

// ---

// !Ventaja principal

// Te da la velocidad de un lenguaje compilado, sin perder la flexibilidad de un lenguaje interpretado.
// Por eso JavaScript puede ser tan ágil para desarrollo y al mismo tiempo rendir bien en producción.

