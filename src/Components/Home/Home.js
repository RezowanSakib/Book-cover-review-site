import React, { useEffect, useState } from "react";
import useCustomar from "../../Hooks/useCustomar";
import Reviews from "../Reviews/Reviews";


const Home = () => {
const [customar,setCustomar]=useCustomar();

  return (
    <div>
      <div className="row m-5 align-items-center">
        <div className="col-6">
          <h1>Your new Choice</h1>
          <h1>Your New Book cover</h1>
          <button className="btn-lg rounded-pill">Demo</button>
        </div>
        <div className="col-6">
          <img
            src="./images/design.jpg"
            alt="cover"
            className="img-fluid img-thumbnail"
          />
        </div>
      </div>
      <div>
        <h2>Customar Reviews( {customar.length})</h2>
        <div className="row">
       
         {
customar.map(customar=><Reviews key={customar.id} customar={customar}></Reviews>)
         }
       
        </div>
        <button className="rounded">See more</button>
      </div>
    </div>
  );
};

export default Home;
