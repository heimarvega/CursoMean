import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { FavoritosListComponent} from './Components/favoritos-list.component';
import {FavoritoDetailComponent} from './Components/favorito-detail.component';

const appRoutes : Routes = [
    {path: '', component: FavoritosListComponent},
    {path: 'marcador/:id', component: FavoritoDetailComponent},
    {path: '**', component: FavoritosListComponent}
];


export const appRoutingProviders : any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
