interface Job {
  logo: string;
  companyName: string;
  jobTitle: string;
  workPeriod: string;
}

export const Jobs: Job[] = [
  {
    logo: "src/assets/companyLogos/tedoooLogo.jpeg",
    companyName: "Tedooo",
    jobTitle: "Frontend Developer",
    workPeriod: "May 2023 - Present",
  },
  {
    logo: "src/assets/companyLogos/tailormedLogo.png",
    companyName: "TailorMed",
    jobTitle: "Full Stack Developer",
    workPeriod: "Feb 2022 - May 2023 · 1 yr 3 mos",
  },
  {
    logo: "src/assets/companyLogos/robodeckLogo.jpeg",
    companyName: "RoboDeck",
    jobTitle: "Software Developer",
    workPeriod: "Sep 2020 - Feb 2022 · 1 yr 6 mos",
  },
];
