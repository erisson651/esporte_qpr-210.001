import { Routes } from '@angular/router';

import { AtletaComponent } from './component/atleta-component/atleta-component';

import { HomeComponent } from './component/home-component/home-component';

import { CorridaComponent } from './component/corrida-component/corrida-component';

export const routes: Routes = [
    {
       path:"",
       redirectTo:"home",
       pathMatch:"full"
    },
    {
        path: "home",
        component:HomeComponent
    },
    {
        path:"cadastroAtleta",
        component:AtletaComponent
    },
{
    path:"corrida",
    component:CorridaComponent
}
];
