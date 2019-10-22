const path = require('path');

const express = require('express');

const port = 3000;

const app = express();

const homeRoutes = require('./routes/home');
const userRoutes = require('./routes/users');

app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);
app.use(homeRoutes);

app.listen(port, console.log(`server is listening on ${port}`));
