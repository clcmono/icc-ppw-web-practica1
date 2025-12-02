export interface PokemonDetail { 
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
  moves: any[];
  order: number;
  abilities: any[];
  stats: any[];
}
