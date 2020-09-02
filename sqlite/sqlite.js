var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('test.db');
 
db.serialize(function() {
  db.run(`
   CREATE TABLE IF NOT EXISTS users (
      id INT NOT NULL PRIMARY KEY,
      name TEXT NOT NULL
   )
  `);
 
  db.run(`DELETE FROM users`);

  db.run("INSERT INTO users VALUES (1,'Peter') , (2,'John') , (3,'Oliver')");
 
  db.each("SELECT * FROM users", function(err, row) {
      //console.log(row.id + ": " + row.info);
      console.log(row);
  });
});
 
db.close(); 

/* var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('mem.db');
 
db.serialize(function() {
  db.run("CREATE TABLE lorem (info TEXT)");
 
  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();
 
  db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
      console.log(row.id + ": " + row.info);
  });
});
 
db.close(); */