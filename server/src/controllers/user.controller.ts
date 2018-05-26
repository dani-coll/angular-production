import UserService from '../services/user.service'

class UserController {
	private _userService: UserService = new UserService()

	getUserRepos = async (req, res) => {
		if (!req.params.username) return res.status(400).send('Bad Request')
		let repos = await this._userService.getUserRepos(req.params.username)
		return res.json({repos})
	}

	getUserFollowers = async (req, res) => {
		if (!req.params.username) return res.status(400).send('Bad Request')
		let followers = await this._userService.getUserFollowers(req.params.username)
		return res.json({followers})
	}

	getUser = async (req, res) => {
		if (!req.params.username) return res.status(400).send('Bad Request')
		let user = await this._userService.getUser(req.params.username)
		if (!user) return res.status(404).send('Not found')
		return res.send(user)
	}


	getUsers = async (req, res) => {
		if (!req.query.username) return res.status(400).send('Bad Request')
		let users = await this._userService.getUsers(req.query.username)
		return res.json({users})
	}
}

export default UserController