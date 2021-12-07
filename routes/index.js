const express = require('express');

const router = express.Router();

const usuariosController = require('../controllers/usuariosController');
const tareasController = require('../controllers/tareasController');
const proyectosController = require('../controllers/proyectosController');



module.exports = function(){
   //post:usuarios
   router.post('/usuarios', usuariosController.add);
   // get: /usuarios
   router.get('/usuarios', usuariosController.list);
   
   //leer usuario
   //get: /usuarios/:id
   router.get('/usuarios/:id', usuariosController.show);
   
   //Put:/usuarios/:id
   router.put('/usuarios/:id', usuariosController.update);
   // delete:/usuarios/:id
   router.delete('/usuarios/:id', usuariosController.delete);
  
   //Tareas
  router.post('/tareas', tareasController.add);
   router.get('/tareas', tareasController.list);
   router.get('/tareasfinalizadas', tareasController.listTareaF);
   router.get('/tareaspendientes', tareasController.listTareaP);
   router.get('/tareasxusuarioDev/:id', tareasController.listTareaXidUsuarioDev);
   router.get('/tareasxusuarioTester/:id', tareasController.listTareaXidUsuarioTester);
   router.get('/tareasxusuarioAdmin/:id', tareasController.listTareaXidUsuarioAdm);
   router.get('/tareas/:id', tareasController.show);
   router.put('/tareas/:id',  tareasController.update);
   router.delete('/tareas/:id', tareasController.delete);

   router.post('/proyectos', proyectosController.add);
   router.get('/proyectos', proyectosController.list);
    //Put:/usuarios/:id
    router.put('/proyectos/:id', proyectosController.update);
    router.get('/proyectos/:id', proyectosController.show);
    router.delete('/proyectos/:id', proyectosController.delete);

    return router; 
}