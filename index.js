const express = require('express');
const mongoose = require('mongoose');
const app = express();

const MONGODB_URL = 'mongodb://localhost:27017/todo';
const PORT = process.env.PORT || 5000;
async function start() {
  try {
    mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4,
      // useCreateIndex: true,
      // useFindAndModify: true
    });
    app.listen(PORT, () => {
      console.log('ExpressJS is listening on port ' + PORT);
    });
  }
  catch (err) {
    console.error(err);
  }
}

start();