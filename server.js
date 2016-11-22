const express = require('express');
const app = express();
const PORT = 3005;
const mysql = 

app.get('/', function(req, res){
 res.send("hello world");
});

app.get('/employers' function(resp){
  $.ajax({
    url: '/employers',
    success: function(resp){
      console.log(resp);
    }
  })
});

app.listen(PORT, function(){
 console.log("server listening on port "+PORT);
});
