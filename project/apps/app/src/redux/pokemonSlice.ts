import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PokemonState } from "../utils";

const apiUrl = import.meta.env.VITE_APP_API_URL

// Async thunk to fetch Pokémon
export const fetchPokemon = createAsyncThunk("pokemon/fetchPokemon", async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data.results; // Returns an array of Pokémon
});

const initialState: PokemonState = {
  list: [],
  status: "idle",
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchPokemon.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default pokemonSlice.reducer;
