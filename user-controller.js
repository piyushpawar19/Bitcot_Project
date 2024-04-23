const User= require('../config/user');
const jwt= require('jsonwebtoken');
const multer = require('multer');
const fs= require('fs');
const bcrypt = require('bcrypt');


const register = async (req, res) => {
    const { fisrtName, LastName, email, password,confirmPassword } = req.body;
    const saltRounds = 10;
    // console.log(fisrtName);
    const newpassword =bcrypt.hash(password, saltRounds, function(err, hash) {
        return hash;
    });
    const registeredUser= User.create({
      fisrtName,
      LastName ,
      email,
      password,
      confirmPassword,
      createdAt: new Date(),
    })
    try {
      const user = await registeredUser.save()
      .then(user =>
      
        res.status(200).json({
          message: "User successfully created",
          user,
        })
      )
    } catch (err) {
      res.status(401).json({
        message: "User not successful created",
        error: err.mesage,
      })
    }


    
        // const key = "vbkbkkjbd";
        // const registeredUser = await user.save();
        // const token= jwt.sign(registeredUser, key);
        // res.status(201).json(token);
    }  


const login = async (req, res, next) => {
  const { email, password } = req.body;
        try {
          const user = await User.findOne({ email, password })
          if (!user) {
            res.status(401).json({
              message: "Login not successful",
              error: "User not found",
            })
          } else {
            res.status(200).json({
              message: "Login successful",
              user,
            })
          }
        } catch (error) {
          res.status(400).json({
            message: "An error occurred",
            error: error.message,
          })
        }
};

const allusers = async (req, res) => {
    try {
        const user = await User.find();
        // res.json(user);
        res.send(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};





module.exports.register = register;
module.exports.login = login;
module.exports.allusers = allusers;
