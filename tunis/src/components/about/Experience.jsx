import React from "react";

const experienceContent = [
  {
    year: "June 2017 - Present",
    position: "Sr. Java Full Stack Developer",
    companyName: "Applied Systems, Inc., Windsor, CT",
    details: `Designed and developed an online application using Spring MVC Framework, Spring Core, and Spring Boot, which enhanced application performance by 30%. Enhanced application features utilizing Java, J2EE (Servlets, JSP, JDBC, JNDI, EJB), and Web Services (RESTful), improving user experience and data accessibility. Implemented Hibernate ORM, creating XML files and Java class files for object-relational mappings, optimizing database interactions by 25%.`,
  },
  {
    year: "November 2015 - April 2017",
    position: "Java/J2EE Developer",
    companyName: "Apex Systems, Ashburn, VA",
    details: `Contributed to all phases of the Software Development Lifecycle (SDLC) using Agile methodology, ensuring timely delivery and high-quality software solutions. Developed GUI screens for user interfaces using JSP, JavaScript, AJAX, XML, HTML, and CSS, which enhanced user interaction and usability. Implemented client-side validations using JavaScript, improving data integrity and user experience across the application.`,
  },
  {
    year: "October 2013 - May 2014",
    position: "Jr. Java Developer",
    companyName: "Deloitte, Panama City, FL",
    details: `Implemented user login functionality using Spring MVC framework, providing secure and efficient authentication for users. Developed the presentation layer using Spring Framework and created configuration XML files, enhancing the modularity and reusability of the application. Integrated Hibernate ORM for data persistence, improving application performance by optimizing database access and reducing latency.`,
  },
  {
    year: "July 2014 - September 2015",
    position: "Web Developer",
    companyName: "Aar Corporation, Rockford, IL",
    details: `Developed web application layouts and forms using HTML, CSS, and JavaScript, ensuring cross-browser compatibility and responsiveness. Implemented client-side validations and AJAX calls, enhancing user interaction and application performance. Collaborated with business analysts to design user-friendly interfaces, resulting in a 25% increase in user satisfaction and engagement.`,
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
