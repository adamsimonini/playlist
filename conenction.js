const mysql = require("mysql");

// setup the connection
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "adam",
  password: "password",
  database: "playlist_DB",
});

module.exports = connection;
