import React from "react";
import { useState } from "react";
import Avatar from "boring-avatars";
import "./header.scss";
import searchicon from "./../../assets/searchicon.svg";
import toggleicon from "./../../assets/toggle.svg";
import threedots from "./../../assets/three-dots.svg";
import RightSideBar from "../rightsidebar/rightsidebar";
import LeftSideBar from "../leftsidebar/leftsidebar";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
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
              <input
                className="search"
                type="text"
                placeholder="search for projects"
              ></input>
            </div>
          </div>

          <div className="profile">
            <Avatar
              size={50}
              name="Mahalia Jackson"
              variant="beam"
              colors={["#81657E", "#3EA3AF", "#F0AB3D", "#C271B4", "#C20D90"]}
            />
            <div className="info">
              <div className="name">Oliver Smith</div>
              <div className="position">vendor</div>
            </div>
            <div className="toggle-btn" onClick={() => setOpen(!open)}>
              <img src={toggleicon} alt="toggle button" />
            </div>

            {/* mobile sidebar */}
            <div
              className="mob-sidebar"
              style={{ visibility: open ? "visible" : "hidden" }}
            >
              <div className="mob-container">
                <div className="mob-toggle-btn" onClick={() => setOpen(!open)}>
                  <img
                    className="mob-close-icon"
                    src={toggleicon}
                    alt="toggle button"
                  />
                </div>

                <div className="mob-info">
                  <Avatar
                    size={35}
                    name="Mahalia Jackson"
                    variant="beam"
                    colors={[
                      "#81657E",
                      "#3EA3AF",
                      "#F0AB3D",
                      "#C271B4",
                      "#C20D90",
                    ]}
                  />
                  <div className="mob-name">Oliver Smith</div>
                  <div className="mob-position">vendor</div>
                </div>

                <ul className="mob-list">
                  <li className="mob-listitem">Dashboard</li>
                  <li className="mob-listitem">Projects</li>
                  <li className="mob-listitem">Calender</li>
                  <li className="mob-listitem">Messages</li>
                  <li className="mob-listitem">Notifications</li>
                  <li className="mob-listitem">Contacts</li>
                  <li className="mob-listitem">Upcoming Meetings</li>
                  <li className="mob-listitem">Recent Activities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <LeftSideBar></LeftSideBar>
      {open ? <RightSideBar></RightSideBar> : null}
    </>
  );
}

export default Header;
