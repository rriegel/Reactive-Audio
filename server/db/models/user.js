const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
// eslint-disable-next-line no-unused-vars
const db = require('../index');

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;
