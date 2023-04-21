import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "white",
        margin: "40px",
        borderRadius: "16px",
        boxShadow: "0px 16px 16px rgba(109, 109, 109, 0.1)",
        height: "90vh",
      }}
    >
      <NavBar />
      <div style={{ padding: "40px", marginTop: "70px" }}>
        <p className="hello-p" style={{ fontSize: "24px" }}>
          Hello,
        </p>
        <h1 className="myName-h1" style={{ fontSize: "64px", margin: "0" }}>
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
        <button className="hireMe-button" style={{ marginTop: "16px" }}>
          Hire Me
        </button>
      </div>
    </div>
  );
}

export default App;
