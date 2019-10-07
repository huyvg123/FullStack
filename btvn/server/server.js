const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fs = require('fs')
const gameRouter = require('./server/foder-game/game.router');
const config = require('./config');

mongoose.connect(config.mongoConnectionString);

const PORT = 3000;

const app = express();
app.use(bodyParser);
app.use('/server/game', gameRouter)

app.listen(PORT, function() {
    console.log(`Server is running localhost on ${PORT}`);
});