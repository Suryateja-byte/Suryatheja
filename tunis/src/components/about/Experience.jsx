import React from "react";

const experienceContent = [
  {
    year: "June 2024 - Present", // Changed to 2024
    position: "Senior UI/UX Designer", // Changed position
    companyName: "ATD (American Tire Distributor)",
    details: `Redesigned e-commerce app interface, resulting in a 35% increase in user engagement and 28% higher conversion rates. Conducted comprehensive user research, identifying pain points and implementing solutions that improved user satisfaction scores by 45%. Developed and maintained a cohesive design system, ensuring visual consistency across all digital touchpoints. Collaborated with product managers and developers to deliver intuitive interfaces, reducing the user learning curve by 50%.`, // Updated details
  },
  {
    year: "May 2019 - May 2022", // Changed Month
    position: "UI/UX Designer", // changed position
    companyName: "CSS Corp (now Movate)", // Added now Movate
    details: `Spearheaded the UX redesign of a B2B e-commerce platform, improving user task completion rates by 60%. Designed wireframes, mockups, and interactive prototypes to effectively communicate design concepts to stakeholders. Implemented user-centered design principles, reducing customer support inquiries by 40%. Created responsive designs, ensuring a seamless experience across desktop, tablet, and mobile devices.`, // Updated details
  },
  {
    year: "2022 - 2024", // Removed Freelance and added Masters
    position: "Master of Science in Computer Science",
    companyName: "Southern Arkansas University",
    details: ``, // details
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
