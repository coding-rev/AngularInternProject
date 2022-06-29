import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { PokemonComponent } from './components/pokemon/pokemon.component';
import { MyService } from './test.service';
<<<<<<< HEAD

import {PokemonAbilitiesService} from './service/pokemon-abilities.service';
=======
>>>>>>> 5df58ed26f96b94ebc052bd7bcdf8b3a5b2b8bf7

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonComponent
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
