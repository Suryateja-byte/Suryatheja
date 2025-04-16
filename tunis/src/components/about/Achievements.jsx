import React from "react";
const achievementsContent = [
  {
    title: "3+",
    subTitle1: "years of",
    subTitle2: "experience in Full Stack Development",
  },
  { title: "9+", subTitle1: "completed", subTitle2: "certifications" },
  { title: "2+", subTitle1: "industries", subTitle2: "served" },
  { title: "1", subTitle1: "bachelor's in", subTitle2: "Computer Science" },
  { title: "30%", subTitle1: "reduction in", subTitle2: "page load time" },
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
