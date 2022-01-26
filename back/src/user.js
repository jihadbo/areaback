const express = require('express');
const User = require('./users');

var router = express.Router();

router.post('/', async (request, response) => {
    response.header("Access-Control-Allow-Origin: *");
    const {email, password} = request.body;
    if (!email || !password) {
      return response
        .status(400)
        .json({message: 'email and password must be provided'});
    }
    const user = await User.create(email, password);
    if (!user) {
      return response.status(400).json({message: 'User already exists'});
    }
    User.createWidget(user.id);
    response.status(201).json({id: user.id});
  }
);

module.exports = router;
