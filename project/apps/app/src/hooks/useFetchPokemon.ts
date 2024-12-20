import { useEffect, useState } from "react";
import { Pokemon } from "../utils";

const apiUrl = import.meta.env.VITE_APP_API_URL

const useFetchPokemon = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setPokemonList(data.results);
      } catch (err: any) {
        setError(err?.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  return { pokemonList, loading, error };
};

export default useFetchPokemon;