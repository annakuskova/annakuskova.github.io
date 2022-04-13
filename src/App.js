import "./App.css";
import { Route, Routes } from "react-router-dom";
import Game from "./components/game/Game";
import Index from "./components/index/Index";
import Practice from "./components/practice/Practice";
import A from "./components/index/A";
import B from "./components/index/B";
import A_p from "./components/practice/A_p";
import B_p from "./components/practice/B_p";


function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/game" element={<Game />} />
          <Route path="/" element={<Index />}> 
            <Route index element={<A />} />
            <Route path="/B" element={<B />} />
          </Route>
          <Route path="/practice" element={<Practice />}> 
            <Route index element={<A_p />} />
            <Route path="/practice/B" element={<B_p />} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
