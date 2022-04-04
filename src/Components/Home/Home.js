import React, { useEffect, useState } from "react";


const Home = () => {
const [customar,setCustomar]=useState([]);
useEffect(()=>{
  fetch('customar.json').then(res=>res.json().then(data=>setCustomar(data)))
},[])
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

         }
       
        </div>
        <button className="rounded">See more</button>
      </div>
    </div>
  );
};

export default Home;
