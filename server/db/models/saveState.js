const mongoose = require('mongoose');
// eslint-disable-next-line no-unused-vars
const db = require('../index');

mongoose.Promise = global.Promise;

const saveSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pattern: { type: Array, required: true },
  notes: { type: Array, required: true },
  octaves: { type: Array, required: true },
  BPM: { type: Number, default: 120, required: true },
});

const SaveState = mongoose.model('Save', saveSchema);

module.exports = SaveState;
