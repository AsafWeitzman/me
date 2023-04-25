import { ReactComponent as Github } from "../assets/skillsIcons/github-icon.svg";
import { ReactComponent as LinkedIn } from "../assets/skillsIcons/linkedin-icon.svg";
import { ReactComponent as Gmail } from "../assets/skillsIcons/gmail-icon.svg";
import { ReactComponent as Whatsapp } from "../assets/skillsIcons/whatsapp.svg";

const logoSize = { height: 40, width: 40 };

interface SocialInfoProps {
  Icon: JSX.Element;
  name: string;
  link: string;
}

const SocialInfo = ({ Icon, name, link }: SocialInfoProps) => {
  return (
    <a
      href={link}
      target="_blank"
      style={{ textDecoration: "none", color: "black" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          borderRadius: "8px",
          padding: "8px",
          margin: "8px 0px",
          backgroundColor: "rgb(240, 245, 255)",
          boxShadow: "1px 1px 16px 4px rgba(109, 109, 109, 0.2)",
        }}
      >
        {Icon}
        <div>
          <p style={{ margin: 0 }}>{name}</p>
          <p style={{ margin: 0 }}>fdsafdsa</p>
        </div>
      </div>
    </a>
  );
};

const Contact = () => {
  return (
    <>
      <h3 className="contact-title-h3">Contact Info</h3>
      <div style={{ display: "flex", flexDirection: "column", margin: "40px" }}>
        <SocialInfo
          name="LinkedIn"
          Icon={<LinkedIn style={logoSize} />}
          link={"https://www.linkedin.com/in/asaf-weitzman/"}
        />
        <SocialInfo
          name="GitHub"
          Icon={<Github style={logoSize} />}
          link={"https://github.com/AsafWeitzman"}
        />
        <SocialInfo
          name="Email"
          Icon={<Gmail style={logoSize} />}
          link={"mailto: asafweit1@gmail.com"}
        />
        <SocialInfo
          name="Whatsapp"
          Icon={<Whatsapp style={logoSize} />}
          link={"https://www.linkedin.com/in/asaf-weitzman/"}
        />
      </div>
    </>
  );
};
export default Contact;
