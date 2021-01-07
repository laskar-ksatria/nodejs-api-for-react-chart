require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
const Socket = require('socket.io');
const server = http.createServer(app);
const Io = Socket(server);
const PORT = process.env.PORT;

//mongoDB connect
require('./config/db.connect')();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Main route
app.use((req,res,next) => {
    req.Io = Io;
    next();
})
app.use(require('./routes'));

server.listen(PORT, () => console.log(`Server listening on ${PORT}`));

Io.on('connection', socket => {
    console.log(`Io connect`);
    socket.on(`disconnect`, () => console.log('Io disconnect'));
})
