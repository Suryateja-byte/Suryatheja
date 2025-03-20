import Image1 from "../../assets/img/portfolio/project-1.jpg";
import Image2 from "../../assets/img/portfolio/project-2.jpg";
import Image3 from "../../assets/img/portfolio/project-3.jpg";
import Image4 from "../../assets/img/portfolio/project-4.jpg";
import Image5 from "../../assets/img/portfolio/project-5.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "E-commerce", // Changed from mobile application
    image: Image1,
    tag: ["design", "e-commerce"], // Added design tag
    delayAnimation: "0",
    modalDetails: [
      {
        project: "E-commerce App Redesign", // More specific project name
        client: "ATD (American Tire Distributors)",
        language: "Figma, User Research, Prototyping", // Changed languages
      },
    ],
  },
  {
    id: 2,
    type: "Healthcare", // Changed from mobile application
    image: Image2,
    tag: ["design", "healthcare"], // Added design tag
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Healthcare Tracking App UX", // More specific
        client: "Freelance",
        language: "Figma, User Flows, Usability Testing", // Changed
      },
    ],
  },
  {
    id: 3,
    type: "Browser Extension", // Changed from browser extension
    image: Image3,
    tag: ["development", "extension"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Zillow Property Comparison", // No change
        client: "Freelance",
        language: "JavaScript, HTML, CSS, Chrome Extension APIs", // No change
      },
    ],
  },
  {
    id: 4,
    type: "Enterprise", // Changed from collaboration platform
    image: Image4,
    tag: ["design", "collaboration"], // Added design
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Enterprise Collaboration Platform", // No Change
        client: "Movate (formerly CSS Corp)", // Changed Client name
        language: "Figma, User Research, Design System", // Changed
      },
    ],
  },
  {
    id: 5,
    type: "Customer Support", // Changed from customer support portal
    image: Image5,
    tag: ["design", "portal"], // Added Design
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Customer Support Portal UI", // more specific
        client: "Movate (formerly CSS Corp)", // Changed
        language: "Figma, Prototyping, Visual Design", // Changed
      },
    ],
  },
];

export default PortfolioData;
