


//! RESUMEN APUNTES PARA CREAR UN PAQUETE NPM
1. // creamos cuenta en NPM
2. // iniciamos proyecto npm init -y
3. // creamos carpeta src/index.ts
3.1 // instalamos dependencias como npm i -D typescript
3.2 // crear y configurar tsconfig.json
4. // desarrollamos en index.ts el código que queremos compartir
5. // export de las funciones y el código
6. // comentar la sintaxis de las funcoines en lengujae JSdos
7. // añadimos scripts
7.1 // hacemos los build del proyecto por si tenemos que generar un DIST para un developer que trabaje solo en JS (por ejemplo)
8. // creamos y definimos el README
9. // .gitignore con node_modules dist-node dist-browser
10. // subimos repositorio a github
11. // revisamos y completamos el package.json


let ejemploPackage = {
  "name": "useless-calculator",
  "version": "1.0.0",
  "description": "Una calculadora sencilla con funciones básicas como suma, resta, multiplicación y división",
  "keywords": [
    "calculator",
    "math",
    "typescript",
    "npm-package",
    "javascript",
    "basic-operations"
  ],
  "license": "MIT",
  "author": {
    "name": "Tu Nombre",
    "email": "tunombre@email.com",
    "url": "https://tu-sitio-web.com"
  },
  "contributors": [
    "Colaborador Uno <colaborador1@email.com>",
    "Colaborador Dos <colaborador2@email.com>"
  ],
  "main": "dist-node/index.js",  //! main es la puerta de entrada, es decir, de donde se sacan las funciones
  "browser": "dist-browser/index.js",
  "types": "src/index.ts", //* Esto le dice a TypeScript (y a los editores como VS Code) dónde están los tipos para el paquete
  "scripts": {
    "build-browser": "tsc src/index.ts --outDir dist-browser --module ES6", //? bundlers como Webpack, Rollup o Parcel. Le indica que si se está usando el paquete en un entorno navegador (frontend), deben cargar este otro archivo en lugar del de Node
    "build-node": "tsc src/index.ts --outDir dist-node",
    "build": "npm run build-browser && npm run build-node" //! el script build es fundamental para preparar los archivos antes de subir el paquete a npm. 
  },
  "devDependencies": {
    "typescript": "^5.3.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/tuusuario/useless-calculator"
  },
  "homepage": "https://github.com/tuusuario/useless-calculator#readme",
  "bugs": {
    "url": "https://github.com/tuusuario/useless-calculator/issues"
  },
  "engines": {
    "node": ">=14.0.0"
  },
  "files": [
    "dist-node",
    "dist-browser",
    "src",
    "README.md"
  ]
}


12. // hacemos login //* npm login
13. //* - npm publish --acces public   <--- de esta manera publica el paquete para todos y no de manera privada



//! HAY QUE HACER BUILD ANTES DE SUBIRLO A NPM
// quien usa tu paquete no tiene que ejecutar npm run build-browser ni
// build-node. Eso solo lo haces tú como autor del paquete, antes de
// publicarlo en npm.

// Cuando tú publicas un paquete en npm, lo que se sube es todo lo que
// hay en la carpeta del proyecto, excepto lo que esté en el .gitignore
// o .npmignore. Por eso, antes de hacer npm publish, tienes que ejecutar
// tú los comandos de build y asegurarte de que las carpetas dist-node
// y dist-browser estén generadas y listas.

// Entonces, cuando un usuario instala tu paquete con npm install
// tu-paquete, se le descarga ya con los archivos compilados. Y
// dependiendo de si está usando Node (usa main) o un entorno de
// navegador con un bundler (usa browser), se carga automáticamente
// el archivo correcto. El usuario solo hace require o import, y no
// necesita saber nada del proceso de build.

