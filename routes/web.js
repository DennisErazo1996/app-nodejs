const { Router } = require('express');
const router = Router();

const peliculas = require('../apis/api-peliculas.json');
 
//routes
router.get('/', function(req, res){
    res.send({"Title":"hello world"});
})

router.get('/api/peliculas', function(req, res){
    res.json(peliculas)
});

module.exports = router;