import React, { useState } from "react";
import "./rightsidebar.scss";
import threedots from "./../../assets/three-dots.svg";
import togglebtn from "./../../assets/toggle.svg";
import Meetingcard from "./meetingcard/meetingcard";
import Meetingtype from "./meetingtype/meetingtype";

function RightSideBar() {

  const[open, setOpen] = useState(false);

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

          <Meetingtype type="Today's Meetings"></Meetingtype>
          <Meetingtype type="Schedule Meetings"></Meetingtype>
        </div>

        <div className="recent-activities">
        <div className="recent-activities__title">
            <div className="recent-activities__title__heading">Recent Activities</div>
            <div className="three-dot-icon">
              <img src={threedots} alts="more options button"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSideBar;
