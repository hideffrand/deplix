const express = require('express');
const app = express();
const mysql = require('mysql2')
const cors = require('cors')


app.use(express.json());
app.listen(5173, () => {
   console.log('running server');
});

app.use(
    cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST'],
    credentials: true,
    })
);

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'deplix'
})

app.post('/', (req, res) => {
    console.log('oke')
})

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.execute(
      'INSERT INTO users (username, password) VALUES (?,?)',
      [username, password],
      (err, result)=> {
      console.log(err);
      }
    );
});
 