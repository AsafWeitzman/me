import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div
      className="App"
      style={{
        position: "relative",
        backgroundColor: "rgb(240, 245, 255)",
        margin: "40px",
        borderRadius: "16px",
        boxShadow: "0px 16px 16px rgba(109, 109, 109, 0.2)",
        height: "90vh",
        overflow: "hidden",
      }}
    >
      <NavBar />
      <div
        style={{
          marginTop: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ margin: "40px" }}>
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
          src="src/assets/images/asafWeitzmanProfileLinkedIn.png"
          width="500px"
        />
      </div>
      <div
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
  );
}

export default App;
