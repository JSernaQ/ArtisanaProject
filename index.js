const { Server } = require("./src/models/server");
const server = new Server();
require('dotenv').config()

server.dbConnect();
server.listen();