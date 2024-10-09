const { Server } = require('./src/server');
const server = new Server;
require('dotenv').config()

server.DBConnect();
server.listen();