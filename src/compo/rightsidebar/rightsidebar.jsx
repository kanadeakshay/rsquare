import React from "react";
import "./rightsidebar.scss";
import threedots from "./../../assets/three-dots.svg";


function RightSideBar() {

  return (
    <div className="right-sidebar">
      <div className="right-sidebar__container">
        <div className="upcoming-meetings">
          <div className="upcoming-meetings__title">
            <div className="upcoming-meetings__title__heading">Upcoming Meetings</div>
            <div className="three-dot-icon">
              <img src={threedots} alts="more options button"></img>
            </div>
          </div>
          <div className="todays-meetings"></div>
          <div className="schedule-meetings"></div>
        </div>
        <div className="recent-activities"></div>
      </div>
    </div>
  );
}

export default RightSideBar;
