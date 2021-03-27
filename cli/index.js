const inquirer = require('inquirer');

// Utils
const createAccount = require('./utils/createAccount');
const getCharacters = require('./utils/rickAndMorty');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'action',
      message: '¿Qué quieres hacer hoy?',
      choices: [
        'Crear una cuenta',
        'Iniciar Sesión',
        'Ver personajes de Rick & Morty (Requiere inicio de sesión)',
      ],
    }
  ]).then(answers => {
    switch(answers.action) {
      case 'Crear una cuenta':
        createAccount();
        break;
      case 'Iniciar Sesión':
        break;
      case 'Ver personajes de Rick & Morty (Requiere inicio de sesión)':
        getCharacters();
        break;
      default:
        console.log('Not available');
    }
  }).catch(err => {
    if (error.isTtyError) throw err;

    console.err(err); // Show me the error
  });