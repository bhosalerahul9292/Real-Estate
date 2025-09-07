// const User = require("../models/user_model");
// const bycryptjs = require("bcryptjs");

import User from '../models/user_model.js'
import bycryptjs from 'bcryptjs'

const signup = async (req,resp,next) => {
  const { username, email, password } = req.body;

  const hasPassword = bycryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hasPassword });
  try {
    await newUser.save();
    resp.status(201).json("User created successfully");
  } catch (err) {
    // resp.status(500).json(err.message)
    // delegate the error using middleware which present in server.js
    next(err)
  }
};

// module.exports = { signup };

export default signup;