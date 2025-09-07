// Use when type is commonjs
// const express = require('express')
// const { test,test1} = require('../controllers/user.controlller')

// import the express
import express  from 'express';
import test from '../controllers/user.controlller.js';

// create router 
const router = express.Router()

// Create the api routes.
router.get('/test',test)

// Use when type is commonjs
// module.exports = router

export default router;