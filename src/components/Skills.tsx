import { ReactComponent as ReactLogo } from "../assets/skillsIcons/react.svg";
import { ReactComponent as CSS } from "../assets/skillsIcons/css.svg";
import { ReactComponent as JS } from "../assets/skillsIcons/logo-javascript.svg";
import { ReactComponent as HTML } from "../assets/skillsIcons/html.svg";
import { ReactComponent as Github } from "../assets/skillsIcons/github-icon.svg";
import { ReactComponent as MySql } from "../assets/skillsIcons/mysql.svg";
import { ReactComponent as NodeJs } from "../assets/skillsIcons/nodejs.svg";
import { ReactComponent as Python } from "../assets/skillsIcons/python.svg";
import { ReactComponent as ViteJs } from "../../public/vite.svg";
import { ReactComponent as ExpresJs } from "../assets/skillsIcons/express.svg";

const logoSize = { height: 50, width: 50 };

interface IconProps {
  Icon: JSX.Element;
}

const Skill = ({ Icon }: IconProps) => {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: "8px",
        padding: "8px",
        margin: "8px 0px",
        backgroundColor: "rgb(240, 245, 255)",
        boxShadow: "1px 1px 16px 4px rgba(109, 109, 109, 0.2)",
      }}
    >
      {!!Icon && Icon}
    </div>
  );
};

const Skills = () => {
  return (
    <>
      <h3 style={{ marginLeft: "40px", marginBottom: 0 }}>Skills</h3>
      <div className="grid-container-skills">
        <Skill Icon={<JS style={logoSize} />} />
        <Skill Icon={<ExpresJs style={logoSize} />} />
        <Skill Icon={<ReactLogo style={logoSize} />} />
        <Skill Icon={<CSS style={logoSize} />} />
        <Skill Icon={<HTML style={logoSize} />} />
        <Skill Icon={<NodeJs style={logoSize} />} />
        <Skill Icon={<Github style={logoSize} />} />
        <Skill Icon={<MySql style={logoSize} />} />
        <Skill Icon={<Python style={logoSize} />} />
        <Skill Icon={<ViteJs style={logoSize} />} />
      </div>
    </>
  );
};
export default Skills;
