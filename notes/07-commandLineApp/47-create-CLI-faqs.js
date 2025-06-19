

//! tengo que volver a hacer npm link para actualizar el paquete?
// No, no hace falta hacer `npm link` otra vez.

// Una vez que hiciste `npm link`, cualquier cambio en los archivos de tu proyecto (como el `cli.js`)
// se refleja automáticamente, porque `npm link` crea un enlace simbólico entre tu proyecto y el entorno global de Node.

// Solo necesitas volver a hacer `npm link` si:

// * Cambias de carpeta o mueves el proyecto.
// * Lo desvinculaste con `npm unlink`.

// Así que puedes probar directamente tu comando después de guardar los cambios.


//!  y si hago una modificación en el código del proyecto, no tngo que hacer de nuevo npm link pero si cambiar la versión 
//! en el package.json para que npm me permita subir de nuevo el archivo?
// Correcto. Para subir tu paquete actualizado a npm, sí necesitas cambiar la versión en el package.json, aunque 
// no hace falta volver a hacer npm link.



//! ¿cuando usar el subcomando "init"???
// ✅ Cuando un usuario instala tu paquete con:

`npm install -g nombre-del-cli`

  // O también puede usar:

  `npx nombre-del-cli init`

  // Entonces también podrá ejecutar directamente:

  `nombre-del-cli init`

  // Porque tú en el `package.json` definiste esto:

  ```
"bin": {
  "nombre-del-cli": "./bin/cli.js"
}
```

  //! ✅ Conclusión:
  //* Tu CLI no se ejecuta solo con npm install.

  // El usuario debe hacer:

  `npx nombre-del-cli init`
  // o

  `npm install -g nombre-del-cli seguido de nombre-del-cli init`