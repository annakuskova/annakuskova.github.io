import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./components/game/Game";
import Index from "./components/index/Index";
import Practice from "./components/practice/Practice";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/game" element={<Game />} />
          <Route path="/" element={<Index />} />
          <Route path="/practice" element={<Practice />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
