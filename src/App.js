import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import "./App.css";

import Section1 from "./pages/section1.js";
import Section2 from "./pages/section2.js";
import Section3 from "./pages/section3.jsx";
import Section4 from "./pages/section4.jsx";
import Details from "./pages/Details";

import data from "./pages/data.js";
import { useState } from "react";

function App() {
  let nav = useNavigate();

  let [pd, setPd] = useState(data);
  console.log("루트영역", pd);
  return (
    <div className="App">
      <header className="App-header mw">
        <Link to="/" className="logo">
          <img src="/img/logo.svg" />
        </Link>
        <nav className="gnb">
          <Link to="/sec2">section2</Link>
          <Link to="/sec3">section3</Link>
          <Link to="/sec4">section4</Link>
        </nav>
        <button
          onClick={() => {
            nav(-2);
          }}
          className="person"
        >
          개인페이지
        </button>
      </header>

      <Routes>
        <Route path="*" element={<div>페이지없음(404)</div>} />
        <Route path="/" element={<Section1 />} />
        <Route path="/sec2" element={<Section2 data={pd} />} />
        <Route path="/sec3" element={<Section3 />}>
          <Route path="member" element={<div>회사소개</div>} />
          <Route path="location" element={<div>위치</div>} />
        </Route>
        <Route path="/sec4" element={<Section4 />} />
        <Route path="/detail/:id" element={<Details data={pd} />} />
      </Routes>

      <footer>하단영역</footer>
    </div>
  );
}

export default App;
