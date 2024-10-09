const express = require('express');
const path = require('path');
const { DBConnection } = require('./config/database');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8080;
        this.paths = {
            main: '/main',
            auth: '/auth',
            // marca: '/marca',     
            // productos: '/productos',
            // historial: '/historial',
            // usuarios: '/usuarios',
        };
        this.middlewares();
        this.routes();
    };

    async DBConnect() {
        await DBConnection();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(express.static('public'));
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cookieParser());


        this.app.set('view engine', 'ejs');
        this.app.set('views', path.join(__dirname, 'views'));
    };

    routes() {
        this.app.use(this.paths.main, require('./routes/main.routes'));
        this.app.use(this.paths.auth, require('./routes/auth.routes.js'));
        // this.app.use(this.paths.marca, require('./routes/marca.routes'));
        // this.app.use(this.paths.productos, require('./routes/productos.routes'));
        // this.app.use(this.paths.historial, require('./routes/historial.routes'));
        // this.app.use(this.paths.usuarios, require('./routes/usuarios.routes'));
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor escuchando en el puerto ${this.port}`);
        });
    };

};

module.exports = { Server };
