const mysql = require('mysql');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'classSheduler',
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Database Connected...');
});

