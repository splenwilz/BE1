const express = require("express");
const UserController = require("../controller/user.controller");

const router = express.Router();
const userController = new UserController();

router.post('/create', userController.create);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/getall', userController.getAll);
router.get('/profile', userController.profile);
router.post('/logout', userController.logout);


module.exports = router;