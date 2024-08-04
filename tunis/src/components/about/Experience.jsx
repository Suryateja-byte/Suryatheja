import React from "react";

const experienceContent = [
  {
    year: "2023 - Present",
    position: "Intern",
    companyName: "ATD",
    details: `Worked on web applications, UI, React, and Angular.`,
  },
  {
    year: "2021 - 2022",
    position: "Web Developer",
    companyName: "CSS Corp",
    details: `Worked on web applications, UI, React, and Angular.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
