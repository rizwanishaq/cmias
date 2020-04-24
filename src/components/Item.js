import React, { useState, Fragment } from "react";

const Item = ({ recipe }) => {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <div className="card py-2 text-center">
        <img
          src={recipe.recipe.image}
          className="img-fluid w-50 mx-auto rounded-circle"
          alt=""
        />
        <div className="card-body">
          <h5>{recipe.recipe.label}</h5>
        </div>
        {show && (
          <ul className="list-group list-group-flush">
            {recipe.recipe.ingredientLines.map((ingredient, id) => (
              <li className="list-group-item" key={id}>
                {ingredient}
              </li>
            ))}
          </ul>
        )}
        <div>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            onClick={() => setShow(!show)}
          >
            Show
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Item;
