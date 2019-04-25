const http = require('http');
const express = require('express');
const app = express();
app.use(express.urlencoded());
const mongoose = require('mongoose');

const db = require('./db');
const me = require('./me');

app.use('/db', db);
app.use('/me', me);

const port = 3000;

const server = http.createServer(app);
server.listen(port, function() {
    console.log(`server running in ${port}`);    
});