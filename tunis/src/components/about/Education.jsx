import React from "react";

const educationContent = [
  {
    year: "August 2022 - May 2024",
    degree: "Master of Science in Computer Science",
    institute: "Southern Arkansas University, Magnolia, AR",
    details: `Focused on topics including Advanced Algorithms, Data Structures, Database Systems, Software Engineering, and Mobile Application Development.`,
  },
  {
    year: "May 2015 - May 2019",
    degree: "Bachelor of Technology in Computer Science",
    institute: "Osmania University, Hyderabad, India",
    details: `Studied core topics in computer science, including Object-Oriented Programming, Data Structures, Operating Systems, and Software Development Practices.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
