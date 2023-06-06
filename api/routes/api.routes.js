const express = require("express");

const router = express.Router();

router.use('/article', require('./article.routes'));


module.exports = router;