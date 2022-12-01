const mongoose = require("mongoose") 
const trouserSchema = mongoose.Schema({ 
    Trouser_Type: {type:String, minLength:2}, 
    Trouser_size: {type:Number,min:0,max:44}, 
    Trouser_color:{type:String}  
}) 
 
module.exports = mongoose.model("Trouser", 
trouserSchema) 