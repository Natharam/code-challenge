// /ui/List.tsx
import React, { useEffect } from "react";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemon, removePokemon } from "../redux/pokemonSlice";

const List: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchPokemon());
  }, [dispatch]);

  const { list, status } = useSelector((state: RootState) => state.pokemon);

  const handleRemove = (name: string) => {
    dispatch(removePokemon(name)); // Dispatch the removePokemon action
  };


  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Failed to fetch Pokémon</p>;

  return (
    <ul className="list-container">
      {list.map((item, index) => (
        <li key={index} className="list-item">
          {item.name}
          <button onClick={() => handleRemove(item.name)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
