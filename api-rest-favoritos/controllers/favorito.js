'use strict'

function prueba (req,res){
    var nombre = req.params.nombre;
    res.send({
        data: [1,2,3],
        texto: 'Hola mundo con NodeJS y express '+ nombre});
}

function getFavorito(req,res)
{
    var favoritoId = req.params.id;    
    res.status(200).send({data: favoritoId});
}

function getFavoritos(req,res)
{
    var favoritoId = req.params.id;    
}

function saveFavorito(req,res)
{
    var params = req.body;
    res.status(200).send({favorito:params});    
}

function updateFavorito(req,res)
{
    var params = req.body;
    res.status(200).send({update:true, favorito:params});            
}

function deleteFavorito(req,res)
{
    var favoritoId = req.params.id;    
    res.status(200).send({data: favoritoId});    
}

module.exports = {
    prueba,
    getFavorito,
    saveFavorito,
    getFavoritos,
    updateFavorito,
    deleteFavorito
}