
'use strict'
var mongoose = require('mongoose')
var app = require('./app')
var port = process.env.PORT || 3678;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/cursofavoritos',(err, res) => {
    if (err) {
        throw err;        
    } else {
        app.listen(3678,function(){
            console.log(`Este API Rest favoritos funcionando en http://localhost:${port}`);        
        })
    }
});
