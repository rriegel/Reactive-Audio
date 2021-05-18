const express = require('express');
const bodyparser = require('body-parser');
const axios = require('axios');
const app = express();
require('dotenv').config();
app.use(bodyparser.json());
app.use(express.static('client/public'));

app.get('/', function (req, res) {
  console.log('what');
  res.status(200).send('SERVER TEXT')
})


let port = 8001

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});