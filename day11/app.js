const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRouter = require('./api/book/book.router')
const userRouter = require('./api/user/user.router')
const config = require('./config');

mongoose.connect(config.mongoConnectionString);

const PORT = 3000;

const app = express();
app.use(bodyParser);
app.use('/api/book', bookRouter)
app.use('/api/user', userRouter)

app.listen(PORT, function() {
    console.log(`Server is listening on ${PORT}`);
});