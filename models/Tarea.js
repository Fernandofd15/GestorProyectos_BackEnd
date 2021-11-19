const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tareasSchema = new Schema({
strNombre:{
    type: String,
    trim:true,
    },
strStatus:{
    type: String,
    trim:true,
},
dteFechaInicio:{
    type: Date,
    default:Date.now,
},
dteFechaEntrega:{
    type: Date,
    default:Date.now,
},
arrUsuariosAsignados: [{
    idUsuario:{
        type: Schema.ObjectId,
        ref:'Usuario',
    },
}],
});

module.exports = mongoose.model('Tarea', tareasSchema);
