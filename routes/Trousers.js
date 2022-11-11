var express = require('express');
const Trouser_controlers= require('../controllers/Trousers'); 
var router = express.Router();



router.get('/', Trouser_controlers.Trouser_view_all_Page ); 

router.get('/:id',Trouser_controlers.Trouser_detail);

router.put('/:id',Trouser_controlers.Trouser_update_put);
module.exports = router; 

