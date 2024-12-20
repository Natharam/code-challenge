import useFetchPokemon from "./hooks/useFetchPokemon.ts";

const App = () => {
  const { pokemonList, loading, error } = useFetchPokemon()

  return (
    <div>
      <h1>Pokémon List</h1>
      {loading && <>loading...</>}
      {error && <>Error while fetching pokemon</>}
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
