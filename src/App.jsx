import { useEffect, useState } from "react";
import SearchIcon from "./assets/search.svg";
import "./App.css";
import { PlayerCard } from "./components/PlayerCard";

const API_URL = "https://lichess.org/api/user";
const IMG_URL =
  "https://jugadoresdeajedrez.com/wp-content/uploads/2020/08/Fabiano-Caruana.jpg";

function App() {
  const [player, setPlayer] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const searchPlayer = async (username) => {
    const response = await fetch(`${API_URL}/${username}`);
    const data = await response.json();
    setPlayer(data);
    console.log(data);
  };

  useEffect(() => {
    searchPlayer("Zhigalko_Sergei");
  }, []);

  return (
    <>
      <div className="app">
        <h1>Lichess Finder</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search for an user"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img src={SearchIcon} alt="search" onClick={() => searchPlayer(searchTerm)} />
        </div>

        {player.hasOwnProperty("id") ? (
          <div className="container">
            <PlayerCard player={player} IMG_URL={IMG_URL} />
          </div>
        ) : (
          <div className="empty">
            <h2>No players found</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
