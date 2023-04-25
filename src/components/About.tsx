import { Jobs } from "../common/jobs";
import { TheCollegeofManagementLogo } from "../common/constant";

interface JobProps {
  logo?: string;
  companyName: string;
  jobTitle: string;
  workPeriod: string;
}

const Job = ({ logo, companyName, jobTitle, workPeriod }: JobProps) => {
  return (
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
      <div>
        <img src={logo} width={40} height={40}></img>
      </div>
      <div>
        <h4 style={{ padding: 0, margin: 0 }}>{jobTitle}</h4>
        <p style={{ padding: 0, margin: 0 }}>{companyName}</p>
        <p style={{ padding: 0, margin: 0, color: "#484E4C" }}>{workPeriod}</p>
      </div>
    </div>
  );
};

const JobsList = () => {
  return (
    <>
      {Jobs.map((job) => {
        return (
          <Job
            logo={job.logo}
            companyName={job.companyName}
            jobTitle={job.jobTitle}
            workPeriod={job.workPeriod}
          />
        );
      })}
    </>
  );
};

const Education = () => {
  return (
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
      <div>
        <img src={TheCollegeofManagementLogo} width={40} height={40}></img>
      </div>
      <div>
        <h4 style={{ padding: 0, margin: 0 }}>
          The College of Management Academic Studies
        </h4>
        <p style={{ padding: 0, margin: 0 }}>
          Bachelor's degree, Computer ScienceBachelor's degree, Computer Science
        </p>
        <p style={{ padding: 0, margin: 0 }}>2018 - 2021</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="about-card-content">
      <h3 style={{ marginTop: 0, marginBottom: 0 }}>About Me</h3>
      <p style={{ marginTop: "4px", marginBottom: 0 }} className="aboutMe-p">
        Software Developer with expertise in Javascript, React.js, Redux.js,
        HTML/CSS, Node.js, and Knex.js. Strong problem-solving and teamwork
        abilities. Former military officer with 4.5 years of leadership
        experience.
      </p>
      <h3 style={{ marginBottom: 0 }}>My Experience</h3>
      <JobsList />
      <h3 style={{ marginBottom: 0 }}>Education</h3>
      <Education />
    </div>
  );
};
export default About;
