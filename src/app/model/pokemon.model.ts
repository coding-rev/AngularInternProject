import { AbilitiesModel } from "./abilities.model";

export interface PokemonModel{
    name: string;
    height: number;
    weight: number;
    base_experience: number;
    abilities: AbilitiesModel[];
}
