// const express = require('express');
// const routes = express.Router();
const routes = require('express').Router();
const controllerRoutes = require('../controllers/function1.js');
// *****send it to controllers to clean the code.
// routes.get('/', (req,res)=> {
//     res.send('Sarah Birch');
// });
// routes.get('/about', (req,res)=> {
//     res.send('Student');
// });
// routes.get('/home', (req,res)=> {
//     res.send('Diego GomZ');
// });

// routes.get('/', require('../controllers/function1.js'));
// routes.get('/home', require('../controllers/function1.js'));

routes.get('/', controllerRoutes.saraRoute);
routes.get('/home', controllerRoutes.diegoRoute);

module.exports = routes;