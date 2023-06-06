import "../App.css";
import SearchIcon from "../assets/search.svg";
import { Link, useParams } from "react-router-dom";

export const Player = () => {

  const params = useParams();
  console.log(params);

  return (
    <>
      <div className="app">
        <Link to="/">
            <h1>Lichess Finder</h1>
        </Link>
        <div className="search">
          <input type="text" placeholder="Search for an user" value="" />
          <img src={SearchIcon} alt="" />
        </div>
        {params.player}
      </div>
    </>
  );
};
