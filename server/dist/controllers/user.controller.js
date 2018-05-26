"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("../services/user.service");
class UserController {
    constructor() {
        this._userService = new user_service_1.default();
        this.getUserRepos = (req, res) => __awaiter(this, void 0, void 0, function* () {
            if (!req.params.username)
                return res.status(400).send('Bad Request');
            let repos = yield this._userService.getUserRepos(req.params.username);
            return res.json({ repos });
        });
        this.getUserFollowers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            if (!req.params.username)
                return res.status(400).send('Bad Request');
            let followers = yield this._userService.getUserFollowers(req.params.username);
            return res.json({ followers });
        });
        this.getUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            if (!req.params.username)
                return res.status(400).send('Bad Request');
            let user = yield this._userService.getUser(req.params.username);
            if (!user)
                return res.status(404).send('Not found');
            return res.send(user);
        });
        this.getUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            if (!req.query.username)
                return res.status(400).send('Bad Request');
            let users = yield this._userService.getUsers(req.query.username);
            return res.json({ users });
        });
    }
}
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map