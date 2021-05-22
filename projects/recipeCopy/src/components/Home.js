import React, { useEffect, useState } from "react";
import "../style/home.css";
import MainNav from "./MainNav";
import Footer from "./Footer";
import OpenningVideo from "../mediaFiles/openingVideo.mp4";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCards";

const Home = () => {
  useEffect(() => {
    //Api for feature section
    const fetchData = async () => {
      let url =
        "https://api.edamam.com/search?q=feature&app_id=f95f4c42&app_key=d3ebd4734c5713b64407434f52446148&from=0&to=3&calories=1000-3000";
      const get = await fetch(url);
      const fetchedData = await get.json();
      fullList(fetchedData["hits"]);
    };
    fetchData();
  }, []);

  const [foodList, fullList] = useState([]);
  console.log(foodList);

  return (
    <div id="home">
      <header>
        <MainNav />
      </header>
      <body style={{ width: "100%" }}>
        <div className="container">
          {/**First section of the home page */}
          <div className="row" style={{ height: "90vh", position: "relative" }}>
            <div className="col-7 border border-succeses">
              <video
                data-aos="fade"
                data-aos-duration="3000"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                autoPlay
                loop
                muted
              >
                <source type="video/mp4" src={OpenningVideo} />
              </video>
            </div>

            <div id="homePageTitle" className=" col-5 border border-succeses">
              <p
                data-aos="fade "
                data-aos-duration="3000"
                style={{ color: "#FF4A3B" }}
              >
                Homemade meals <br />
                Kept simple <br />
                <Link className="btn btn-outline-success" to="/recipes">
                  Find my next meal
                </Link>
              </p>
            </div>
          </div>

          {/* featured section of home page */}

          <div id="featuredRecipes">
            <h1
              className="col-12"
              style={{ color: "#FF4A3B" }}
              data-aos="zoom-in-right"
            >
              Featured Recipes
            </h1>
            <section className="homeRecipeGrid">
              {foodList.map((card) => {
                return <RecipeCard key={card.recipe.label} {...card} />;
              })}
            </section>
          </div>

          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </div>
  );
};

export default Home;
