import { Link } from "react-router-dom";
import useCustomar from "../../Hooks/useCustomar";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  const [customar, setCustomar] = useCustomar();

  return (
    <div>
      <div className="row m-5 align-items-center">
        <div className="col-6">
          <h1>Your new Choice</h1>
          <h1>Your New Book cover</h1>
          <h4>
            Best book cover designing site in the world.We design cover by
            professional designer.You can order cover for your book
          </h4>
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
          {customar.map((customar) => (
            <Reviews key={customar.id} customar={customar}></Reviews>
          ))}
        </div>
        <Link to="/reviews">
          <button className="rounded my-5 bg-primary">See more</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
