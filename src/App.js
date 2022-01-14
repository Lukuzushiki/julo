import React from "react";
import { Route, Routes } from "react-router-dom";
import { DetailPage, LandingPage, MyList } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/detail-page/:id" element={<DetailPage />} />
      <Route path="/my-list" element={<MyList />} />
    </Routes>
  );
}

export default App;
