import List from "./components/List.tsx";
import useFetchPokemon from "./hooks/useFetchPokemon.ts";

const App = () => {
  const { pokemonList, loading, error } = useFetchPokemon()

  return (
    <div>
      <h1>Pokémon List</h1>
      {loading && <>loading...</>}
      {error && <>Error while fetching pokemon</>}
      <List items={pokemonList} /> {/* Pass names to List component */}
    </div>
  )
}

export default App
