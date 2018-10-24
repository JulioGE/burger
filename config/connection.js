// Set up MySQL connection
const mysql = require("mysql");

const db = mysql.createDB({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db"
});

// Make connection
db.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + db.threadId);
});

//Export connection for our ORM to use
module.exports = db;
