const axios = require('axios');
const {Router} = require('express');
const router = new Router();

router.post('/', async (request, response) => {
    const {pokeball} = request.body;
    await axios.get('https://pokeapi.co/api/v2/type/' + request.body.type).then(res => {
        response.status(201).json({damage : res.data.damage_relations})
        }).catch(error => {
            response.status(400).json();
        });
});
module.exports = router;