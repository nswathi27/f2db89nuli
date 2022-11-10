const mongoose = require("mongoose") 
const trouserSchema = mongoose.Schema({ 
    Trouser_Type: String, 
    Trouser_size: Number, 
    Trouser_color: String 
}) 
 
module.exports = mongoose.model("Trouser", 
trouserSchema) 