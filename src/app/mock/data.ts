import { PokemonModel } from '../model/pokemon.model';

export const pokemonData: [PokemonModel, PokemonModel] = [
    {
        name: "Ditto",
        height: 110,
        weight: 50,
        base_experience: 600,
        abilities: [{
            name: "limber",
            url: "https://pokeapi.co/api/v2/ability/7/",
            is_hidden: false,
        },
        {
            name: "limber",
            url: "https://pokeapi.co/api/v2/ability/7/",
            is_hidden: true,
        },
        {
            name: "limber",
            url: "https://pokeapi.co/api/v2/ability/7/",
            is_hidden: false,
        }
        ]
    },
    {
        name: "Pikachu",
        height: 200,
        weight: 90,
        base_experience: 450,
        abilities: [{
            name: "iron-tail",
            url: "https://pokeapi.co/api/v2/ability/7/",
            is_hidden: false,
        },
        {
            name: "iron-tail",
            url: "https://pokeapi.co/api/v2/ability/7/",
            is_hidden: true,
        }
        ]
    }

] 