const Widget = require('./Widget');
const {Router} = require('express');
const router = new Router();
const db = require('./../db');

router.post('/', async (request, response) => {
    response.header("Access-Control-Allow-Origin: *");
    const {id, widget} = request.body;
    
    db.query('UPDATE widget SET ' + widget + '=false WHERE id=\''+ id + '\';');
    response.status(201).json();
  }
);

module.exports = router;