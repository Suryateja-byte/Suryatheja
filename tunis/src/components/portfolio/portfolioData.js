import Image1 from "../../assets/img/portfolio/project-1.jpg";
import Image2 from "../../assets/img/portfolio/project-2.jpg";
import Image3 from "../../assets/img/portfolio/project-3.jpg";
import Image4 from "../../assets/img/portfolio/project-4.jpg";
import Image5 from "../../assets/img/portfolio/project-5.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "E-commerce Platform",
    image: Image1,
    tag: ["frontend", "responsive", "fullstack"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "E-commerce Order Management System",
        client: "Digi-Key Electronics",
        language: "React, Node.js, Express, Bootstrap",
      },
    ],
  },
  {
    id: 2,
    type: "Responsive Website",
    image: Image2,
    tag: ["frontend", "responsive"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Bootstrap & Flexbox Responsive Portfolio",
        client: "Personal Project",
        language: "HTML5, CSS3, Bootstrap, Flexbox",
      },
    ],
  },
  {
    id: 3,
    type: "API Development",
    image: Image3,
    tag: ["backend", "fullstack"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "RESTful API Service",
        client: "LTI Mindtree",
        language: "Node.js, Express, MongoDB",
      },
    ],
  },
  {
    id: 4,
    type: "Data Dashboard",
    image: Image4,
    tag: ["frontend", "fullstack"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Interactive Analytics Dashboard",
        client: "Digi-Key Electronics",
        language: "React, JavaScript, Chart.js",
      },
    ],
  },
  {
    id: 5,
    type: "Database Application",
    image: Image5,
    tag: ["backend", "fullstack"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Inventory Management System",
        client: "LTI Mindtree",
        language: "Python, SQL, Django",
      },
    ],
  },
];

export default PortfolioData;
