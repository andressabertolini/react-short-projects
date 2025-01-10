import React,{useEffect, useState} from "react";
import Recipe from './Recipe';
import './App.css';

import chefHat from './assets/img/chef-hat.png';

const App = () => {

  const API_ID = "*****";
  const API_KEY = "******************";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("chocolate");

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  useEffect(() => {
    getRecipes();
  },[query]);

  return(
    <div className="app">
      <div className="container">
        <img src={chefHat} />
        <h1>Recipe Book</h1>
        <form className="search-form" onSubmit={getSearch}>
          <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
          <button type="submit" className="search-button">Search</button>
        </form>

        {recipes.map((recipe, index) => (
          <Recipe 
            key={index}
            title={recipe.recipe.label} 
            description={recipe.recipe.label} 
            image={recipe.recipe.image}
            url={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
