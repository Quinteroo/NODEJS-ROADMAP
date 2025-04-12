



//! CREAR NUESTRO PROPIO PAQUETE DE NPM
//* RESUMEN
// Para crear y publicar un paquete en npm, primero necesitas tener una cuenta en el registro de
// npm y haber instalado Node.js y npm en tu máquina. Luego, creas tu paquete en un directorio de
// tu proyecto, lo inicializas con npm init, creas tu archivo package.json y publicas el paquete con
// npm publish. Si en algún momento necesitas modificar un paquete ya publicado, puedes actualizar
// su versión y volver a publicarlo.


//* ¿Qué sucede cuando alguien instala mi paquete en su proyecto?
// Cuando un usuario instala tu paquete de npm, lo que realmente está haciendo es agregarlo como
// una dependencia en su proyecto, dentro de su propia carpeta node_modules. Si tu paquete tiene un
// archivo index.js, este archivo será copiado dentro de esa carpeta node_modules/<nombre-del-paquete>/
// junto con el resto de archivos de tu paquete.

//? TUTORIAL
//? https://www.youtube.com/watch?v=SgmkNLFFCjM



//! PASO A PASO
1. // Creamos carpeta
1.1 // npm init -y
2. // limpìamos package.json menos name y version
// son los dos campos mínimos requeridos para publicar (pero hace falta más para hacerlo de calidad, luego vemos)
3. // creamos carpeta SRC/index.ts
4. // desarrollamos las funcoines y el código
5. //* exportamos las funciones con export.default { add, substract,multiply...} 
// o rambién podemos export const add =...
6. //* buenas prácticas es ahora comentar con la sintaxis de JSdoc que hace cada función
// hay que tener en cuenta que la gente no tiene por que saber que queremos hacer, así que hay que explicarlo

//--------------------
// a nosotros nos interesa que tanto usuarios de typescirpt como de js puedan usar nuestro código
// así que tenemos que poder transpilarlo

7. // transpilar para que se pueda usar en TS y JS

//? npx tsc src/index.ts  <-- de esta manera usamos el compilardor de TS

//? npx tsc src/index.ts --module ES&  <-- compilamos para que se pueda usar en el navegador
// cobn esto podemos ver que escogiendo TS podemos desarrollar un solo código que sirva
// tanto con el navegador como con Node

8. // generamos los archivos en una carpeta diferente, DIST, ya que no es código fuente, si no una versión
//? npx tsc src/index.ts --outDir dist-browser --module ES&

9. // estos código realmente hay que definirlos en scripts en el package.json

// "scripts":{
//   "build-browser": "tsc src/index.ts --outDir dist-browser --module ES6",
//   "build-node": "tsc src/index.ts --outDir dist-node",
//   "build": "npm run build-browser & npm run build-node",

// },

10. // nosotros usamos TS mucho, pero si queremos que alguien lo utilice,
// y no tiene TS, debemos incorporarlo como dependencia de desarrollo
// por si se da el caso que el usuario no lo tenga instalado, que lo haga
// y le funcione el código
//? npm i -D typescript

11. // en el package.sjon 
// "name"
// "version"
// "main": "dist-node/index.js" //* en main indicamos la ruta de la que importaremos las funcoines cuando hagamos un require
// "browser": "dist-browser/index.js" //* lo mismo pero en caso de usarlo ene l navegadpr

12. // PUBLICAMOS EN NPM

// - npm login  -> nos permite hacer login con una cuenta de npm
// - introducimos username y passowrd, doble autenticación

// - npm publish --acces public //* de esta manera publica el paquete para todos y no de manera privada

// - revisamos que se haya subido

13. // PROPIEDADES

let package = {
  "name": "useless-calculator",
  "version": "1.0.0",
  "description": "Una calculadora sencilla que no pretendemos que use nadie",
  "keywords": ["palabras relevantes para la búsqueda"],
  "license": "MIT", // MIT es la licencia opensource (haz lo que quieras)
  "author": {

  },
  "contributors": ["array de personas que han", "colaborado"],
  "main": "dist-node/index.js",
  "browser": "dist-browser/index.js",
  //▷ Debug
  "scripts": {
    "build-browser": "tsc src/index.ts --outDir dist-browser --module ES6",
    "build-node": "tsc src/index.ts --outDir dist-node",
    "build": "npm run build-browser & npm run build-node"
  },

  "devDependencies": {
    "typescript": "^4.5.4"
  }

}

14. // CAMBIOS
// Ccada vez que hagamos un cmabuioi en nuestro npm yqueramos actualizarlo tenemos que incrementar la versión --> 1.0.1 <--
//? cambia versión
//? npm publish --acces public

15. // PUBLICAR CÓDIGO A UN REPOSITORIO
// esto le da veracidad a tu paquete. Además lka gente no se fía de paquetes que no tengan subido el código a algun repositiorio de github
// de esta manera, //* ofrecemos la url del repositorio en npm 

//? creamos .gitignore e incluimos /node_modules 
//? /dist-browser /dist-node también lo incluimos en gitignore, son autogeneradas, son carpetas que realmente se generan con un comando "build"

16. // README
// nmuy importante hacer un buen readme del proyecto, que explique ien que hace
// dar ejemplos, gif... todo lo que ayude a entender el código

17. // SUBIRMOS REPOSITORIO A GIT

18. // EN EL PACKAGE.JSON AÑADIMOS ÑA PROPIEDAD REPOSITORY CON LA URL DE GITHUB

let package2 = {
  "homepage": "url de la landingpage / documentación (React de lo curra mucho", // hay gente que le pone la misma url de github#readme
  "repository": {
    "type": "git",
    "url": "url de github"
  }
}
