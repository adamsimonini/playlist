const inquirer = require("inquirer");
const crud = require("./crud.js");

inquirer
  .prompt([
    {
      name: "title",
      message: "What is the title of the song you wish to add?",
    },
    {
      name: "artist",
      message: "Who is the artist?",
    },
    {
      name: "genre",
      message: "What genre is the song?",
    },
  ])
  .then((answers) => {
    crud.create({ // create a new record with the answers provided by the user
      title: answers.title,
      artist: answers.artist,
      genre: answers.genre,
    });
    crud.delete("Human", "Krewella"); // delete the record where title is human and artist is krewella
    crud.update("TRNDSTTR", "Black Coast", "title", "new-title"); // update record's title to new-title where title is TRNDSTTR and artist is Black Coast
    crud.read();
    crud.end();
  })
  .catch((error) => {
    if (error.isTtyError) console.log(error);
  });
