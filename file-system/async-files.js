const fs = require('fs');
const path = require('path');

const pathFile = path.join(__dirname, 'ejemplo.txt');

// Creando el archivo ejemplo.txt
fs.writeFileSync(pathFile, 'Este es el contenido del archivo', { encoding: 'utf-8' });
console.log('writeFile', 'Archivo Creado :)');

// Leyendo el archivo ejemplo.txt
const data = fs.readFileSync(pathFile, { encoding: 'utf-8' });
console.log('readFile', data);

// Agregarle contenido a ejemplo.txt
fs.appendFileSync(pathFile, '\nEsta es la nueva línea que se ha agregado');
console.log('appendFile', 'Archivo actualizado');