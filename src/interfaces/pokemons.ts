export interface Pokemon {
  name: string;
  url: string;
  sprites: string;
}

interface Type {
  name: string;
  url: string;
}

interface Types {
  slot: number;
  type: Type;
}

export interface PokemonId extends Pokemon {
  id: number;
  types: Types[];
}

export interface PokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}
