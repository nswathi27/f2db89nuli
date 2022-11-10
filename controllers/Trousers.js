var Trouser = require('../models/Trousers'); 
 
// List of all Trousers 
exports.Trouser_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Trouser list'); 
}; 
 
// for a specific Trouser. 
exports.Trouser_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Trouser detail: ' + req.params.id); 
}; 
 
// Handle Trouser create on POST. 
exports.Trouser_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Trouser create POST'); 
}; 
 
// Handle Trouser delete form on DELETE. 
exports.Trouser_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Trouser delete DELETE ' + req.params.id); 
}; 
 
// Handle Trouser update form on PUT. 
exports.Trouser_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Trouser update PUT' + req.params.id); 
}; 