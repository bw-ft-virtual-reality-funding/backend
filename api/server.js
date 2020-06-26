const express = require('express');
const server = express();
const userRouter = require('./routers/userRouter');
const projectRouter = require('./routers/projectRouter');
const {restricted} = require('./helpers/services');
const cors = require("cors");
const helmet = require("helmet");



server.use(express.json());
server.use(helmet())
server.use(cors());

server.get('/', (req, res) => {
    res.status(200).json({msg: "api running"});
})

server.use('/api/users', userRouter);
server.use('/api/projects', restricted,  projectRouter);

module.exports = server;