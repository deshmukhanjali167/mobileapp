import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { FirstpageComponent } from './component/firstpage/firstpage.component';
import { first } from 'rxjs';

export const routes: Routes = [
    {path:'',
        redirectTo:"home",

        pathMatch:'full'
    }
    ,{
        path:"home",
        component:HomeComponent
    }
    ,{
        path:"first",
        component:FirstpageComponent
    }
];
