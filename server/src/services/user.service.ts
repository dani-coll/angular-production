import * as request from 'request'

import User from '../models/User'

class UserService {


	private _userUrl: string = 'https://api.github.com/users/'
	private _searchUrl: string = 'https://api.github.com/search/users?q='
	private _defaultOptions = {
		method: 'GET',
		headers: {'user-agent': 'node.js'}
	}
	async getUser(username): Promise<User> {
		this._defaultOptions['url'] = this._userUrl + username
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
		this._defaultOptions['url'] = this._searchUrl + username + '+in:login'

		return new Promise<User[]>((resolve, reject) => {
			request.get(this._defaultOptions, (err, resp, body) => {
			  if (err) {
					reject(err)
			  } else {
					resolve(JSON.parse(body))
			  }
			})
		})
	}

}

export default UserService