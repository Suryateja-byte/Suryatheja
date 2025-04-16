import React from "react";
const skillsContent = [
  { skillClass: "p95", skillPercent: "95", skillName: "HTML5" },
  { skillClass: "p90", skillPercent: "90", skillName: "CSS3" },
  { skillClass: "p90", skillPercent: "90", skillName: "JavaScript" },
  { skillClass: "p85", skillPercent: "85", skillName: "Bootstrap" },
  { skillClass: "p85", skillPercent: "85", skillName: "Flexbox" },
  { skillClass: "p80", skillPercent: "80", skillName: "React" },
  { skillClass: "p80", skillPercent: "80", skillName: "Node.js" },
  { skillClass: "p75", skillPercent: "75", skillName: "Express.js" },
  { skillClass: "p85", skillPercent: "85", skillName: "Python" },
  { skillClass: "p80", skillPercent: "80", skillName: "SQL" },
  { skillClass: "p70", skillPercent: "70", skillName: "MongoDB" },
  { skillClass: "p75", skillPercent: "75", skillName: "TypeScript" },
  { skillClass: "p85", skillPercent: "85", skillName: "Responsive Design" },
  { skillClass: "p80", skillPercent: "80", skillName: "RESTful APIs" },
  { skillClass: "p90", skillPercent: "90", skillName: "Git" },
  { skillClass: "p85", skillPercent: "85", skillName: "Command Line" },
  { skillClass: "p75", skillPercent: "75", skillName: "Django" },
  { skillClass: "p70", skillPercent: "70", skillName: "Flask" },
  { skillClass: "p80", skillPercent: "80", skillName: "PostgreSQL" },
  { skillClass: "p75", skillPercent: "75", skillName: "Docker" },
  { skillClass: "p70", skillPercent: "70", skillName: "Jest" },
  { skillClass: "p65", skillPercent: "65", skillName: "Mocha" },
  { skillClass: "p65", skillPercent: "65", skillName: "Chai" },
  { skillClass: "p70", skillPercent: "70", skillName: "Selenium" },
  { skillClass: "p75", skillPercent: "75", skillName: "CI/CD" },
  { skillClass: "p80", skillPercent: "80", skillName: "Problem Solving" },
  { skillClass: "p85", skillPercent: "85", skillName: "Team Collaboration" },
];
const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};
export default Skills;
