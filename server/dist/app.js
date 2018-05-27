"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");
const masterRouter = require("./routes/index");
class App {
    constructor() {
        this.express = express();
        this.express.use(bodyParser.urlencoded({
            extended: false
        }));
        this.express.use(compression());
        this.mountRoutes();
    }
    mountRoutes() {
        this.express.use(express.static(path.join(__dirname, 'client-dist')));
        this.express.use('/api', masterRouter);
        this.express.use((req, res) => {
            res.sendFile(path.join(__dirname, './client-dist/index.html'));
        });
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map