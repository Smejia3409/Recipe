import React, { useState, useEffect } from "react";

import "../style/recipes.css";

import RecipeCards from "./RecipeCards";
import Footer from "./Footer";

import ChickenPic from "../mediaFiles/chicken.jpeg";
import BeefPic from "../mediaFiles/steak.jpeg";
import PorkPic from "../mediaFiles/pork.jpeg";
import FishPic from "../mediaFiles/fish.jpeg";

//import test from "./test";

const RecipeComp = () => {
  const [foodList, setList] = useState([]);
  const [choice, selectChoice] = useState("");
  const [visableCards, setVisableCards] = useState(15);
  const [show, hide] = useState(false); // show hide meat comp
  const [visablebtn, setVisableBtn] = useState(false);

  //For calories select

  //const alcohal = "&health=alcohol-free";

  //feature recipes
  const featureData = async () => {
    setList([]);
    let url =
      "https://api.edamam.com/search?q=feature&app_id=f95f4c42&app_key=d3ebd4734c5713b64407434f52446148&from=0&to=3&calories=1000-3000";
    const get = await fetch(url);
    const fetchedData = await get.json();
    setList(fetchedData["hits"]);
    setTitle("Todays feature ");
    hide(false);
    setVisableBtn(false);
  };

  const fetchVegan = async () => {
    setList([]);
    let url =
      "https://api.edamam.com/search?q=vegan&app_id=f95f4c42&app_key=d3ebd4734c5713b64407434f52446148&from=0&to=" +
      visableCards +
      "&calories=1000-3000";
    const get = await fetch(url);
    const vegan = await get.json();
    setList(vegan["hits"]);
    setTitle("Vegan ");
    setVisableCards(15);
    setVisableBtn(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      setList([]);
      let url =
        "https://api.edamam.com/search?q=" +
        choice +
        "&app_id=f95f4c42&app_key=d3ebd4734c5713b64407434f52446148&from=0&to=" +
        visableCards +
        "&calories=1000-3000";
      const get = await fetch(url);
      const fetchedDataMeat = await get.json();
      setList(fetchedDataMeat["hits"]);
    };
    if (choice === "") {
      featureData();
    } else if (choice === "chicken" || "pork" || "beef" || "fish") {
      fetchData();
    }
  }, [choice, visableCards]);

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //btn for Meat components
  const chicken = () => {
    selectChoice("chicken");
    setTitle("Chicken ");
    setVisableCards(15);
    setVisableBtn(true);
  };

  const pork = () => {
    selectChoice("pork");
    setTitle("Pork ");
    setVisableCards(15);
    setVisableBtn(true);
  };

  const beef = () => {
    selectChoice("beef");
    setTitle("Beef ");
    setVisableCards(15);
    setVisableBtn(true);
  };

  const fish = () => {
    selectChoice("fish");
    setTitle("Fish ");
    setVisableCards(15);
    setVisableBtn(true);
  };

  //Button for under calories

  // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //Select component that user choice type of meal they want
  const Select = () => {
    //Main thing being showed for user to select what type of recipes they want

    return (
      <div id="select">
        <div>
          <p
            style={{
              textAlign: "center",
              fontSize: "2em",
              color: "#ffc478",
            }}
          >
            Select your recipes by categories
          </p>
        </div>

        <div id="choices" className="container">
          <div className="row">
            <div className="col text-center">
              <button className="btn btn-light btn-lg" onClick={featureData}>
                Featured
              </button>
              <button
                //vegan button
                id="vegan"
                className="btn btn-light btn-lg btnChoiceOfMeal"
                onClick={fetchVegan}
              >
                Vegan
              </button>

              <button
                id="meat"
                className="btn btn-light btn-lg btnChoiceOfMeal"
                onClick={() => {
                  hide(!show);
                }}
              >
                Meat
              </button>
            </div>
          </div>
        </div>
        <br />
        <div>{show && <Meat />}</div>
      </div>
    );
  };
  // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //This components is only visable if user clicks meat btn on the select component
  //Meat component where user selects the meat type if they click on meat btn on Select Components

  const Meat = () => {
    return (
      <div id="select">
        <div>
          <h3 id="meatSelectTitle">Meat recipes</h3>
          <h4>Select choice of protein</h4>
        </div>
        <br />
        <br />
        <div id="choices">
          <button
            className="meatChoiceBtn"
            variant="outline-dark"
            onClick={chicken}
          >
            <img className="btnPic" src={ChickenPic} alt="" />
            <label className="btnName">Chicken</label>
          </button>
          <button
            className="meatChoiceBtn"
            variant="outline-dark"
            n
            onClick={pork}
          >
            <img className="btnPic" src={PorkPic} alt="" />
            <label className="btnName">Pork</label>
          </button>
          <button
            className="meatChoiceBtn"
            variant="outline-dark"
            n
            onClick={beef}
          >
            <img className="btnPic" src={BeefPic} alt="" />
            <label className="btnName">Beef</label>
          </button>
          <button
            className="meatChoiceBtn"
            variant="outline-dark"
            n
            onClick={fish}
          >
            <img className="btnPic" src={FishPic} alt="" />
            <label className="btnName">Fish</label>
          </button>
        </div>
      </div>
    );
  };

  const [title, setTitle] = useState(null); //Sets mrecipe title

  const AddMoreBtn = () => {
    console.log(visableCards);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className="btn btn-primary"
          onClick={() => {
            setVisableCards(visableCards + 15);
          }}
          style={{
            display: "block",
          }}
        >
          See more recipes
        </button>
      </div>
    );
  };

  return (
    <div id="recipeComp">
      <Select />
      <div>
        <br />
        <br />
        <h3
          style={{
            textTransform: "capitalize",
          }}
        >
          {title} Recipes
        </h3>
        <section className="recipeGrid">
          {foodList.map((card) => {
            return (
              <RecipeCards key={card.recipe.label} {...card}></RecipeCards>
            );
          })}
        </section>
        {visablebtn && <AddMoreBtn />}
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default RecipeComp;
