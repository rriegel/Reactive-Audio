const express = require('express');
const bodyparser = require('body-parser');
const SC = 'https://api.soundcloud.com';
const credentials = require('./auth.js');
const axios = require('axios');
const app = express();
require('dotenv').config();
app.use(bodyparser.json());
app.use(express.static('client/public'));

axios.get(`${SC}/connect`, {
  client_id: `${process.env.CLIENT_ID}`,
  oauth_token: `OAuth 2-292505-86038902-LKeLzTPh7yepe3c`
})
 .then(result => console.log(result))
 .catch(error => console.log(error))

app.get('/', function (req, res) {
  console.log('what');
  res.status(200).send('SERVER TEXT')
})


let port = 8001

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});