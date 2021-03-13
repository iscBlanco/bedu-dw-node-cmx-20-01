// Usando métodos asíncronos

const fs = require('fs');
const path = require('path');

const pathFile = path.join(__dirname, 'ejemplo.txt');

// Creando el archivo ejemplo.txt
fs.writeFile(pathFile, 'Este es el contenido del archivo', { encoding: 'utf-8' }, (err) => {
  if (err) throw err;

  console.log('writeFile', 'Archivo Creado :)');
});


// Leyendo el archivo ejemplo.txt
fs.readFile(pathFile, { encoding: 'utf-8' }, (err, data) => {
  if (err) throw err;

  console.log('readFile', data);
});

// Agregarle contenido a ejemplo.txt
fs.appendFile(pathFile, '\nEsta es la nueva línea que se ha agregado', (err) => {
  if (err) throw err;
  
  console.log('appendFile', 'Archivo actualizado');
});