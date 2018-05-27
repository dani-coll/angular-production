"use strict";
const express = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = express.Router();
const userController = new user_controller_1.default();
router.use('/user/:username/repos', userController.getUserRepos);
router.use('/user/:username/followers', userController.getUserFollowers);
router.use('/user/:username', userController.getUser);
router.use('/users', userController.getUsers);
module.exports = router;
//# sourceMappingURL=index.js.map