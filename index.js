const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path =require('path');

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

app.use(express.static(__dirname + '/client/dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname +'/client/dist/index.html'));
})

app.listen(8080, () => {
  console.log('App listening on port 8080...')
})
