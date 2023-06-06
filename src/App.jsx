import { Home } from "./components/Home.jsx";
import { Player } from "./components/Player.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/player/:player" element={<Player/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
