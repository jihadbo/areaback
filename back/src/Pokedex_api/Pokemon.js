const axios = require('axios');
const {Router} = require('express');
const router = new Router();

router.post('/', async (request, response) => {
    const {pokemon} = request.body;
    await axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemon).then(res => {
        response.status(201).json({name : res.data.name, img : res.data.sprites.front_default, type : res.data.types})
        }).catch(error => {
            response.status(400).json();
        });
});
module.exports = router;