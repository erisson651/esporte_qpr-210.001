import { Routes } from '@angular/router';

import { AtletaComponent } from './component/atleta-component/atleta-component';

import { HomeComponent } from './component/home-component/home-component';

export const routes: Routes = [
    {
       path:"",
       redirectTo:"/home",
       pathMatch:"full"
    },
    {
        path: "home",
        Component:HomeComponent
    },
    {
        path:"cadastroAtlteta",
        Component: AtletaComponent
    }

];
