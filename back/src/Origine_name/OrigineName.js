const axios = require('axios');
const {Router} = require('express');
const router = new Router();

router.post('/', async (request, response) => {
    const {name} = request.body;
    await axios.get("https://api.nationalize.io/?name=" + name).then( data => {
        response.status(201).json({countries : data.data.country});
    }).catch(error => {
        response.status(400).json();
    });
});
module.exports = router;

