const express = require('express');
const bodyparser = require('body-parser');

const axios = require('axios');

const app = express();

app.use(bodyparser.json());
app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
  res.send('app initialized');
  res.end();
})
















let port = 8001

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});