const inquirer = require('inquirer');
const axios = require('axios');

module.exports = async () => {
  const { data } = await axios.get('https://rickandmortyapi.com/api/character');
  // data.results = [..., ..., ...]

  const choices = data.results.map(character => {
    return { name: character.name, value: character.id };
  });

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'character_id',
        message: 'Pick a character',
        loop: false,
        choices,
      }
    ])
    .then(answers => {
      // TODO: Show the character info from API
      // https://rickandmortyapi.com/api/character/{id}
    });
}