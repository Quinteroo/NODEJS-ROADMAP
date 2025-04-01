




//! ¿Qué significa que los motores de JavaScript compilan el código?
//* 📌 Compilar significa convertir el código fuente escrito por un programador en un formato que
//* la computadora pueda ejecutar directamente.
// En los lenguajes tradicionales como C++ o Java, la compilación ocurre antes de ejecutar el programa.
// Sin embargo, JavaScript históricamente se consideraba un lenguaje interpretado, lo que significa
// que su código se ejecutaba línea por línea sin necesidad de una compilación previa.


//! 🔹 Compilación Just-In-Time (JIT) en JavaScript
// Hoy en día, los motores como V8 (de Node.js y Chrome) utilizan una técnica llamada compilación Just-In-Time (JIT).
// Esto significa que, en lugar de interpretar el código completamente o compilarlo de antemano,
// el motor traduce el JavaScript a código máquina mientras se está ejecutando, optimizándolo sobre la marcha.


//!📌 ¿En qué formato se convierte el código JavaScript en V8?
// Cuando ejecutas JavaScript en V8 (por ejemplo, en Node.js o Chrome), el proceso es más o menos así:

//* 1️⃣ Parseo (Parsing)
// - V8 lee el código JavaScript y lo convierte en un AST (Abstract Syntax Tree).
// - Este AST es una representación estructurada del código, pero no es ejecutable.

//* 2️⃣ Bytecode
// - V8 usa un intérprete JIT llamado Ignition para convertir el AST en bytecode.
// - El bytecode es más eficiente que el JavaScript original, pero todavía no es código máquina.

//* 3️⃣ Compilación Just-In-Time (JIT) a Código Máquina
// - V8 tiene un compilador optimizador llamado TurboFan.
// - TurboFan toma el bytecode y lo convierte en código máquina (binario).
// - Este código máquina es el que se ejecuta directamente en la CPU.




//! 🔹 ¿Por qué es útil?
// ✅ Mejora el rendimiento, ya que el código se ejecuta mucho más rápido que si fuera interpretado directamente.
// ✅ Permite optimizar el código según cómo se está utilizando durante la ejecución.
// ✅ Hace que JavaScript sea viable para aplicaciones complejas como Node.js, juegos, y apps de alto rendimiento.