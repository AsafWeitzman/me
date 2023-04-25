import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <motion.div
        className="home-card-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
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
      </motion.div>
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
    </>
  );
};
export default Home;
