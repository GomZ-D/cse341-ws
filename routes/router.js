// const express = require('express');
// const routes = express.Router();
const routes = require('express').Router();


routes.get('/', (req,res)=> {
    res.send('Sarah Birch');
});
routes.get('/home', (req,res)=> {
    res.send('Diego GomZ');
});
routes.get('/about', (req,res)=> {
    res.send('Student');
});

module.exports = routes;