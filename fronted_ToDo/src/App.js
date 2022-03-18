import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import React from "react";
import Movies from "./pages/Movies";
import Layout from "./components/Layout";
import Detailmovie from "./pages/Detailmovie";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Movies />} />
          <Route path="/:movieId" element={<Detailmovie/>} />
          <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
