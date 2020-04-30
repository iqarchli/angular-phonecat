
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

//getting (posts) routes
const jsonList = require('./server/routes/jsonList');

//app.use(express.static(path.join(__dirname,'app')));

app.use('/jsonList', jsonList);

// sending all requests to index.html
 app.get('*', (req, res)=> {
res.sendFile(path.join(_direname,'app/index.html'))
}); 



var dummyjson = require('dummy-json');


//app.use(express.static("app")); 

var template = fs.readFileSync('template.hbs', {encoding: 'utf8'});
var result = dummyjson.parse(template);

/* app.get('/', function (req, res,next) {
  res.write(req.url);
  res.redirect('/json'); 
 console.log('RUNNING JSON......');
}); */




app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/app/json-list/', function(req, res) {
  res.send('hello JSON');
});




/*
const express = require('express');
const app = express();

app.listen(4600, (req,res)=>{
           console.log('RUNNING');
           });

app.get('*',(req,res){
        res.sendFile(path.join(_dirname,'/index.html'))
        });*/