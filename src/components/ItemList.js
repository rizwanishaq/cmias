import React from "react";
import Item from "./Item";

const ItemList = ({ recipes }) => {
  return (
    <div className="card-columns">
      {recipes.map((recipe, id) => (
        <Item recipe={recipe} key={id} />
      ))}
    </div>
  );
};

export default ItemList;
