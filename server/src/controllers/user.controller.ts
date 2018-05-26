import UserService from '../services/user.service'

class UserController {
	private _userService: UserService = new UserService()

	getUser = async (req, res) => {
		if (!req.params.username) return res.status(400).send('Bad Request')
		let user = await this._userService.getUser(req.params.username)
		if (!user) return res.status(404).send('Not found')
		return res.send(user)
	}

	getUsers = async (req, res) => {
		if (!req.query.username) return res.status(400).send('Bad Request')
		let user = await this._userService.getUsers(req.query.username)
		if (!user) return res.status(404).send('Not found')
		return res.send(user)
	}
}

export default UserController