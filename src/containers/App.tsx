import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../components/Main";
import "../assets/styles/App.scss";


const App: React.FC = () => {
  const Logo = "https://raw.githubusercontent.com/aionlux/.github/main/resources/img/l1.png"
  return (
    <React.Fragment>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Main />} />
          </Routes>
        </Router>
      </div>
    </React.Fragment>
  );
};

export default App;

