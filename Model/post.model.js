const mongoose = require('mongoose') ; 

const productSchema= mongoose.Schema({

champs1 : {
type: String ,
required: true 
} ,
champs2 : {
type: String ,
required: true 
} ,
champs3 :{
    type: String ,
    required: true

},
champs4 :{
    type: String ,
    required: true

},
}) ; 
module.exports= mongoose.model('products' , productSchema) ; 
