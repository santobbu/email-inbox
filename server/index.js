const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
var responseEmails = require('./response.json');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/email', (req, res) => {
  const param = req.query.name;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(responseEmails));
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);