import { useState } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <label
        className="logo"
        style={{
          marginLeft: "40px",
          fontWeight: "bold",
          fontSize: "32px",
          color: "rgb(80,80,240)",
        }}
      >
        A.W.
      </label>
      <Link className="toggle-button" to="#" onClick={toggleNavbar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </Link>
      <motion.div className={`navbar-links ${isActive ? "active" : ""}`}>
        <Link className="home-a" to="/home">
          Home
        </Link>
        <Link className="about-a" to="/about">
          About
        </Link>
        <Link className="skills-a" to="/skills">
          Skills
        </Link>
        <Link className="contact-a" to="/contact">
          Contact
        </Link>
      </motion.div>
      <div className={`navbar-socialLinks`}>
        <a
          className="github-icon"
          href="https://github.com/AsafWeitzman"
          target="_blank"
        >
          <AiFillGithub style={{ fontSize: "25px", color: "rgb(80,80,240)" }} />
        </a>
        <a
          className="linkedin-icon"
          href="https://www.linkedin.com/in/asaf-weitzman/"
          target="_blank"
        >
          <AiFillLinkedin
            style={{ fontSize: "25px", color: "rgb(80,80,240)" }}
          />
        </a>
      </div>
    </motion.nav>
  );
};
export default NavBar;
