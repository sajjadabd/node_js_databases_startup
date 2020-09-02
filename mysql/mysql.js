const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

dropTables = () => {
    let sql = `
    DROP TABLE IF EXISTS users
    `;

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("users Table deleted");
    });
}


createTable = (connection) => {
    let sql = `
    CREATE TABLE IF NOT EXISTS users ( 
    id INT AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(255)
    )`;

    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("users Table created");
    });
}


insertUsers = (connection) => {
    let sql = "INSERT INTO users (name) VALUES ?";

    let values = [
        ['John'],
        ['Peter'],
        ['Amy'],
        ['Hannah'],
        ['Michael'],
        ['Sandy'],
        ['Betty'],
        ['Richard'],
        ['Susan'],
        ['Vicky'],
        ['Ben'],
        ['William'],
        ['Chuck'],
        ['Viola']
    ];

    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
}

searchUsers = () => {
    let sql = "SELECT * FROM users ORDER BY name";

    con.query(sql, function (err, result , fields) {
        if (err) throw err;
        console.table(result , [ 'id' , 'name' ]);
        /* result.forEach(element => {
            console.log(element.id , '  ' , element.name)
        }); */
    });
}


//dropTables();
createTable();
//insertUsers();
searchUsers();