const axios = require('axios');
const {Router} = require('express');
const router = new Router();

router.post('/', async (request, response) => {
    const {city, temp} = request.body;
    await axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=ae948f7ac6572fe4bf5687a7c5201e37&units=' + temp).then(res => {
        response.status(201).json({temp : res.data.main.temp})
        }).catch(error => {
            response.status(400).json();
        });
});
module.exports = router;