import React from "react";

const educationContent = [
  {
    year: "2022 - 2024",
    degree: "Master of Science in Computer Science",
    institute: "Southern Arkansas University",
    details: `Focused on advanced topics in computer science, including web development and data science.`,
  },
  {
    year: "2017 - 2021",
    degree: "Bachelor of Science in Chemical Engineering",
    institute: "Osmania University",
    details: `Studied fundamental and advanced topics in chemical engineering, including an internship during the final year.`,
  },
  {
    year: "2014 - 2017",
    degree: "High School Diploma",
    institute: "Jawaharlal Nehru Government Polytechnic",
    details: `Graduated from high school with a focus on science and mathematics.`,
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
