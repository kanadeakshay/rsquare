import React from "react";
import "./statscard.scss";
import liveicon from "./../../../assets/live.svg";
import progressicon from "./../../../assets/progress.svg";
import completedicon from "./../../../assets/completed.svg";

function Statscard(props) {
  const { viewall, color, ml, mr, btnText, count, message, svgname } = props;
  return (
    <div
      className="stats-card-container"
      style={{ backgroundColor: color, marginRight: mr, marginLeft: ml }}
    >
      <div className="btns">
        <div className="title-btn">
          {svgname == "liveicon" ? <img src={liveicon} alt="liveicon" /> : null}
          {svgname == "progressicon" ? <img src={progressicon} alt="progressicon" /> : null}
          {svgname === "completedicon" ? <img src={completedicon} alt="completedicon" /> : null}
          <div className="title-btn-txt">{btnText}</div>
        </div>
        {viewall === false ? null : (
          <div className="view-all-btn">
            <a href="#" className="view-all-btn-link">
              <button className="view-all-btn-cta">View All</button>
            </a>
          </div>
        )}
      </div>
      <div className="title-count">{count}</div>
      <div className="card-about">{message}</div>
    </div>
  );
}

export default Statscard;
