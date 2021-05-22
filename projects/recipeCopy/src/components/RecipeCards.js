import React, { useState } from "react";
import "../style/recipeCard.css";

import { Card } from "react-bootstrap";

const RecipeCards = (props) => {
  const [show, hide] = useState(false);

  const label = props.recipe.label;
  const img = props.recipe.image;
  const calories = props.recipe.calories;
  const cookTime = props.recipe.totalTime;
  const ingredients = props.recipe.ingredientLines;

  const boxOpenOnClick = () => {
    hide(true);
  };

  const RecipeBox = () => {
    return (
      <div className="boxOuter">
        <div className="box">
          <span
            className="close"
            onClick={() => {
              hide(false);
            }}
          >
            &times;
          </span>

          <div className="row">
            <div className="col-8 align-self-center">
              <div height="20px">
                <h1 className="boxLabel">{label}</h1>
                <h4>Carlories: {Math.round(calories)}</h4>
              </div>
            </div>
            <div className="col-4">
              <img className="boxImg" src={img} alt="boxImage" />
            </div>
          </div>

          <div>
            <br />

            <div className="ingredients">
              <h3>
                <u>Ingredients:</u>
              </h3>
              <h5>
                {ingredients.map((items) => {
                  return (
                    <div key={items}>
                      <p className="boxIngredients">{items}</p>
                    </div>
                  );
                })}
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div key={label} className="card">
        <Card className="cardFront" key={label} onClick={boxOpenOnClick}>
          <Card.Img variant="top" style={{ width: "100%" }} src={img} />
          <Card.Body style={{ height: "100%" }}>
            <Card.Title>{label}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Calories: {Math.round(calories)} <br />
            </Card.Subtitle>

            <Card.Text>Cook time:{cookTime} Mins</Card.Text>
          </Card.Body>
        </Card>
      </div>
      {show && <RecipeBox />}
    </div>
  );
};

export default RecipeCards;
