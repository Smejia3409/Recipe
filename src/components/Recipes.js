import React from "react";

import Nav from "./MainNav";
import RecipeComp from "./RecipeComp";

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Actual component getting executed
const Recipes = () => {
  return (
    <div id="recipes">
      <header>
        <Nav />
      </header>

      <RecipeComp />
    </div>
  );
};

export default Recipes;
