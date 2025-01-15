import React from "react";

const achievementsContent = [
  {
    title: "5+",
    subTitle1: "years of",
    subTitle2: "experience in Android Development",
  },
  { title: "10+", subTitle1: "successfully delivered", subTitle2: "projects" },
  { title: "3+", subTitle1: "diverse", subTitle2: "industries served" },
  { title: "2", subTitle1: "degrees in", subTitle2: "Computer Science" },
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
