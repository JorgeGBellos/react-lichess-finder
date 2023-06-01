import { useEffect } from "react";
import SearchIcon from "./assets/search.svg";
import "./App.css";

const API_URL = "https://lichess.org/api/user"
const IMG_URL = "https://jugadoresdeajedrez.com/wp-content/uploads/2020/08/Fabiano-Caruana.jpg"
const userTest = {
  "id": "jorgeagb1",
  "username": "jorgeagb1",
  "perfs": {
      "blitz": {
          "games": 71,
          "rating": 1736,
          "rd": 47,
          "prog": 24
      },
      "storm": {
          "runs": 2,
          "score": 25
      },
      "puzzle": {
          "games": 27,
          "rating": 1965,
          "rd": 99,
          "prog": 0
      },
      "bullet": {
          "games": 210,
          "rating": 1686,
          "rd": 45,
          "prog": 0
      },
      "correspondence": {
          "games": 0,
          "rating": 1500,
          "rd": 500,
          "prog": 0,
          "prov": true
      },
      "classical": {
          "games": 0,
          "rating": 1500,
          "rd": 500,
          "prog": 0,
          "prov": true
      },
      "rapid": {
          "games": 6,
          "rating": 1818,
          "rd": 144,
          "prog": 0,
          "prov": true
      }
  },
  "createdAt": 1529889050544,
  "seenAt": 1685593310563,
  "playTime": {
      "total": 58178,
      "tv": 0
  },
  "url": "https://lichess.org/@/jorgeagb1",
  "count": {
      "all": 287,
      "rated": 287,
      "ai": 0,
      "draw": 10,
      "drawH": 10,
      "loss": 113,
      "lossH": 113,
      "win": 164,
      "winH": 164,
      "bookmark": 0,
      "playing": 0,
      "import": 0,
      "me": 0
  }
}

function App() {

  const searchPlayer = async (username) => {
    const response = await fetch(`${API_URL}/${username}`)
    const data = await response.json()
    console.log(data)
  }

  useEffect(() => {
    searchPlayer('jorgeagb1')
  }, [])

  return (
    <>
      <div className="app">
        <h1>Lichess Finder</h1>
        <div className="search">
          <input
            type="text" 
            placeholder="Search for an user"
            value="jorgeagb1"
            onChange={() => {}} />
          <img src={SearchIcon} alt="search" onClick={() => {}}/>
        </div>
        <div className="container">
          <div className="movie">
            <div>
              <p>{userTest.username}</p>
            </div>
            <div>
              <img src={IMG_URL} alt="user image" />
            </div>
            <div>
              <span>{userTest.username}</span>
              <h3>{ `Blitz: ${userTest.perfs.blitz.rating}`}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
