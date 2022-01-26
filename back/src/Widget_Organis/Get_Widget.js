const Widget = require('./Widget');
const {Router} = require('express');
const router = new Router();
const db = require('./../db');

router.post('/', async (request, response) => {
    response.header("Access-Control-Allow-Origin: *");
    const {id} = request.body;
    // const widget = Widget.Get_Widget(id, response);
    db.query('SELECT * FROM widget WHERE id=\'' + id + '\'LIMIT 1;', (err, res) => {
        if (err) {
            response.status(401).json({id : err.stack});
          return(err.stack)
        } else {
            response.status(201).json(res.rows[0]);
          return(res.rows[0])
        }});
  }
);

module.exports = router;