const {Router} = require('express');
const User = require('./users');
const router = new Router();

router.post('/', async (request, response) => {
  try {
    const {email, password} = request.body;
    const user = await User.find(email);
    if (!user || (password != user.password)) {
      return response.status(400).json({message: "je suis con"});
    }
    response.status(201).json({id: user.id});
  } catch (error) {
    console.error(
      `POST session ({ email: ${request.body.email} }) >> ${error.stack})`
    );
    response.status(500).json();
  }
});

module.exports = router;
