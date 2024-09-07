const { Server } = require("./models/server");
const server = new Server();
require('dotenv').config()

server.dbConnect();
server.listen();