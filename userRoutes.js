const express = require('express');

const userController = require('../controller/user-controller.js');


const router = express.Router();



router.post('/register', userController.register);
router.get('/login', userController.login);
router.get('/allusers', userController.allusers);



module.exports=router;
