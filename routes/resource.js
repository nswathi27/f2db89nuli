var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var Trouser_controller = require('../controllers/Trousers'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// Trouser ROUTES /// 
 
// POST request for creating a Trouser.  
router.post('/Trousers', Trouser_controller.Trouser_create_post); 
 
// DELETE request to delete Trouser. 
router.delete('/Trousers/:id', Trouser_controller.Trouser_delete); 
 
// PUT request to update Trouser. 
router.put('/Trousers/:id', Trouser_controller.Trouser_update_put); 
 
// GET request for one Trouser. 
router.get('/Trousers/:id', Trouser_controller.Trouser_detail); 
 
// GET request for list of all Trouser items. 
router.get('/Trousers', Trouser_controller.Trouser_list); 
 
module.exports = router; 