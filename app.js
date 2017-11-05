const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes');
const services = require('./services');


const port = 8000;


app.listen(port, () => {
  console.log('We are live on ' + port);
});