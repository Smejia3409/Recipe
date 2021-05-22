import React from "react";
import "../style/nav.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <Navbar id="mainNav" bg="light" className="container">
      <Navbar.Brand className="col-10">
        <Link to="/" id="titleLink">
          <p id="navTitle">Tasteful eats</p>
        </Link>
      </Navbar.Brand>

      <Nav className="col-2 float-right">
        <Link className="btn btn-outline-success" to="/">
          Home
        </Link>
        <Link className="btn btn-outline-success" to="/recipes">
          Recipes
        </Link>
      </Nav>
    </Navbar>
  );
};

export default MainNav;
