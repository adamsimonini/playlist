const connection = require("./conenction.js");

// CREATE
const addSong = (song) => {
  console.log("adding new song...\n");
  var query = connection.query("INSERT INTO songs SET ?", song, (err, res) => {
    if (err) throw err;
    console.log(`${res.affectedRows} was added to playlist!\n`);
  });
  console.log(query.sql);
};

// UPDATE
const updateSong = (title, artist, property, value) => {
  // to ensure the correct song is updated, both the artist and the title are injeected into the WHERE clause using AND https://www.w3schools.com/sql/sql_and_or.asp
  console.log(`Updating the ${property} for ${title} to ${value}...\n`);
  const query = connection.query("UPDATE songs SET ? WHERE ? AND ?", [
    {
      [property]: value, // any song property (e.g., title, artist, or genre) can be updated
    },
    {
      title: title,
    },
    {
      artist: artist,
    },
  ]);
  console.log(query.sql);
};

// DELETE
const deleteSong = (title, artist) => {
  console.log(`Deleting ${title} by ${artist}\n`);
  connection.query(
    "DELETE FROM songs WHERE ? AND ?",
    [
      {
        title,
      },
      {
        artist,
      },
    ],
    function (err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " song deleted!\n");
    }
  );
};

// READ
const readSongs = () => {
  console.log("Selecting all songs...\n");
  connection.query("SELECT * FROM songs", function (err, res) {
    if (err) throw err;
    console.log(res);
  });
};

// END CONNECTION
const end = () => connection.end();

module.exports = {
  create: addSong,
  read: readSongs,
  update: updateSong,
  delete: deleteSong,
  end
};
