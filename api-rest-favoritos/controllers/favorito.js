'use strict'

var Favorito = require('../models/favoritos');

function prueba (req,res){
    var nombre = req.params.nombre;
    res.send({
        data: [1,2,3],
        texto: 'Hola mundo con NodeJS y express '+ nombre});
}

function getFavorito(req,res)
{
    var favoritoId = req.params.id;
    Favorito.findById(favoritoId, (err,favorito) => {
        if (err) {
            res.status(500).send({message: 'Error al devolver el favorito'});
        }
        else
        {
            if (!favorito) {
                res.status(404).send({message: 'No hay favorito con el id'});
            }
            else
            {
                res.status(200).send({favorito});
            }    
        }        
    });
    
}

function getFavoritos(req,res)
{
    Favorito.find({}).sort('-_id').exec((err,favoritos) => {
        if (err) {
            res.status(500).send({message: 'Error al devolver los favoritos'});
        }
        else
        {
            if (!favoritos) {
                res.status(404).send({message: 'No hay favoritos'});
            }
            else
            {
                res.status(200).send({favoritos});    
            }            
        }
    });       
}

function saveFavorito(req,res)
{
    var favorito = new Favorito();
    var params = req.body;
    
    favorito.title = params.title;
    favorito.description = params.description;
    favorito.url = params.url;

    favorito.save((err, favoritoStored) => {
        if(err)
        {
            res.status(500).send({message: 'Error al guardar el favorito'});
        }
        else
        {
            res.status(200).send({favorito: favoritoStored});
        }
    });   
}

function updateFavorito(req,res)
{
    var update = req.body;
    var favoritoId = req.params.id;

    Favorito.findByIdAndUpdate(favoritoId,update, (err,favoritoUpdated) => {
        if(err)
        {
            res.status(500).send({message: 'Error al actualizar el favorito'});
        }
        else{
            res.status(200).send({favorito: favoritoUpdated});
        }        
    });      
}

function deleteFavorito(req,res)
{
    var favoritoId = req.params.id;
    
    Favorito.findById(favoritoId, (err,favorito) => {
        if (err) {
            res.status(500).send({message: 'Error al devolver el favorito'});
        }
        else
        {
            if (!favorito) {
                res.status(404).send({message: 'No hay favorito con el id'});
            }
            else{
                favorito.remove(err => {
                    if (err) {
                        res.status(500).send({message: 'Error al borrar'});
                    }
                    else{
                        res.status(200).send({message: 'El favorito se ha eliminado'});
                        }       
                    })
                } 
        }       
    });
}
module.exports = {
    prueba,
    getFavorito,
    saveFavorito,
    getFavoritos,
    updateFavorito,
    deleteFavorito
}
