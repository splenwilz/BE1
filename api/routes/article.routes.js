const express = require("express");
// const categoryController = require('../controllers/category.controller');
const ArticleController = require("../controller/article.controller");
// const article = require("../article.model");

const router = express.Router();
const articleController = new ArticleController();

router.post('/add', articleController.add)
router.get('/getall', articleController.getAll)
router.post('/getcontent', articleController.getContent)
router.post('/getcontext', articleController.getContext)
router.post('/getcontxt', articleController.getContxt)
router.post('/getupto', articleController.getUpto)
router.post('/getupto1', articleController.getUpto1)
router.post('/getupto2', articleController.getUpto2)

router.get('/post/:id', articleController.post)


module.exports = router;