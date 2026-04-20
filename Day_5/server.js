const express = require('express');

const fs = require('fs');

// creation state of server

const app = express();

// middleware

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello');
});

// create

app.post('/create_note', (req, res) => {
    const data = req.body;
    console.log('🚀 ~ data:', data);

    fs.writeFile('./data.json', JSON.stringify(data), (err) => {
        if(err) {
            console.log(err)
        }
        res.send('done');
    });
});

/*
 read
 update
 delete 
 */

 app.listen(7000, () => {
    console.log('port i running on 7000')
 })