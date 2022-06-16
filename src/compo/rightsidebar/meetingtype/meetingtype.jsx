import React, {useState} from "react";
import "./meetingtype.scss";
import togglebtn from "./../../../assets/toggle.svg";
import Meetingcard from "../meetingcard/meetingcard";

function Meetingtype(props) {

    const [open, setOpen] = useState(false);
  return (
    <div className="meetings-container">
      <div className="meeting-title" onClick={() => setOpen(!open)}>
        <div className="meeting-title-heading">{props.type}</div>
        <div className="toggle-btn" onClick={() => setOpen(!open)}>
          <img src={togglebtn} alt="toggle-btn" className={open ? "open" : "close"} />
        </div>
      </div>
      <div className={open ? "meeting-cards show" : "meeting-cards hidden"}>
        <Meetingcard></Meetingcard>
        <Meetingcard></Meetingcard>
      </div>
    </div>
  );
}

export default Meetingtype;
