import { PokemonType } from "./pokemonType.interface";

export interface Pokemon {
    id: string;
    name: string;
    imageBack?: string;
    imageFront?: string;
    shinyImageBack?: string;
    shinyImageFront?: string;
    gifImage?: string;
    height?: number;
    weight?: number;
    types?: PokemonType[];
}