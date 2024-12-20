export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonState {
  list: Pokemon[];
  status: "idle" | "loading" | "succeeded" | "failed";
}