import React from "react";
import Avatar from "boring-avatars";
import "./projectcard.scss";
import deadlinecal from "./../../../../assets/deadline-calender.svg";
import dollaricon from "./../../../../assets/dollar-sign.svg";

function Projectcard() {
  return (
    <div className="project-card">
      <div className="project-card-title">Construction Project</div>
      <div className="project-card-property-name">Property name</div>
      <div className="project-card-price-timestamp">
        <div className="project-card-price">
          <img src={dollaricon} alt="dollar icon" />
          100-800
        </div>
        <div className="project-card-timestamp">
          <img src={deadlinecal} alt="calender icon" />
          Deadline - <span>25 may</span>
        </div>
      </div>
      <div className="project-progressbar">
        <progress value="75" max="100"></progress>
        <div className="project-progressbar-subheading">
          <p>Progress bar</p>
          <p>75 %</p>
        </div>
      </div>
      <div className="project-card-moreinfo">
        {/* avatar */}
        <div className="project-profile-pic-name">
          <Avatar
            size={30}
            name="doms"
            variant="bauhaus"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
          <span>Vender's Name</span>
        </div>
        <button className="project-moreinfo-btn">View</button>
      </div>
    </div>
  );
}

export default Projectcard;
