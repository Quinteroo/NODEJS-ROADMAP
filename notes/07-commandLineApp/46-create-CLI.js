


//! PASO A PASO PARA CREAR UN CLI
// 1 creamos carpeta proyecto
// 2 iniciamos proyecto npm init -y 
// 3 creamos estructura de carpetas del proyecto:
3.1// instalamos dependencias del proyecto (entre ellas "commander")

// procesador-facturas/
// ├── bin/
// │   └── cli.js       ← tu archivo CLI principal
// ├── templates/
// │   └── archivos y carpetas con el código del proyecto
// ├── package.json ← con toda la info que se subirá a npm y scripts de ejecución

// 4 creamos el contenido de lo que aparece en la terminal
// #!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs');
const path = require('path');

const program = new Command();

program
  .command('init')
  .description('Crear estructura inicial del proyecto')
  .action(() => {
    const templateDir = path.join(__dirname, '../templates');
    const targetDir = process.cwd();

    fs.readdirSync(templateDir).forEach(file => {
      const src = path.join(templateDir, file);
      const dest = path.join(targetDir, file);
      fs.copyFileSync(src, dest);
    });

    console.log('Proyecto inicial creado.');
  });

program.parse(process.argv);

// 5 nos aseguramos de declarar el bin en el package.json:

//   "bin": {
//     "procesador-facturas": "./bin/cli.js"
//   },

//? En package.json, considera añadir "files" para incluir solo las carpetas 
//? y archivos necesarios (como bin y templates).

// 6 damos permisos de ejecución:
// llegamos desde la terminal hasta la ruta del proyecto
// ejecutamos:
// chmod +x bin/cli.js //* chmod es un comando de sistemas Unix/Linux/macOS, 


// 7 revisamos que el README con toda la info del proyecto 

// 8 hacemos login en npm

// 9 subimos el proyecto a npm


//! recomendación extra
// Antes de publicar, haz pruebas locales para asegurarte de que tu CLI funciona:

//* npm link
// Esto crea un enlace simbólico para usar tu CLI como si estuviera instalado globalmente.


//! estructura carpteas
`
tu-paquete/
├── bin/
│   └── cli.js        ← archivo CLI compilado o JS puro
├── templates/        ← aquí guardas el esqueleto del proyecto (con src/, pdfs/, etc.)
│   ├── pdfs/
│   ├── results/
│   ├── src/
│   ├── tsconfig.json
│   ├── package.json
│   ├── .gitignore
│   └── ...
├── dist/             ← si el CLI está escrito en TS, va aquí el build
├── package.json
└── readme.md
`

//! package.json – campo "files"
`
"files": [
  "bin",
  "templates",
  "dist",
  "readme.md"
]
`
//!Resumen claro:
//Tu CLI está programado para copiar todo lo que hay en templates/ al ejecutar init.
//Por tanto, todo lo que quieres que reciba el usuario (como dist, package.json, etc.) 
//debe estar dentro de esa carpeta templates/.