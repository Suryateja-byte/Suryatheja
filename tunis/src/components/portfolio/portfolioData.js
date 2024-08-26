import Image1 from "../../assets/img/portfolio/project-1.jpg";
import Image2 from "../../assets/img/portfolio/project-2.jpg";
import Image3 from "../../assets/img/portfolio/project-3.jpg";
import Image4 from "../../assets/img/portfolio/project-4.jpg";
import Image5 from "../../assets/img/portfolio/project-5.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "web application",
    image: Image1,
    tag: ["web"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Online Application",
        client: "Applied Systems, Inc.",
        language:
          "Java, Spring MVC, Spring Boot, Hibernate, RESTful Web Services",
      },
    ],
  },
  {
    id: 2,
    type: "web application",
    image: Image2,
    tag: ["web"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "GUI for User Interfaces",
        client: "Apex Systems",
        language: "JSP, JavaScript, AJAX, XML, HTML, CSS",
      },
    ],
  },
  {
    id: 3,
    type: "web application",
    image: Image3,
    tag: ["web"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "User Login System",
        client: "Deloitte",
        language: "Spring MVC, Hibernate, XML, HTML, CSS",
      },
    ],
  },
  {
    id: 4,
    type: "web application",
    image: Image4,
    tag: ["web"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Employee Management System",
        client: "CSS Corp",
        language: "HTML, CSS, Angular, React.js",
      },
    ],
  },
  {
    id: 5,
    type: "web application",
    image: Image5,
    tag: ["web"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Customer Support Portal",
        client: "CSS Corp",
        language: "HTML, CSS, Angular, React.js",
      },
    ],
  },
];

export default PortfolioData;
