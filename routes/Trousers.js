var express = require('express');
const Trouser_controlers= require('../controllers/Trousers'); 
var router = express.Router();

const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

router.get('/', Trouser_controlers.Trouser_view_all_Page ); 

router.get('/detail', Trouser_controlers.Trouser_view_one_Page);

router.get('/create', secured, Trouser_controlers.Trouser_create_Page); 

router.get('/update', secured ,Trouser_controlers.Trouser_update_Page); 

router.get('/delete',secured, Trouser_controlers.Trouser_delete_Page); 

router.get('/:id',Trouser_controlers.Trouser_detail);

router.put('/:id',Trouser_controlers.Trouser_update_put);




module.exports = router; 

