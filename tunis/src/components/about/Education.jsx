import React from "react";

const educationContent = [
  {
    year: "2012 - 2014",
    degree: "Master of Science in Computer Science",
    institute: "Southern Arkansas University, Magnolia, AR",
    details: `Focused on advanced topics in computer science, including Advanced Algorithms, Data Structures, Database Systems, and Software Engineering.`,
  },
  {
    year: "2006 - 2010",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institute: "Osmania University, Hyderabad, India",
    details: `Studied fundamental and advanced topics in computer science and engineering, including Object-Oriented Programming, Data Structures, Operating Systems, and Database Systems.`,
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
