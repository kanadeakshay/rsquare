import React from "react";
import "./recentactivity.scss";
import Avatar from "boring-avatars";

function Recentactivity(props) {
  const { name, message, index } = props;
  return (
    <div className="recent-activity-container">
      <div className="message-info">
        <div className="message">{message}</div>
        <div className="name">{name}</div>
        <div className="timestamp">Jun 14, 2021 at 5:31 PM</div>
      </div>
      <div className="profile-pic">
        <Avatar
          size={50}
          name={name}
          variant="bauhaus"
          colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
        />
      </div>
    </div>
  );
}

export default Recentactivity;
