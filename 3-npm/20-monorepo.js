



//! QUÉ ES UN MONOREPO

//? Un monorepo (abreviación de "monolithic repository") es un único repositorio de código que contiene
// múltiples proyectos o paquetes relacionados entre sí, en lugar de tener un repositorio independiente para cada uno.

// Por ejemplo, imagina una empresa que tiene:

// - una API backend en Node.js
// - un frontend en React
// - una librería compartida de utilidades
// - una app de administración
// - documentación técnica

// En lugar de tener cinco repositorios diferentes, lo meten todo en uno solo y organizan cada parte en
// su propia carpeta o paquete. Eso es un monorepo.


// *Ventajas de un monorepo:
// - facilita compartir código entre proyectos
// - permite hacer cambios coordinados en varios paquetes al mismo tiempo
// - simplifica la configuración de herramientas, CI/CD, linters, etc.
// - mejora la visibilidad general del proyecto


// *Desventajas:
// - puede volverse complejo si no se gestiona bien
// - requiere herramientas para manejar dependencias, builds y releases
// (como `npm workspaces`, `yarn workspaces`, `pnpm`, `Lerna`, `Turborepo`, etc.)




//! un monorepo es lo que se conoce como arquitectura monolítica?
//? NO
// * Monorepo
// Es una forma de organizar el código fuente. Significa que tienes todos tus proyectos o paquetes en un solo
// repositorio, aunque esos proyectos estén bien separados y sean independientes entre sí.

//*Arquitectura monolítica
// Es una forma de estructurar la aplicación. Significa que todo el sistema funciona como una única unidad: una
// sola aplicación que hace todo (autenticación, base de datos, lógica de negocio, interfaz...). Por ejemplo,
// una API que maneja todos los endpoints en un solo servidor con un único deploy.