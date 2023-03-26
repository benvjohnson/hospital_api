//Setup Mongoose
const mongoose = require('mongoose');
require('dotenv').config();

//reading database url form env file
mongoose.connect('mongodb+srv://ben:ben@cluster0.gvd5o9e.mongodb.net/?retryWrites=true&w=majority');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to Database'));
db.once('open', function () {
    console.log('Connected to database!');
});
