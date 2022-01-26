const axios = require('axios');
const {Router} = require('express');
const router = new Router();

router.post('/', async (request, response) => {
    const {token} = request.body;
    var header = {
        'Authorization': "Bearer " + token
    };
    await axios.get("https://api.spotify.com/v1/me/player", {headers : header}).then( data => {
        if (data.data === "") {
            response.status(201).json({no_data : true, item : "", is_playing : "", progress_ms : ""});
        } else {
            response.status(201).json({
                item: data.data.item,
                is_playing: data.data.is_playing,
                progress_ms: data.data.progress_ms,
                no_data: false
            });
        }
    }).catch(error => {
        response.status(400).json();
    });
});
module.exports = router;