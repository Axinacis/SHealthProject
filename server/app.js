const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose');
const database = require('./database.js');
const app = express();

const port = '3000';

mongoose.connect(database.DB, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.json());

app.listen(port, () => {
    console.log('Listening to port ' + port)
});