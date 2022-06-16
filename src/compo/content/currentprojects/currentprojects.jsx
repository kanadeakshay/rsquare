import React from "react";
import "./currentprojects.scss";
import Projectcard from "./projectcard/projectcard";
import filtericon from "./../../../assets/filter.svg";
import threedots from "./../../../assets/three-dots.svg";

function Currentprojects() {
  return (
    <>
      <div className="current-project-container">
        <div className="current-project-title">
          <div className="current-project-heading">Current Projects</div>
          <div className="current-project-heading-btns">
            <div className="filter-btn">
              <div className="filter-txt">Filter</div>
              <img src={filtericon} alt="filter icon" />
            </div>
            <div className="moreinfo-dots-icon">
              <img src={threedots} alt="more info" />
            </div>
          </div>
        </div>
        <div className="current-project-subheading">
          Projects that are currently in progress
        </div>
        <div className="current-project-cards">
          <Projectcard></Projectcard>
        </div>
      </div>
    </>
  );
}

export default Currentprojects;
