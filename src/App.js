import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import React from "react";
import Movies from "./pages/Movies";

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
