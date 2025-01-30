import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Form />} />
          <Route path="/edit/:id" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
