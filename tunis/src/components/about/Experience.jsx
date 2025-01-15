import React from "react";

const experienceContent = [
  {
    year: "June 2023 - Present",
    position: "Senior Android Developer",
    companyName: "ATD (American Tire Distributor)",
    details: `Led the design and development of Android applications using Kotlin, Java, and Jetpack Compose. Managed the full software development lifecycle, from concept to release, ensuring quality and reliability. Integrated RESTful APIs and external libraries to enhance application functionality. Applied MVP and MVVM architecture patterns to ensure modular and maintainable code. Conducted unit testing and debugging to identify and resolve performance issues. Collaborated with Agile teams to deliver applications on time, meeting quality standards. Ensured compliance with Android accessibility features and best practices.`,
  },
  {
    year: "June 2019 - June 2022",
    position: "Mobile Application Developer",
    companyName: "CSS Corp ICT Services",
    details: `Designed and developed Android applications using Kotlin and the Android SDK, adhering to Material Design principles. Built and shipped user interfaces with Jetpack Compose, enhancing user experience. Conducted multi-threaded programming using Kotlin Coroutines for improved app performance. Implemented CircleCI for continuous integration and deployment. Developed and maintained unit tests to ensure robust application functionality. Worked closely with cross-functional teams to deliver high-quality applications that met client requirements.`,
  },
  {
    year: "January 2020 - December 2021",
    position: "Freelance Developer",
    companyName: "Zillow Extension Project",
    details: `Created a Chrome extension for Zillow to compare properties across multiple houses and integrated details into a database for streamlined analysis. Ensured optimal performance and usability by adhering to best development practices.`,
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
