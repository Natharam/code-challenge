// /ui/List.tsx
import React, { useEffect } from "react";
import { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";

const List: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchPokemon());
  }, [dispatch]);

  const { list, status } = useSelector((state: RootState) => state.pokemon);

  return (
    <ul className="list-container">
      {status === 'loading' && <>loading...</>}
      {status === 'failed' && <>Error while fetching pokemon</>}

      {list.map((item, index) => (
        <li key={index} className="list-item">
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default List;
