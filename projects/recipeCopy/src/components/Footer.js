import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="container  position-relative border-top border-success "
      style={{ height: "200px" }}
    >
      <br />
      <br />
      <div className="text-center">
        <p>Tasteful eats</p>
      </div>
      <div className="text-center" style={{ color: "#ffc171" }}>
        <Link to="/">
          <p className="btn btn-outline-success">Home</p>
        </Link>

        <Link to="/recipes">
          <p className="btn btn-outline-success">Recipes</p>
        </Link>
      </div>
      <div className="text-center">
        <button
          className="float-center btn btn-outline-danger"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          &#8593;
        </button>
      </div>
    </div>
  );
};

export default Footer;
