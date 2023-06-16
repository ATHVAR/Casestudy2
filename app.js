// Task1: initiate app and run server at 3000
const express = require('express'); // requiring express to create a server
const app = express(); //instance of express
require('dotenv').config();
const PORT=process.env.PORT;
const logger = require('morgan'); //logging
app.use(logger('dev'))

app.use(express.json()); // to parse incoming json data
app.use(express.urlencoded({extended:true})); // to parse incoming multi part data

require('./backend/dB connection') // i am requiring the file of db connection here

const employeeRouter = require('./backend/routes/employee')
app.use('/api', employeeRouter) //sending all employee based  api requests to employee router


app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`);
});  //this is where server starts listening

const path=require('path');
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));


//TODO: get data from db  using api '/api/employeelist'




//TODO: get single data from db  using api '/api/employeelist/:id'





//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}






//TODO: delete a employee data from db by using api '/api/employeelist/:id'





//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}


//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});



