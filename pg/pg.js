const { Pool } = require('pg');

const pool = new Pool({
    user : 'postgres',
    password : 'root',
    host : 'localhost',
    port : 5432,
    database : 'test'
});

dropTables = async () => {
    let sql = `
    DROP TABLE IF EXISTS users
    `;

    const result = await pool.query(sql, function (err, result) {
        if (err) throw err;
        console.log("users Table deleted");
    });
    console.log(result);
}

createTable = async () => {
    let sql = `
    CREATE TABLE IF NOT EXISTS users ( 
    id serial NOT NULL, 
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
    )`;

    const result = await pool.query(sql , function (err, result) {
        if (err) throw err;
        console.log("users Table Created");
    });
    console.log(result);
}

insertUsers = async () => {
    let sql = `
    INSERT INTO users (name) 
    VALUES 
    ('John') , ('Peter'), ('Oliver') , ('Sarah') , ('Jack') , ('Patrick') , ('Sonia')
    `;

    const result = await pool.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
}

searchUsers = async () => {
    let sql = `
    SELECT * FROM users WHERE name LIKE 'S%'
    `;

    const result = await pool.query(sql, function (err, result) {
        if (err) throw err;
        console.table(result.rows);
    });
}

doTheJob = async () => {
    // await dropTables();

    // await createTable();
    // await insertUsers();
    await searchUsers();
}

doTheJob();

