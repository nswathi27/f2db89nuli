var express = require('express');
const Trouser_controlers= require('../controllers/Trousers'); 
var router = express.Router();



router.get('/', Trouser_controlers.Trouser_view_all_Page ); 

router.get('/detail', Trouser_controlers.Trouser_view_one_Page);

router.get('/create', Trouser_controlers.Trouser_create_Page); 

router.get('/update', Trouser_controlers.Trouser_update_Page); 

router.get('/delete', Trouser_controlers.Trouser_delete_Page); 

router.get('/:id',Trouser_controlers.Trouser_detail);

router.put('/:id',Trouser_controlers.Trouser_update_put);




module.exports = router; 

