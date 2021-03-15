//import express 
const { request, response } = require('express');
let express = require ('express'); 

//initialize the app 
let app = express(); 

app.use(express.urlencoded());

//send message for default URL
app.get('/', function(request, response) {
    response.render('form.ejs'); 
});

//launch app to listen to specified port
app.listen(8000, function() {
    console.log('Running on port 8000');
});
