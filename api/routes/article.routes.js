const express = require("express");
// const categoryController = require('../controllers/category.controller');
const ArticleController = require("../controller/article.controller");
// const article = require("../article.model");

const router = express.Router();
const articleController = new ArticleController();

router.post('/add', articleController.add)
router.get('/getall', articleController.getAll)
router.get('/getcontent', articleController.getContent)
router.get('/getcontext', articleController.getContext)


module.exports = router;