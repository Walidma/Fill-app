import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {PreventionComponent} from './components/prevention/prevention.component';
import {DiagnostiqueComponent} from './components/diagnostique/diagnostique.component';
import {TraitementComponent} from './components/traitement/traitement.component';
import {RemissionComponent} from './components/remission/remission.component';
import {AuthGuard} from './auth.guard';

const appRoutes: Routes= [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'profile',
        component:ProfileComponent,
        canActivate: [AuthGuard]
    },
    {
    	path:'prevention',
        component:PreventionComponent
    },
    {
    	path:'diagnostique',
        component:DiagnostiqueComponent
    },
    {
    	path:'traitement',
        component:TraitementComponent
    },
    {
    	path:'remission',
        component:RemissionComponent
    }

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);