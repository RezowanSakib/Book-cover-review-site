import React from "react";

const Reviews = (props) => {
   
 const {name,rating}=props.customar;
  return <div className="col-6 bg-light rounded p-5 ">
     <h1>Name: {name}</h1>
     <h4>Rating: {rating}</h4>
  </div>;
};

export default Reviews;
