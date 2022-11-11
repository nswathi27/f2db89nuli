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
exports.Trouser_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Trouser.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 


// Handle Trouser create on POST. 
exports.Trouser_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Trouser(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"Trouser_type":"goat", "cost":12, "size":"large"} 
    document.Trouser_Type = req.body.Trouser_Type; 
    document.Trouser_size = req.body.Trouser_size; 
    document.Trouser_color = req.body.Trouser_color; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 

 
// Handle Trouser delete form on DELETE. 
exports.Trouser_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Trouser delete DELETE ' + req.params.id); 
}; 
 
// Handle Trouser update form on PUT. 

exports.Trouser_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Trouser.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.Trouser_Type)  
               toUpdate.Trouser_Type = req.body.Trouser_Type; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.size) toUpdate.size = req.body.size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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