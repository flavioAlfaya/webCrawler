var express = require('express')
var router = express.Router()

// chamada do controller
const home  = require("../controllers/HomeController");

router.get('/',home)

module.exports = router