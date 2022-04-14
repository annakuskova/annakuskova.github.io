import "./App.css";
import { Route, Routes } from "react-router-dom";
import Game from "./components/game/Game";
import Index from "./components/index/Index";
import Practice from "./components/practice/Practice";
import A from "./components/index/A";
import B from "./components/index/B";
import C from "./components/index/C";
import D from "./components/index/D";
import E from "./components/index/E";
import F from "./components/index/F";
import G from "./components/index/G";
import H from "./components/index/H";
import I from "./components/index/I";
import J from "./components/index/J";
import K from "./components/index/K";
import L from "./components/index/L";
import M from "./components/index/M";
import N from "./components/index/N";
import O from "./components/index/O";
import P from "./components/index/P";
import Q from "./components/index/Q";
import R from "./components/index/R";
import S from "./components/index/S";
import T from "./components/index/T";
import V from "./components/index/V";
import W from "./components/index/W";
import X from "./components/index/X";
import Y from "./components/index/Y";
import Z from "./components/index/Z";
import A_p from "./components/practice/A_p";
import B_p from "./components/practice/B_p";
import Go from "./components/game/Go";
import Description from "./components/game/Description";


function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/game" element={<Game />}>
            <Route index element={<Description />} />
            <Route path="/game/go" element={<Go />} />
          </Route>
          <Route path="/" element={<Index />}> 
            <Route index element={<A />} />
            <Route path="/B" element={<B />} />
            <Route path="/C" element={<C />} />
            <Route path="/D" element={<D />} />
            <Route path="/E" element={<E />} />
            <Route path="/F" element={<F />} />
            <Route path="/G" element={<G />} />
            <Route path="/H" element={<H />} />
            <Route path="/I" element={<I />} />
            <Route path="/J" element={<J />} />
            <Route path="/K" element={<K />} />
            <Route path="/L" element={<L />} />
            <Route path="/M" element={<M />} />
            <Route path="/N" element={<N />} />
            <Route path="/O" element={<O />} />
            <Route path="/P" element={<P />} />
            <Route path="/Q" element={<Q />} />
            <Route path="/R" element={<R />} />
            <Route path="/S" element={<S />} />
            <Route path="/T" element={<T />} />
            <Route path="/V" element={<V />} />
            <Route path="/W" element={<W />} />
            <Route path="/X" element={<X />} />
            <Route path="/Y" element={<Y />} />
            <Route path="/Z" element={<Z />} />
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
