const express = require('express');
const bodyparser = require('body-parser');
const axios = require('axios');
const db = require('./db');
const SaveState = require('./db/models/saveState.js');
const app = express();
require('dotenv').config();
app.use(bodyparser.json());
app.use(express.static('client/public'));

app.get('/savestates', function (req, res) {
  SaveState.find()
    .then( response => res.status(200).send(response) )
    .catch( error => res.status(404).send(error) );
})
app.get('/savestates/:name', function (req, res) {
  SaveState.find({ 'name': req.params.name })
    .then( response => res.status(200).send(response) )
    .catch( error => res.status(404).send(error) );
})
app.delete('/savestates/:name', function (req, res) {
  SaveState.deleteOne({ 'name': req.params.name })
    .then( response => res.status(200).send(response) )
    .catch( error => res.status(404).send(error) );
})

app.post('/savestates', (req, res) => {
  SaveState
    .updateOne({'name': req.body.name},
    {
      'name': req.body.name,
      'pattern': req.body.pattern,
      'notes': req.body.notes,
      'octaves': req.body.octaves,
      'BPM': req.body.BPM
    }, {upsert: true})
    .then( response => res.status(200).send('Save Successful') )
    .catch( error => res.status(404).send(error) );
});



const PORT = 8001;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});