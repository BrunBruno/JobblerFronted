import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import classes from "./App.module.scss";
import HomePage from "./components/home-page/HomePage";
import B2C2 from "./components/b2c2-page/B2C2";
import Kraken from "./components/kraken-page/Kraken";
import Sumsub from "./components/sumsub/Sumsub";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sumsub" element={<Sumsub />} />
        <Route path="/b2c2" element={<B2C2 />} />
        <Route path="/kraken" element={<Kraken />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
