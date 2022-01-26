const axios = require('axios');
const {Router} = require('express');
const router = new Router();

router.post('/', async (request, response) => {
    const {pokeball} = request.body;
    await axios.get('https://pokeapi.co/api/v2/item/' + request.body.pokeball).then(res => {
        response.status(201).json({name : res.data.name, img : res.data.sprites.default, cost: res.data.cost})
        }).catch(error => {
            response.status(400).json();
        });
});
module.exports = router;