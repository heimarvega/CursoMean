
'use strict'
var app = require('./app')

var port = process.env.PORT || 3678;

app.listen(3678,function(){
    console.log(`Este API Rest favoritos funcionando en http://localhost:${port}`);    
});