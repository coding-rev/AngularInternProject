import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { pokemonData } from './mock/data';

const routes: Routes = [
  {path: 'pokemon', component: PokemonComponent},
  {path: 'pokemon-details', component: PokemonDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//Routing 
export const routingComponents = [PokemonComponent, PokemonDetailsComponent];
