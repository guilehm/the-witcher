const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');

const DEBUG = process.env.DEBUG || 1;
const app = new express();

app.use(morgan('short'));
app.use(helmet());

const mongoUrl = process.env.MONGODB_URI;
mongoose.connect(mongoUrl, { useNewUrlParser: true })
    .then(() => console.log('Connected to Mongo'))
    .catch(e => console.log('Something went wrong', e));

const getGameController = require('./controllers/get-game-controller');
const friendListController = require('./controllers/friend-list-controller');
const findPlayersController = require('./controllers/find-players-controller');
const playerStatsController = require('./controllers/player-stats-controller');

app.get('/fortnite/', getGameController);
app.get('/friends/', friendListController);
app.get('/players/:name/', findPlayersController);
app.get('/players/:id/stats/', playerStatsController);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    let message = DEBUG ? 'Starting development server on port' : 'App listening on port';
    console.log(message, `${PORT}`);
});
