const express = require('express');

const monkeyIslandRouter = require('../monkeyIsland/monkeyIslandRouter.js');

const server = express();

server.use(express.json());

server.use('/api/monkey-island', monkeyIslandRouter);

server.get('/', async (req, res) => {
    res.status(200).json({ message: 'I am Guybrush Threepwood, mighty pirate!' });
});

module.exports = server;