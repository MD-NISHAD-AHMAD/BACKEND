const express = require('express');
require('dotenv').config();

const { Connection, userModel } = require('./db');

const PORT = process.env.port;

const app = express();

app.use(express.json());

// read

app.get('/user', async(req, res) => {
    const userData = await userModel.find();
    res.send(userData);
});

// create

/* app.post('/userCreate', async (req, res ) => {
    const userData = await userModel.insertOne({
        name: "Gullu",
        age: 62,
        married: true
    });

    res.send(userData)

    // await userData.save();
}); */

// insert many

app.post('/userCreate', async (req, res ) => {
    const userData = await userModel.insertMany([{
        name: "Gullu",
        age: 62,
        married: true

    }, {
       name: "khushi",
       age: 21,
       married: false,
    }, {
        name: "afaan",
        age: 22,
        married: true
    }, {
        name: "rahmat",
        age:24,
        married: false
    }]);

    res.send(userData)

    // await userData.save();
});


app.patch('/userUpdate', async (req, res ) => {
    const userData = await userModel.updateOne({_id: "69f9c7d3ccdd0b0384356208"}, {name: "Gullu Zannati"});

    res.send(userData)

    // await userData.save();
});



app.listen(PORT, async () => {
    try {
        await Connection;
        console.log('DB is Connected');
    } catch (err) {
        console.log(err);
        console.log('DB is Disconnected');
    } finally {
        console.log(`server is running on ${PORT}`);
    }
});