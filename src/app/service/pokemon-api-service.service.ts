import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiServiceService {
  private baseUrl = "https://pokeapi.co/api/v2/";
  private pokemonSubUrl = "pokemon/";
  
  constructor(private http: HttpClient) { }

  getPokemon(name: string):Observable<any>{
    const url = `${this.baseUrl}${this.pokemonSubUrl}${name}`;
    return this.http.get<any>(url);
   
  }
}
