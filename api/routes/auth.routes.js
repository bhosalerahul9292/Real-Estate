// const express = require('express')
// const { signup } =require('../controllers/auth.controller')


import express from 'express'
import signup from '../controllers/auth.controller.js'
const router = express.Router()

router.post('/signup',signup)

// module.exports = router

export default router