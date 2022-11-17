var Trouser = require('../models/Trousers');

// List of all Trousers 
exports.Trouser_list = async function (req, res) {
    try {
        theTrousers = await Trouser.find();
        res.send(theTrousers);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }

};
// for a specific Trouser. 
exports.Trouser_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Trouser.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};



// Handle Trouser create on POST. 
exports.Trouser_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Trouser();
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"Trouser_type":"goat", "cost":12, "size":"large"} 
    document.Trouser_Type = req.body.Trouser_Type;
    document.Trouser_size = req.body.Trouser_size;
    document.Trouser_color = req.body.Trouser_color;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};



// Handle Trouser delete on DELETE. 
exports.Trouser_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Trouser.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle Trouser update form on PUT. 

exports.Trouser_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Trouser.findById(req.params.id)
        // Do updates of properties 
        if (req.body.Trouser_Type)
            toUpdate.Trouser_Type = req.body.Trouser_Type;
        if (req.body.cost) toUpdate.cost = req.body.cost;
        if (req.body.size) toUpdate.size = req.body.size;
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
exports.Trouser_view_all_Page = async function (req, res) {
    try {
        theTrousers = await Trouser.find();
        res.render('Trousers', { title: 'Trouser Search Results', results: theTrousers });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


// Handle a show one view with id specified by query 
exports.Trouser_view_one_Page = async function (req, res) {
    
    console.log("single view for id " + req.query.id)
    try {
        result = await Trouser.findById(req.query.id)
        res.render('Trouserdetail',
            { title: 'Trouser Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        console.log("error")
        res.send(`{'error': '${err}'}`);
    }
}; 


// Handle building the view for creating a Trouser. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.Trouser_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('Trousercreate', { title: 'Trouser Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a Trouser. 
// query provides the id 
exports.Trouser_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Trouser.findById(req.query.id) 
        res.render('Trouserupdate', { title: 'Trouser Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.Trouser_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Trouser.findById(req.query.id) 
        res.render('Trouserdelete', { title: 'Trouser Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 