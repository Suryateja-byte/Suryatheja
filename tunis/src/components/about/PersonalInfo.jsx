import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Surya theja" },
  { meta: "last name", metaInfo: "Devera konda" },
  { meta: "Age", metaInfo: "25 Years" },
  { meta: "Nationality", metaInfo: "Indian" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Irving" },
  { meta: "phone", metaInfo: "+21621184010" },
  { meta: "Email", metaInfo: "suryatheja148@gmail.com" },
  { meta: "langages", metaInfo: "English, Hindi, Telugu" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
