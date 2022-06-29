import { Injectable } from '@angular/core';
import { PokemonModel } from '../model/pokemon.model';
import { pokemonData } from '../mock/data';

@Injectable({
  providedIn: 'root'
})
export class PokemonAbilitiesService {
  

  getPokemon(name: string): PokemonModel[] {
    return pokemonData.filter((pokemon: PokemonModel)=> {
      return pokemon.name.includes(name);
    })
  }
}
