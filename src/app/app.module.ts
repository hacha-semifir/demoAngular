// Imports des modules d'angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { UserComponent } from './components/user/user.component';
import { CarteVisteComponent } from './components/carte-viste/carte-viste.component';
import { AlertButtonComponent } from './components/alert-button/alert-button.component';
import { ListeComponent } from './components/liste/liste.component';
import { MagieComponent } from './components/magie/magie.component';
import { ListeFiltreComponent } from './components/liste-filtre/liste-filtre.component';
import { UserCardsComponent } from './components/Exercices/exo01/user-cards/user-cards.component';
import { HidderComponent } from './components/Exercices/exo01/hidder/hidder.component';
import { ShowDateComponent } from './components/show-date/show-date.component';
import { GenericAlertButtonComponent } from './components/generic-alert-button/generic-alert-button.component';
import { ButtonMenuComponent } from './components/button-menu/button-menu.component';
import { HorlogeComponent } from './components/Exercices/exo02/horloge/horloge.component';
import { ClockMenuComponent } from './components/Exercices/exo02/clock-menu/clock-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    UserComponent,
    CarteVisteComponent,
    AlertButtonComponent,
    ListeComponent,
    MagieComponent,
    ListeFiltreComponent,
    UserCardsComponent,
    HidderComponent,
    ShowDateComponent,
    GenericAlertButtonComponent,
    ButtonMenuComponent,
    HorlogeComponent,
    ClockMenuComponent
  ],
  //// on déclarera ici les modules à importer
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
