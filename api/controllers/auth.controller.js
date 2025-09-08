// const User = require("../models/user_model");
// const bycryptjs = require("bcryptjs");

import User from "../models/user_model.js";
import bycryptjs from "bcryptjs";
import errorHandler from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, resp, next) => {
  const { username, email, password } = req.body;

  const hasPassword = bycryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hasPassword });
  try {
    await newUser.save();
    resp.status(201).json("User created successfully");
  } catch (err) {
    // resp.status(500).json(err.message)
    // delegate the error using middleware which present in server.js
    next(err);

    // custom error function
    // next(errorHandler(550,'Error from the functions'))
  }
};

// module.exports = { signup };

export const signin = async (req, res, next) => {
  const {email, password} = req.body;
  try {
    // To check the validity of mail
    const vaildUser = await User.findOne({ email });
    if (!vaildUser) {
      return next(errorHandler(404, "User not found "));
    }

    // To check the validity of password
    const vaildPass = bycryptjs.compareSync(password, vaildUser.password);
    if (!vaildPass) {
      return next(errorHandler(401, "Incorrect password"));
    }

    // create the token which will check from the mongoDB and we need to use secret key for our application
    const token = jwt.sign({ id: vaildUser._id }, process.env.JWT_SECRET);
    // To exclude the password by sending user
  const {password:pass,...rest}=vaildUser._doc;

    // Store the token in the browser cookies.
    res.cookie("access_token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 60 * 60),
      })
      .status(200)
      .json(rest);

  } catch (error) {
    next(error);
  }
};

// export default { signup,signin };
