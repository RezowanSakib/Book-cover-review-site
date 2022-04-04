import React from "react";
import useCustomar from "../../Hooks/useCustomar";
import Reviews from "../Reviews/Reviews";

const ReviewPage = () => {
  const [customar] = useCustomar([]);
  return (
    <div>
      <div className="row">
      <h1>Costomar Reviews</h1>
        {customar.map((customar) => (
          <Reviews key={customar.id} customar={customar}></Reviews>
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
