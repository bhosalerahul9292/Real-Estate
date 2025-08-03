// import the express
const express = require('express')
const { test,test1} = require('../controllers/user.controlller')

// create router 
const router = express.Router()

// Create the api routes.
router.get('/test',test)

module.exports = router