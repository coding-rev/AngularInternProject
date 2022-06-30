import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { MyService } from './test.service';

import {PokemonAbilitiesService} from './service/pokemon-abilities.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MyService,
    PokemonAbilitiesService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
