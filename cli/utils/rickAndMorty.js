const inquirer = require('inquirer');
const axios = require('axios');

module.exports = async () => {
  const { data } = await axios.get('https://rickandmortyapi.com/api/character');

  // Data? 

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
    .then(async answers => {
      // TODO: Show the character info from API
      // https://rickandmortyapi.com/api/character/{id}

      const { character_id } = answers;
      const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${character_id}`);

      console.table(Object.entries(data));
    });
}