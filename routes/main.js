const express = require('express')
const router = express.Router()
const {dashBoard,login} = require('../controllers/main')
const authorization = require('../middleware/authorization')

router.get('/dashBoard',authorization,dashBoard)
router.post('/login',login)

module.exports = router