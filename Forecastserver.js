//Add required modules here
var express = require('express');
var request = require('request');
var app = express(); 
//http://localhost:3333/Frocat/mumbai/7



app.get('/Index',function(req,res){
  res.sendfile('index.html');
  
});


app.get('/AgModule.js',function(req,res){
  res.sendfile('AgModule.js');
  
});

app.get('/agController.js',function(req,res){
  res.sendfile('agController.js');
  
});

app.get('/Frocast/:zip_name/:days', function(req, res) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

      request.get({ url: "http://api.apixu.com/v1/forecast.json?key=c6a63eabc905408285992346161905&q="+ req.params.zip_name + "&days=" + req.params.days },  
          function(error, response, body) { 
              if (!error && response.statusCode == 200) { 
                  res.json(body); 
                  console.log(res);
                 } 
             }); 
     });

app.listen(3333,function(){
  console.log('3333');
});
