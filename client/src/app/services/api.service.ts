import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { User } from '../models/user';

@Injectable()

export class ApiService {
    baseUrl  = '/api/';
    constructor(
        private _http: Http
    ) {
        this._setDefaultHeaders();
    }

    private _options: RequestOptions;

    private _handleError(error) {
        console.error(`[APIService] ${error}`);
        return Promise.reject(error);
    }

    private _setDefaultHeaders () {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        this._options = new RequestOptions({ headers });
    }

    private _get(route) {
        return this._http.get(this.baseUrl + route, this._options)
            .toPromise()
            .then(response => response.json())
            .catch(error => this._handleError(error));
    }

    getUserRepos(username) {
        return this._get('user/' + username + '/repos');
    }
    getUserFollowers(username) {
        return this._get('user/' + username + '/followers');
    }
    getUser(username) {
        return this._get('user/' + username);
    }
    getUsers(username) {
        return this._get('users?username=' + username)
                   .then( response => (<any>response).users);
    }
}
