const express = require("express");
// const categoryController = require('../controllers/category.controller');
const ArticleController = require("../controller/article.controller");
// const article = require("../article.model");

const router = express.Router();
const articleController = new ArticleController();

router.post('/add', articleController.add)
router.get('/getall', articleController.getAll)
router.get('/post/:id', articleController.post)
router.get('/getcontent', articleController.getContent)
router.post('/getcontext', articleController.getContext)
router.post('/getsiblings', articleController.getSiblings)


module.exports = router;