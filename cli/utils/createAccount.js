const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const createFileUser = ({ fullname, username, email, password }) => { // Destructuring Object
  return new Promise((resolve, reject) => {
    fs.writeFile(
      path.join(__dirname, `../accounts/${username}.json`),
      JSON.stringify({ fullname, username, email, password }),
      { encoding: 'utf-8'},
      (err) => {
        if (err) reject(err);
        resolve();
      }
    );
  });
}

module.exports = () => {
  inquirer
    .prompt([
      { name: "fullname", message: "What's your name?" }, // type: input
      { name: "username", message: "Username" },
      { name: "email", message: "What's your email?" },
      { type: "password", name: "password", message: "Choose a password" },
    ]).then(answers => { // { fullname: "Javier", username: "coderdiaz", email: "hey@coderdiaz.me", password: "secret"} 
      // TODO: Verify if the users exists previously
      createFileUser(answers)
        .then(() => console.log('Account created!'))
        .catch(err => console.error(err));
    });
}
