const express = require('express');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.path = {
            auth: '/auth'
        };

        this.routes();
        this.middlewares();

    }

    async dbConnect() {
        console.log(":D");
    }

    routes() {
        this.app.use(this.path.auth, require('../routes/auth.route'));
    }

    middlewares() {
        console.log("");
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    };
}

module.exports = { Server };