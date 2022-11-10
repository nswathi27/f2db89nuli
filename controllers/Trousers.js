var Trouser = require('../models/Trousers'); 
 
// List of all Trousers 
exports.Trouser_list = async function(req, res) { 
    try { 
        theTrousers = await Trouser.find(); 
        res.send(theTrousers); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
    
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


// VIEWS 
// Handle a show all view 
exports.Trouser_view_all_Page = async function(req, res) { 
    try{ 
        theTrousers = await Trouser.find(); 
        res.render('Trousers', { title: 'Trouser Search Results', results: theTrousers }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};