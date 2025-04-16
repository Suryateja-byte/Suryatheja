import React from "react";
const experienceContent = [
  {
    year: "June 2022 - Present",
    position: "Full Stack Developer",
    companyName: "Digi-Key Electronics",
    details: `Contributed to Digi-Key's flagship e-commerce platform, supporting millions of global users. Implemented responsive UI components using HTML5, CSS3, and Bootstrap. Developed scalable services using Node.js and Express. Refactored front-end components using modern JavaScript practices, reducing page load times by 30%. Collaborated with design, product, and business teams to deliver feature enhancements and bug fixes.`,
  },
  {
    year: "June 2019 - June 2022",
    position: "Junior Developer",
    companyName: "LTI Mindtree",
    details: `Contributed to front-end and back-end development of enterprise web applications. Built responsive UIs using HTML, CSS, and JavaScript following design specifications. Developed and maintained database schemas and SQL queries for data operations. Applied newly acquired skills in Python, JavaScript, and Node.js to solve real-world business problems.`,
  },
  {
    year: "2022 - 2024",
    position: "Master of Science in Computer Science",
    companyName: "Southern Arkansas University",
    details: ``,
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
            <span className="place open-sans-font">{val.companyName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};
export default Experience;
