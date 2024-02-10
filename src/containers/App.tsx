import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import AilookPage from "../pages/AilookPage";
import "../assets/styles/App.css";


const App: React.FC = () => {
  const Logo = "https://raw.githubusercontent.com/aionlux/.github/main/resources/img/l1.png"
  return (
    <React.Fragment>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/ailook" element={<AilookPage />} />
          </Routes>
        </Router>
      </div>
    </React.Fragment>
  );
};

export default App;

