const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/database');
const path =require('path');
const cors= require('cors');
const  passport = require ('passport');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

mongoose.Promise = global.Promise;
mongoose.connect(config.uri+config.db, {
  useMongoClient: true,
  /* other options */
}, (err) => {
  if (err) {
    console.log(`FAILURE Can not connect to database ${config.uri} ` + err);
  }else  {
    console.log(config.secret);
    console.log(`SUCCESS Connected to database ${config.db}  ` );

  }
});

app.use(cors());
app.use(bodyParser.json());

// REST  Routes
const users = require('./routes/users');
app.use('/rest/users',users);

// Angular Client Routes
app.use(express.static(__dirname + '/client/dist'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname +'/client/dist/index.html'));
})

// 404 NOT FOUND
app.get('/',(req,res,next)=>{res.send('<h1>404 Not Found</h1>')});

app.listen(port, () => {
  console.log(`App listening sur host02 on port ${port}`);
})
