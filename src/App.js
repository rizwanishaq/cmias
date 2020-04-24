import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemList from "./components/ItemList";

function App() {
  const [search, setSearch] = useState("chicken");
  const [recipes, setRecipes] = useState([]);
  const [formSubmit, setFormSubmit] = useState(false);

  const APP_ID = "3f8df52c";
  const APP_KEY = "b0c395f0690f0f60749181922a1b0188";

  useEffect(() => {
    const getRecipe = async () => {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      setRecipes(response.data.hits);
      console.log(response.data);
    };

    getRecipe();
  }, [formSubmit]);

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();
    setFormSubmit(!formSubmit);
  };

  return (
    <>
      <NavBar
        search={search}
        onInputChange={onInputChange}
        onSearch={onSearch}
      />
      <ItemList recipes={recipes} />
    </>
  );
}

export default App;
