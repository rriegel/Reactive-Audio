/* eslint-disable no-console */
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const connectEnsureLogin = require('connect-ensure-login');
const User = require('./db/models/user');

const app = express();

const savestates = require('./routes/savestates');
// const login = require('./routes/login');

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static('client/public'));

app.use(session({
  secret: 'r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 60 * 1000 }, // 1 hour
}));
// Passport Local Strategy
passport.use(User.createStrategy());
// To use with sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// routes
app.use('/savestates', savestates);

const PORT = 8001;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
