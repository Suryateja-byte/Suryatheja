import Image1 from "../../assets/img/portfolio/project-1.jpg";
import Image2 from "../../assets/img/portfolio/project-2.jpg";
import Image3 from "../../assets/img/portfolio/project-3.jpg";
import Image4 from "../../assets/img/portfolio/project-4.jpg";
import Image5 from "../../assets/img/portfolio/project-5.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "mobile application",
    image: Image1,
    tag: ["mobile"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "E-commerce Application",
        client: "ATD (American Tire Distributors)",
        language: "Kotlin, Jetpack Compose, RESTful APIs",
      },
    ],
  },
  {
    id: 2,
    type: "mobile application",
    image: Image2,
    tag: ["mobile"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Healthcare Tracking App",
        client: "Freelance",
        language: "Kotlin, Android SDK, Jetpack Compose",
      },
    ],
  },
  {
    id: 3,
    type: "browser extension",
    image: Image3,
    tag: ["extension"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Zillow Property Comparison",
        client: "Freelance",
        language: "JavaScript, HTML, CSS, Chrome Extension APIs",
      },
    ],
  },
  {
    id: 4,
    type: "collaboration platform",
    image: Image4,
    tag: ["collaboration"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Enterprise Collaboration Platform",
        client: "CSS Corp",
        language: "Kotlin, Java, MVP Architecture",
      },
    ],
  },
  {
    id: 5,
    type: "customer support portal",
    image: Image5,
    tag: ["portal"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Customer Support Portal",
        client: "CSS Corp",
        language: "Angular, React.js, HTML, CSS",
      },
    ],
  },
];

export default PortfolioData;
