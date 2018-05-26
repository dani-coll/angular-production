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
const request = require("request");
class UserService {
    constructor() {
        this._userUrl = 'https://api.github.com/users/';
        this._searchUrl = 'https://api.github.com/search/users?q=';
        this._defaultOptions = {
            method: 'GET',
            headers: { 'user-agent': 'node.js' }
        };
        this._clientId = 'a5bef47ca6f664a2449d';
        this._clientSecret = '82ea404050d332b92daf4515c685f355bfd09a24';
        this._authParams = 'client_id=' + this._clientId + '&client_secret=' + this._clientSecret;
    }
    getUserRepos(username) {
        return __awaiter(this, void 0, void 0, function* () {
            this._defaultOptions['url'] = this._userUrl + username + '/repos?' + this._authParams;
            return new Promise((resolve, reject) => {
                request.get(this._defaultOptions, (err, resp, body) => {
                    if (err) {
                        console.error(err);
                        reject(err);
                    }
                    else {
                        let items;
                        try {
                            items = JSON.parse(body);
                        }
                        catch (_a) {
                            items = [];
                        }
                        resolve(items);
                    }
                });
            });
        });
    }
    getUserFollowers(username) {
        return __awaiter(this, void 0, void 0, function* () {
            this._defaultOptions['url'] = this._userUrl + username + '/followers?' + this._authParams;
            console.log(this._defaultOptions['url']);
            return new Promise((resolve, reject) => {
                request.get(this._defaultOptions, (err, resp, body) => {
                    if (err) {
                        console.error(err);
                        reject(err);
                    }
                    else {
                        let items;
                        try {
                            items = JSON.parse(body);
                        }
                        catch (_a) {
                            items = [];
                        }
                        resolve(items);
                    }
                });
            });
        });
    }
    getUser(username) {
        return __awaiter(this, void 0, void 0, function* () {
            this._defaultOptions['url'] = this._userUrl + username + '?' + this._authParams;
            return new Promise((resolve, reject) => {
                request.get(this._defaultOptions, (err, resp, body) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(JSON.parse(body));
                    }
                });
            });
        });
    }
    getUsers(username) {
        return __awaiter(this, void 0, void 0, function* () {
            this._defaultOptions['url'] = this._searchUrl + username + '+in:login&' + this._authParams;
            return new Promise((resolve, reject) => {
                request.get(this._defaultOptions, (err, resp, body) => {
                    if (err) {
                        console.error(err);
                        reject(err);
                    }
                    else {
                        let items;
                        try {
                            items = JSON.parse(body).items;
                            if (!items)
                                items = [];
                        }
                        catch (_a) {
                            items = [];
                        }
                        resolve(items);
                    }
                });
            });
        });
    }
}
exports.default = UserService;
//# sourceMappingURL=user.service.js.map