import { Route, Routes } from "react-router-dom";
import "./App.css";
import BabylonFireBall from "./Components/BabylonFireBall/BabylonFireBall";
import BabylonFish from "./Components/BabylonFish/BabylonFish";
import BabylonUFO from "./Components/BabylonUFO/BabylonUFO";
import Babylon from "./Components/DemoBabylon/Babylon";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solar" element={<Babylon />} />
        <Route path="/fish" element={<BabylonFish />} />
        <Route path="/fire-ball" element={<BabylonFireBall />} />
        <Route path="/ufo" element={<BabylonUFO />} />
      </Routes>
    </div>
  );
}

export default App;
