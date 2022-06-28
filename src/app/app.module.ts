import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { PokemonComponent } from './components/pokemon/pokemon.component';
import { MyService } from './test.service';
import { DetailPageComponentComponent } from './pages/detail-page-component/detail-page-component.component';
import { PokemonMainPageComponent } from './pages/pokemon-main-page/pokemon-main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonComponent,
    DetailPageComponentComponent,
    PokemonMainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
