const express = require('express');
const server = express();
const userRouter = require('./routers/userRouter');
const projectRouter = require('./routers/projectRouter');


server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({msg: "api running"});
})

server.use('/users', userRouter);
server.use('/projects', projectRouter);

module.exports = server;