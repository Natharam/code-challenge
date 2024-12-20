export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonState {
  list: Pokemon[];
  status: "loading" | "succeeded" | "failed";
}