let http = require('http');
let express = require('express');
let app = express();
app.use(express.urlencoded());
let mongoose = require('mongoose');

const port = 3000;

const server = http.createServer(app);
server.listen(port, function() {
    console.log(`server running in ${port}`);    
});