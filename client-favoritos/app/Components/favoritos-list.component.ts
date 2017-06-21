import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router'; 

import {FavoritoService} from '../services/favorito.service';
import {Favorito} from '../models/favorito';

@Component({
    selector: 'favoritos-list',
    templateUrl: 'app/views/favoritos-list.html',
    providers: [FavoritoService]
})

export class FavoritosListComponent implements OnInit
{
    title: string;
    favoritos : Favorito[];
    errorMessage : string;
    constructor(private _favoritoService: FavoritoService)
    {
        this.title = 'Listado de marcadores nuevo';
    }

    ngOnInit(){
        console.log('FavoritosListComponente. Cargando!!');
        this._favoritoService.getFavoritos().subscribe(
            result =>{
                console.log(result);        
                this.favoritos = result.favoritos;
                if (!this.favoritos) {
                    alert('Error en el servidor');
                }                
            },
            error =>{
                this.errorMessage = <any>error;
                if(this.errorMessage != null){
                    console.log(this.errorMessage);
                    alert('Error en la petición');
                }
            }        
        );
    }    
}