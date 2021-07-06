const express = require("express");
const { Router } = require("express")

const path = require("path")
const mysql = require('mysql');
const hbs = require("hbs")
// const Handlebars = require("Handlebars")
const port = process.env.PORT || 3000;
const app = express();
const router = Router();

const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

// require("../db/conn")

app.use(router);
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'hbs')

const db = mysql.createConnection({
    host: 'bkqi47ar8zqsu4sdue6p-mysql.services.clever-cloud.com',
    user: 'u2b90ospqufnftrg',
    password: 'a7fuxKkUgSh39qU8poFI',
    database: 'bkqi47ar8zqsu4sdue6p',
});

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'classSheduler',
// });

db.connect((err) => {
    if (err) {
        console.log(err)
        res.send(`Error occurs in database`);
    }
    console.log('Database Connected...');
});








hbs.registerHelper('times', function (n, block) {
    var accum = '';
    for (var i = 1; i <= n; ++i)
        accum += block.fn(i);
    return accum;
});










app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE Sheduler';
    db.query(sql, (err, result) => {
        if (err) console.log(err);
        console.log(result);
        res.send('Database created...');
    });
    console.log(res)
});

app.get('/createpoststable', (req, res) => {
    let sql = 'CREATE TABLE classSheudled(id  VARCHAR(255), Teacher VARCHAR(255), Month VARCHAR(255), Day VARCHAR(255),PRIMARY KEY(id),Time VARCHAR(255))';
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err)
            res.send(`Error occurs`);}
        console.log(result);
        res.send('classSheudled table created...');
    });
});



router.get("/", (req, res) => {
    let sql = 'SELECT * FROM classSheudled';
    let query = db.query(sql, (err, results) => {
        if (err){
            console.log(err)
            res.send(`Error occurs`);}
        console.log(results);
        res.render('index', { results })
    });
})

app.post('/submit', async (req, res) => {
    const { selectTeacher, selectTMonth, selectDate, selectTime } = req.body;
    let myid1 = selectTMonth.concat(selectDate);
    let myid2 = myid1.concat(selectTime);
    let post = { Teacher: selectTeacher, Month: selectTMonth, Day: selectDate, Id: myid2, Time: selectTime };
    let sql = 'INSERT INTO classSheudled SET ?';
    db.query(sql, post, (err, result) => {
        if (err) {
            res.send("Another lecture is allredy sheduled for these Teacher")

        }
        // console.log(result);
        // res.send("data added")
    })
    sql = 'SELECT * FROM classSheudled';
    let query = db.query(sql, (err, results) => {
        if (err) {
            console.log(err)
            res.send(`Error occurs`);
        }
        // console.log(results);
        res.render('index', { results })
    });
});
app.post('/getshedule', async (req, res) => {
    let sql = 'SELECT * FROM classSheudled';
    let query = db.query(sql, (err, results) => {
        if (err) {
            console.log(err)
            res.send(`Error occurs`);
        }
        console.log(results);
        res.send(result);
        //    res.status(200).json(results)
    });
});

app.listen(port, () => {
    console.log("Listening...");

})