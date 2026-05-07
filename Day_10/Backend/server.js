const express = require('express');
require('dotenv').config();
const cors = require('cors');

// # route import

const { authModel } = require('./model/auth.model.js')
const { Connection } = require('./config/db.js')

const app = express();

// # middleware

app.use(express.json(), express.text());

// # signup

app.post('/signup', async(req, res) => {
    console.log('🚀 ~ req:', req.body);

    // # logic where my date is there or not

    if(req.body === undefined || (!req.body.email && !req.body.password)) {
        res.status(404).send({ msg: 'not found'});
    } else {
        const authDataSave = new authModel(req.body);
        await authDataSave.save();
        res.status(201).json({ msg: 'create user in DB', data: authDataSave });
    }
    
});

// login

app.post('/login', async (req, res) => {
  if (req.body === undefined || (!req.body.email && !req.body.password)) {
    res.status(404).send({ msg: 'not found' });
  }




// user get Data

const dataOfuser = await authModel.find({ email: req.body.email });

  if (dataOfuser.length > 0) {
    if (
      dataOfuser[0].email === req.body.email &&
      dataOfuser[0].password === req.body.password
    ) {
      res.send(' password  correct ✅');
    } else {
      res.send('password inccorect ❌');
    }
  } else {
    res.send('please sign-in first, your data is not present in DB');
  }
});


// routes

// server start

    
app.listen(process.env.port, async () => {
    try {
        await Connection;
        console.log("DB is Connected")
    } catch (error) {
        console.log('🚀 ~ error:', error);
        console.log("DB not Connected");
    } finally {
        console.log(`port is running on ${process.env.port}`);
    };
});