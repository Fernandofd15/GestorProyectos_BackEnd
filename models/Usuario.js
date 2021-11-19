const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
strNombre:{
    type: String,
    trim:true,
    },
strApellidos:{
    type:String,
    trim:true,
    
},
strCorreo:{
    type:String,
    trim:true,
    unique:true,
    lowercase:true,
},
strPassword:{
    type:String,
    trim:true,
},
strTipoUsuario:{
    type:String,
    trim:true,
},
createdAt:{
    type: Date,
    default: Date.now,
},
uptdatedAt:{
    type: Date,
    default: Date.now,
},
});

module.exports = mongoose.model('Usuario', usuariosSchema);