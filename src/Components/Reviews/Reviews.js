import React from "react";

const Reviews = (props) => {
   
 const {name,rating,reviews}=props.customar;
  return <div className="col-6 bg-light rounded p-5 ">

     <h3>Name: {name}</h3>
     <h4>Rating: {rating}</h4>
     <p>Review: {reviews}</p>
  </div>;
};

export default Reviews;
