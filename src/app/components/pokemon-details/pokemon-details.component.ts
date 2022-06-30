import { Component, OnInit } from '@angular/core';
import { PokemonApiServiceService } from '../../service/pokemon-api-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  public name: string = "";
  public image: string = "";
  public apiSelectedPokemon?: any;

  constructor(private pokeApiService: PokemonApiServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getInitData();
  }

  getInitData(): void{
    if(!history.state.name || !history.state.image){
      this.router.navigate(['/pokemon'])
    }else{
      this.name   = history.state.name
      this.image  = history.state.image;
      this.getApiPokemonDetail(this.name);
    }
  }

  getApiPokemonDetail(name: string): void{
    // Fetch data from API
    this.pokeApiService.getPokemon(name).subscribe((data)=>{
       this.apiSelectedPokemon = data;
    });
    
  }
}
