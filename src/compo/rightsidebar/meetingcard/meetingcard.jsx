import React from "react";
import threedots from "./../../../assets/three-dots.svg";
import plussign from "./../../../assets/plus-sign.svg";
import extra from "./../../../assets/extra5.svg";
import Avatar from "boring-avatars";
import "./meetingcard.scss";

function Meetingcard() {
  return (
    <div className="meetingcard">
      <div className="meetingcard-subheading">
        <div className="meeting-period">30 minute call with clients</div>
        <div className="meetingcard-three-dots">
          <img src={threedots} alt="more options" />
        </div>
      </div>
      <div className="meetingcard-heading">Project Discovery call</div>
      <div className="meetingcard-time">
        Due soon <span className="clock">09:20 am</span>
      </div>
      <div className="meetingcard-people-join">
        <div className="meetingcard-people">
          <ul className="meetingcard-people-list">
            <li className="people-list-first">
              <Avatar
                size={35}
                name="Mahalia Jackson"
                variant="beam"
                colors={["#81657E", "#3EA3AF", "#F0AB3D", "#C271B4", "#C20D90"]}
              />
            </li>
            <li className="people-list-second">
              <Avatar
                size={35}
                name="akshay kanade"
                variant="sunset"
                colors={["#81657E", "#3EA3AF", "#F0AB3D", "#C271B4", "#C20D90"]}
              />
            </li>
            <li className="people-list-third">
              <img src={extra} alt="extra"/>
            </li>
          </ul>
        </div>
        <button className="meetingcard-invite">
          <img src={plussign} alt="invite people" />
          Invite
        </button>
      </div>
    </div>
  );
}

export default Meetingcard;
