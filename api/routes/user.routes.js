const express = require("express");
const UserController = require("../controller/user.controller");

const router = express.Router();
const userController = new UserController();

router.post('/create', userController.create);
router.post('/register', userController.register);
router.get('/login', userController.login);
router.get('/getall', userController.getAll);


module.exports = router;