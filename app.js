const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;

const app = express();

const homeRoutes = require('./routes/home');
const userRoutes = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoutes);
app.use(userRoutes);

app.listen(port, console.log(`server is listening on ${port}`));
