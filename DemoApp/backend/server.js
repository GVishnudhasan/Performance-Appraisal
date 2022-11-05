const express = require('express');
const connection = require('./db');
const app = express();

const PORT = process.env.PUBLIC_PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/all', (req, res)=> {
    connection.query('SELECT * FROM sample', (err, results, fields) => {
        if (err) throw err;
        res.send(results);
    });
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});