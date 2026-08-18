import { Routes } from '@angular/router';

import { HomeComponent } from './component/home-component/home-component';
import { AtletaComponent } from './component/atleta-component/atleta-component';
import { CorridaComponent } from './component/corrida-component/corrida-component';
import { AtltetaListaComponent } from './component/atlteta/atlteta-lista-componet/atlteta-lista-componet';
export const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'cadastroAtleta',
    component: AtletaComponent
  },

  {
    path: 'cadastroCorrida',
    component: CorridaComponent
  },
  {
    path:'listaAtleta',
    component: AtltetaListaComponent
  },

];