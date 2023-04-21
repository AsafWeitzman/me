import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav>
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
      <div style={{ display: "flex", gap: "24px" }}>
        <a className="home-a" href="home">
          Home
        </a>
        <a className="about-a" href="about">
          About
        </a>
        <a className="skills-a" href="skills">
          Skills
        </a>
        <a className="contact-a" href="contact">
          Contact
        </a>
      </div>
      <div style={{ display: "flex", gap: "8px", marginRight: "40px" }}>
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
    </nav>
  );
};
export default NavBar;
