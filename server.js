const express = require('express');
const app = express();
// const router = express.Router();
const port = 3000;


// router.get('/', (req,res)=>{
//     res.send('Diego Gomz');
// })
// router.get('/home', (req,res)=> {
//     res.send('Studing at BYU');
// })
app.use('/', require('./routes/router'));
// app.get('/', (req, res)=>{
//     res.send('GomZ-10');
// });


app.listen(process.env.port || port);
console.log('Web Server is listening at port '+(process.env.port || port));