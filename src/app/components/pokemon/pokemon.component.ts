import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MyService } from '../../test.service';
import { PokemonAbilitiesService } from '../../service/pokemon-abilities.service';
import { PokemonModel } from 'src/app/model/pokemon.model';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  public pageName: string = 'Pokemon Component';
  public name: string = '';
  public currentPokemon: PokemonModel[] = [];

  constructor(
    private readonly myService: MyService,
    private readonly pokeService: PokemonAbilitiesService
  ) { }

  ngOnInit(): void {
    
  }

  getPokemonDetail(name: string): void{
    const searchResult: PokemonModel[] = this.pokeService.getPokemon(name);
    this.currentPokemon = searchResult; 
  }

}
