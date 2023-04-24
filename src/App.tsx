import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="main-card">
        <NavBar />
        <div className="card-content">
          <div style={{ margin: "40px" }}>
            <p className="hello-p" style={{ fontSize: "24px" }}>
              Hello,
            </p>
            <h1
              className="myFullName-h1"
              style={{ fontSize: "64px", margin: "0" }}
            >
              I'm Asaf Weitzman
            </h1>
            <p
              className="jobTitle-p"
              style={{
                color: "rgb(80, 85, 240)",
                fontSize: "40px",
              }}
            >
              Frontend Developer
            </p>
            <p className="from-p" style={{ fontSize: "24px" }}>
              From Israel
            </p>
            <button
              className="hireMe-button"
              style={{ marginTop: "16px" }}
              onClick={(e) => {
                window.location.href = "mailto: asafweit1@gmail.com";
                e.preventDefault();
              }}
            >
              Hire Me
            </button>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            zIndex: 100,
            right: -10,
            bottom: -10,
          }}
        >
          <img
            className="myPicture-img"
            src="src/assets/images/asafWeitzmanProfileLinkedIn.png"
            width="500px"
          />
        </div>
        <div
          className="myName-h1"
          style={{
            position: "absolute",
            right: -105,
            bottom: 190,
            fontFamily: "PencilChild",
            fontSize: "100px",
            rotate: "270deg",
            color: "rgb(80, 80, 240,0.3)",
          }}
        >
          <h1>Asaf</h1>
        </div>
      </div>
    </Router>
  );
}

export default App;
