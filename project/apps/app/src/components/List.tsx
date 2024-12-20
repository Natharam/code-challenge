// /ui/List.tsx
import React from "react";
import { Pokemon } from "../utils";

interface ListProps {
  items: Pokemon[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul className="list-container">
      {items.map((item, index) => (
        <li key={index} className="list-item">
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default List;
