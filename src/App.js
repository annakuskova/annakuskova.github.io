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
import U from "./components/index/U";
import V from "./components/index/V";
import W from "./components/index/W";
import X from "./components/index/X";
import Y from "./components/index/Y";
import Z from "./components/index/Z";
import A_p from "./components/practice/A_p";
import B_p from "./components/practice/B_p";
import C_p from "./components/practice/C";
import D_p from "./components/practice/D";
import E_p from "./components/practice/E";
import F_p from "./components/practice/F";
import G_p from "./components/practice/G";
import H_p from "./components/practice/H";
import I_p from "./components/practice/I";
import J_p from "./components/practice/J";
import K_p from "./components/practice/K";
import L_p from "./components/practice/L";
import M_p from "./components/practice/M";
import N_p from "./components/practice/N";
import O_p from "./components/practice/O";
import P_p from "./components/practice/P";
import Q_p from "./components/practice/Q";
import R_p from "./components/practice/R";
import S_p from "./components/practice/S";
import T_p from "./components/practice/T";
import V_p from "./components/practice/V";
import W_p from "./components/practice/W";
import X_p from "./components/practice/X";
import Y_p from "./components/practice/Y";
import Z_p from "./components/practice/Z";

import Go from "./components/game/Go";
import Result from "./components/game/Result";
import Description from "./components/game/Description";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/game" element={<Game />}>
          <Route index element={<Description />} />
          <Route path="/game/go" element={<Go />} />
          <Route path="/game/result" element={<Result />} />
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
          <Route path="/U" element={<U />} />
          <Route path="/V" element={<V />} />
          <Route path="/W" element={<W />} />
          <Route path="/X" element={<X />} />
          <Route path="/Y" element={<Y />} />
          <Route path="/Z" element={<Z />} />
        </Route>
        <Route path="/practice/" element={<Practice />}>
          <Route index element={<A_p />} />
          <Route path="/practice/B" element={<B_p />} />
          <Route path="/practice/C" element={<C_p />} />
          <Route path="/practice/D" element={<D_p />} />
          <Route path="/practice/E" element={<E_p />} />
          <Route path="/practice/F" element={<F_p />} />
          <Route path="/practice/G" element={<G_p />} />
          <Route path="/practice/H" element={<H_p />} />
          <Route path="/practice/I" element={<I_p />} />
          <Route path="/practice/J" element={<J_p />} />
          <Route path="/practice/K" element={<K_p />} />
          <Route path="/practice/L" element={<L_p />} />
          <Route path="/practice/M" element={<M_p />} />
          <Route path="/practice/N" element={<N_p />} />
          <Route path="/practice/O" element={<O_p />} />
          <Route path="/practice/P" element={<P_p />} />
          <Route path="/practice/Q" element={<Q_p />} />
          <Route path="/practice/R" element={<R_p />} />
          <Route path="/practice/S" element={<S_p />} />
          <Route path="/practice/T" element={<T_p />} />
          <Route path="/practice/V" element={<V_p />} />
          <Route path="/practice/W" element={<W_p />} />
          <Route path="/practice/X" element={<X_p />} />
          <Route path="/practice/Y" element={<Y_p />} />
          <Route path="/practice/Z" element={<Z_p />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
