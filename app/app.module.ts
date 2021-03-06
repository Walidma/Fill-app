import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing, appRoutingProviders} from './app.routing';
import { AppComponent }  from './app.component';
import {AUTH_PROVIDERS} from 'angular2-jwt';

import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';

import {PreventionComponent} from './components/prevention/prevention.component';
import {DiagnostiqueComponent} from './components/diagnostique/diagnostique.component';
import {TraitementComponent} from './components/traitement/traitement.component';
import {RemissionComponent} from './components/remission/remission.component';

import {Auth} from './services/auth.service';
import {AuthGuard} from './auth.guard';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent, HomeComponent, ProfileComponent, RemissionComponent, DiagnostiqueComponent,
  					TraitementComponent, PreventionComponent ],
  bootstrap: [ AppComponent ],
  providers: [
    appRoutingProviders,
    AUTH_PROVIDERS,
    Auth,
    AuthGuard
  ]
})

export class AppModule { }
