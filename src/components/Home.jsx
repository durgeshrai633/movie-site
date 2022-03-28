import React from "react";
import { Link } from "react-router-dom";
import "./home.css"
function Home() {
  return (
    <div className="home">
      {" "}
      <h2>Home</h2>{" "}
      <Link to={"/products"}>Check out our Products</Link>
    </div>
  );
}

export default Home;
