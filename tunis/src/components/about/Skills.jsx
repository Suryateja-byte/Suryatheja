import React from "react";

const skillsContent = [
  { skillClass: "p95", skillPercent: "95", skillName: "Figma" }, // Updated and added percentage
  { skillClass: "p90", skillPercent: "90", skillName: "Sketch" },   // Updated and added percentage
  { skillClass: "p90", skillPercent: "90", skillName: "Adobe XD" },  // Updated and added percentage
  { skillClass: "p85", skillPercent: "85", skillName: "Photoshop" }, // Updated and added percentage
  { skillClass: "p80", skillPercent: "80", skillName: "Illustrator" },// Updated and added percentage
  { skillClass: "p85", skillPercent: "85", skillName: "InVision" },  // Updated and added percentage
  { skillClass: "p70", skillPercent: "70", skillName: "Axure" },    // Updated and added percentage
  { skillClass: "p80", skillPercent: "80", skillName: "HTML5" },    // Updated and added percentage
  { skillClass: "p85", skillPercent: "85", skillName: "CSS3" },    // Updated and added percentage
  { skillClass: "p90", skillPercent: "90", skillName: "JavaScript" }, // Updated and added percentage
  { skillClass: "p80", skillPercent: "80", skillName: "React" },    // Updated and added percentage
  { skillClass: "p75", skillPercent: "75", skillName: "TypeScript" }, // Updated and added percentage
  { skillClass: "p90", skillPercent: "90", skillName: "Wireframing" },   // Updated and added percentage
  { skillClass: "p85", skillPercent: "85", skillName: "Prototyping" },   // Updated and added percentage
  { skillClass: "p80", skillPercent: "80", skillName: "User Flows" },    // Updated and added percentage
  { skillClass: "p70", skillPercent: "70", skillName: "Sitemaps" },    // Updated and added percentage
  { skillClass: "p85", skillPercent: "85", skillName: "User Testing" },   // Updated and added percentage
  { skillClass: "p80", skillPercent: "80", skillName: "Usability Studies" },// Updated and added percentage
  { skillClass: "p75", skillPercent: "75", skillName: "A/B Testing" },   // Updated and added percentage
  { skillClass: "p70", skillPercent: "70", skillName: "Analytics" },    // Updated and added percentage
  { skillClass: "p90", skillPercent: "90", skillName: "User-Centered Design" }, // Updated
  { skillClass: "p85", skillPercent: "85", skillName: "Design Thinking" },    // Updated
  { skillClass: "p80", skillPercent: "80", skillName: "Information Architecture" },    // Updated
  { skillClass: "p90", skillPercent: "90", skillName: "Git" },    // Updated and added percentage
  { skillClass: "p80", skillPercent: "80", skillName: "Zeplin" }, // Updated and added percentage
  { skillClass: "p75", skillPercent: "75", skillName: "Abstract" },  // Updated and added percentage
  { skillClass: "p85", skillPercent: "85", skillName: "Design Systems" },  // Updated and added percentage
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
