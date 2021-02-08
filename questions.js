const inquirer = require('inquirer');

const ask = () => {
    inquirer
    .prompt([
        {
            name: "title",
            message: "What is the title of the song you wish to add?",
        },
        {
            name: "artist",
            message: "Who is the artist?"
        },
        {
            name: "genre",
            message: "What genre is the song?"
        }
    ])
    .then(answers => {
        return { 
            title: answers.title,
            artist: answers.artist,
            genre: answers.genre
        }
    })
    .catch(error => {
        if(error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });
}

  module.exports = {
     ask
  }