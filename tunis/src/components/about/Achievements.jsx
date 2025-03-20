import React from "react";

const achievementsContent = [
  {
    title: "5+",
    subTitle1: "years of",
    subTitle2: "experience in UI/UX Design", // Changed from Android
  },
  { title: "10+", subTitle1: "successfully delivered", subTitle2: "projects" },
  { title: "2+", // Changed from 3 to 2
   subTitle1: "industries",
   subTitle2: "served" }, //made subtitle singular
  { title: "2", subTitle1: "degrees in", subTitle2: "Computer Science" },
  { title: "45%", subTitle1: "increase in", subTitle2: "user satisfaction" }, //added new achievement
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
