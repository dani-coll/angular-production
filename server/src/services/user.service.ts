import * as request from 'request'

import User from '../models/User'

class UserService {


	private _userUrl: string = 'https://api.github.com/users/'
	private _searchUrl: string = 'https://api.github.com/search/users?q='
	private _defaultOptions = {
		method: 'GET',
		headers: {'user-agent': 'node.js'}
	}
	private _clientId: string = 'a5bef47ca6f664a2449d'
	private _clientSecret: string = '82ea404050d332b92daf4515c685f355bfd09a24'
	private _authParams = 'client_id=' + this._clientId + '&client_secret=' + this._clientSecret
	async getUserRepos(username) {
		this._defaultOptions['url'] = this._userUrl + username + '/repos?' + this._authParams
		return new Promise((resolve, reject) => {
			request.get(this._defaultOptions, (err, resp, body) => {
			  if (err) {
				  	console.error(err)
					reject(err)
			  } else {
					let items;
					try {
						items = JSON.parse(body)
					} catch {
						items = []
					}
					resolve(items)
			  }
			})
		})
	}

	async getUserFollowers(username): Promise<User> {
		this._defaultOptions['url'] = this._userUrl + username + '/followers?' + this._authParams
		console.log(this._defaultOptions['url'])
		return new Promise<User>((resolve, reject) => {
			request.get(this._defaultOptions, (err, resp, body) => {
			  if (err) {
				  	console.error(err)
					reject(err)
			  } else {
					let items;
					try {
						items = JSON.parse(body)
					} catch {
						items = []
					}
					resolve(items)
			  }
			})
		})
	}

	async getUser(username): Promise<User> {
		this._defaultOptions['url'] = this._userUrl + username + '?' + this._authParams
		return new Promise<User>((resolve, reject) => {
			request.get(this._defaultOptions, (err, resp, body) => {
			  if (err) {
					reject(err)
			  } else {
					resolve(JSON.parse(body))
			  }
			})
		})
	}

	async getUsers(username): Promise<User[]> {
		this._defaultOptions['url'] = this._searchUrl + username + '+in:login&' + this._authParams
		return new Promise<User[]>((resolve, reject) => {
			request.get(this._defaultOptions, (err, resp, body) => {
			  if (err) {
					console.error(err)
					reject(err)
			  } else {
				  	let items;
					try {
						items = JSON.parse(body).items
						if(!items) items = []
					} catch {
						items = []
					}
					resolve(items)
			  }
			})
		})
	}

}

export default UserService