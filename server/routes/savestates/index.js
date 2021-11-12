const express = require('express');
// eslint-disable-next-line no-unused-vars
const db = require('../../db');
const SaveState = require('../../db/models/saveState');

const savestatesRouter = express.Router();

savestatesRouter.get('/', (req, res) => {
  SaveState.find()
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(404).send(error));
});
savestatesRouter.post('/', (req, res) => {
  SaveState
    .updateOne(
      { name: req.body.name },
      {
        name: req.body.name,
        pattern: req.body.pattern,
        notes: req.body.notes,
        octaves: req.body.octaves,
        BPM: req.body.BPM,
      },
      { upsert: true },
    )
    .then(() => res.status(200).send('Save Successful'))
    .catch((error) => res.status(404).send(error));
});
savestatesRouter.get('/:name', (req, res) => {
  SaveState.find({ name: req.params.name })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(404).send(error));
});
savestatesRouter.delete('/:name', (req, res) => {
  SaveState.deleteOne({ name: req.params.name })
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(404).send(error));
});

module.exports = savestatesRouter;
