
 export interface Pokemon {
    height?: number;
    heldItem?: string[];
    id?: number;
    isDefault?: boolean;
    sprites?: Sprite;
 }

 export interface Sprite {

    front_default: string;
 }

 export interface Result {
    name: string
 }

 export interface PokemonResponse{
     results: Result[];
     pokemon: Pokemon;
 }