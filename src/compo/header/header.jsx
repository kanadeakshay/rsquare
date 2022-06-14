import React from "react";
import Avatar from "boring-avatars";
import "./header.scss";
import searchicon from './../../assets/searchicon.svg';
import toggleicon from './../../assets/toggle.svg';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="brand">
          <Avatar
            size={50}
            name="Maria Mitchell"
            variant="marble"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
        </div>
        <div className="searchbox">
          <div className="icon">
            <a>
              <img src={searchicon} alt="search icon" />
            </a>
          </div>
          <div className="inputbox">
            <input className="search" type="text" placeholder="search for projects"></input>
          </div>
        </div>
        <div className="profile">
          <Avatar
            size={40}
            name="Mahalia Jackson"
            variant="beam"
            colors={["#81657E", "#3EA3AF", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
          <div className="info">
            <div className="name">Oliver Smith</div>
            <div className="position">vendor</div>
          </div>
          <div className="toggle-btn">
          <img src={toggleicon} alt="toggle button"/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
