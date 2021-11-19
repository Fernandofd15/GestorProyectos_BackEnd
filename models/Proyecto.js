const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const proyectosSchema = new Schema({
    
    idUsuario:{
        type: Schema.ObjectId,
        ref:'Usuario',
    },
   
    dteFechaInicio:{
        type: Date,
        default:Date.now,
    },
    dteFechaEntrega:{
        type: Date,
        default:Date.now,
    },
    arrTareas: [{
        idTarea:{
            type: Schema.ObjectId,
            ref:'Tarea',
        },
    }],
});

module.exports = mongoose.model('Proyecto', proyectosSchema);
