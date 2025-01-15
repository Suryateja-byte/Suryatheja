import React from "react";

const skillsContent = [
  { skillClass: "p85", skillPercent: "85", skillName: "Kotlin" },
  { skillClass: "p90", skillPercent: "90", skillName: "Java" },
  { skillClass: "p80", skillPercent: "80", skillName: "Android SDK" },
  { skillClass: "p75", skillPercent: "75", skillName: "Jetpack Compose" },
  { skillClass: "p70", skillPercent: "70", skillName: "RESTful APIs" },
  { skillClass: "p65", skillPercent: "65", skillName: "CircleCI" },
  {
    skillClass: "p60",
    skillPercent: "60",
    skillName: "Multi-threaded Programming",
  },
  { skillClass: "p55", skillPercent: "55", skillName: "Material Design" },
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
