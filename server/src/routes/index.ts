
import * as express from 'express'

import UserController from '../controllers/user.controller';


const router = express.Router()


const userController = new UserController()

router.use('/user/:username/repos', userController.getUserRepos)
router.use('/user/:username/followers', userController.getUserFollowers)
router.use('/user/:username', userController.getUser)
router.use('/users', userController.getUsers)


export = router