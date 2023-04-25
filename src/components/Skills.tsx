import { motion } from "framer-motion";

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
const logos = [
  <JS style={logoSize} />,
  <ExpresJs style={logoSize} />,
  <ReactLogo style={logoSize} />,
  <CSS style={logoSize} />,
  <HTML style={logoSize} />,
  <NodeJs style={logoSize} />,
  <Github style={logoSize} />,
  <MySql style={logoSize} />,
  <Python style={logoSize} />,
  <ViteJs style={logoSize} />,
];

interface IconProps {
  Icon: JSX.Element;
  index: number;
}

const itemVariants = {
  initial: { x: 0, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const Skill = ({ Icon, index }: IconProps) => {
  return (
    <motion.div
      className="skillBox"
      variants={itemVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.2, delay: index * 0.2 }}
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: "8px",
        padding: "16px 8px",
        margin: "8px 0px",
        backgroundColor: "rgb(240, 245, 255)",
        boxShadow: "1px 1px 16px 4px rgba(109, 109, 109, 0.2)",
      }}
    >
      {Icon}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h3 className="skills-title-h3">Skills</h3>
      <div className="grid-container-skills">
        {logos.map((logo, index) => {
          return <Skill key={index} Icon={logo} index={index} />;
        })}
      </div>
    </>
  );
};
export default Skills;
