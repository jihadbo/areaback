const Widget = require('./Widget');
const {Router} = require('express');
const router = new Router();
const db = require('./../db');

router.post('/', async (request, response) => {
    response.header("Access-Control-Allow-Origin: *");
    const {id, widget} = request.body;
    
    const addwi = db.query('UPDATE widget SET ' + widget + '=true WHERE id=\''+ id + '\' RETURNING id;');
    if (!addwi) {
      return response.status(400).json({message: 'User already exists'});
    }
    response.status(201).json({test : addwi.id});
  }
);

module.exports = router;