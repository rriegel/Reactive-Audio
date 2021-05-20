const mongoose = require('mongoose');
const db = require('../index.js');
mongoose.Promise = global.Promise;

const saveSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pattern: { type: Array, required: true },
  notes: { type: Array, required: true },
  octaves: { type: Array, required: true }
});

const SaveState = mongoose.model('Save', saveSchema);

module.exports = SaveState;