import React from "react";
import { Link } from "react-router-dom";
import "./home.css"
function Home() {
  return (
    <div className='home'>
      {" "}
      <h2 style={{ textAlign: "center", margin: "30px" }}>Home</h2>{" "}
      <Link className='products_link' to={"/products"}>
        Check out our Products
      </Link>
    </div>
  );
}

export default Home;
