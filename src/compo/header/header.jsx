import React from "react";
import { useState } from "react";
import Avatar from "boring-avatars";
import "./header.scss";
import searchicon from "./../../assets/searchicon.svg";
import dashboardicon from "./../../assets/dashboardicon.svg";
import projecticon from "./../../assets/project.svg";
import calendericon from "./../../assets/calender.svg";
import messageicon from "./../../assets/messages.svg";
import notificationicon from "./../../assets/notifications.svg";
import contacticon from "./../../assets/contact-icon.svg";
import toggleicon from "./../../assets/toggle.svg";
import RightSideBar from "../rightsidebar/rightsidebar";

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
            <div
              className={open ? "toggle-btn rotate" : "toggle-btn"}
              onClick={() => setOpen(!open)}
            >
              <img src={toggleicon} alt="toggle button" />
            </div>

            {/* mobile sidebar */}
            <div
              className="mob-sidebar"
              style={{ visibility: open ? "visible" : "hidden" }}
            >
              <div className="mob-container">
                <div className="mob-info-toggle-btn">
                  <div
                    className="mob-toggle-btn"
                    onClick={() => setOpen(!open)}
                  >
                    <img
                      className="mob-close-icon"
                      src={toggleicon}
                      alt="toggle button"
                    />
                  </div>

                  <div className="mob-info">
                    <Avatar
                      size={40}
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
                </div>

                <ul className="mob-list">
                  <li className="mob-listitem">
                    <img src={dashboardicon} alt="icon" />
                    <div className="mob-listitem-name">Dashboard</div>
                  </li>
                  <li className="mob-listitem">
                    <img src={projecticon} alt="icon" />
                    <div className="mob-listitem-name">Projects</div>
                  </li>
                  <li className="mob-listitem">
                    <img src={calendericon} alt="icon" />
                    <div className="mob-listitem-name">Calender</div>
                  </li>
                  <li className="mob-listitem">
                    <img src={messageicon} alt="icon" />
                    <div className="mob-listitem-name">Messages</div>
                    <div className="counts">5</div>
                  </li>
                  <li className="mob-listitem">
                    <img src={notificationicon} alt="icon" />
                    <div className="mob-listitem-name">Notifications</div>
                    <div className="counts">5</div>
                  </li>
                  <li className="mob-listitem">
                    <img src={contacticon} alt="icon" />
                    <div className="mob-listitem-name">Contacts</div>
                  </li>
                </ul>

                <ul className="mob-list-extra">
                  <li className="mob-extralistitem">
                    <div className="mob-extralistitem-name">
                      Upcoming Meetings
                    </div>
                  </li>
                  <li className="mob-extralistitem">
                    <div className="mob-extralistitem-name">
                      Recent Activities
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {open ? <RightSideBar></RightSideBar> : null}
    </>
  );
}

export default Header;
