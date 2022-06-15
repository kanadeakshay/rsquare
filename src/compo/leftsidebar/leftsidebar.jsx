import React from "react";
import "./leftsidebar.scss";
import dashboardicon from "./../../assets/dashboardicon.svg";
import projecticon from "./../../assets/project.svg";
import calendericon from "./../../assets/calender.svg";
import messageicon from "./../../assets/messages.svg";
import notificationicon from "./../../assets/notifications.svg";
import contacticon from "./../../assets/contact-icon.svg";
import promotionicon from "./../../assets/addclickicon.svg";

function LeftSideBar() {

  const listitem = [
    { itemName: "Dashboard", count: 0, svgName: dashboardicon },
    { itemName: "Project", count: 0, svgName: "project" },
    { itemName: "Calender", count: 0, svgName: "calender" },
    { itemName: "Messages", count: 5, svgName: "message" },
    { itemName: "Notifications", count: 5, svgName: "notification" },
    { itemName: "Contacts", count: 0, svgName: "contact" },
  ];

  return (
    <div className="left-sidebar">
      <div className="left-sidebar__container">
        <ul className="left-sidebar-list">

          {/* {listitem.map((item) => {
            <li className="left-sidebar-listitem">
              <img src={item.svgName} alt={item.svgName} className="sidebar-listitem-icon" />

              <div className="sidebar-listitem-name">{item.itemName}</div>
              {item.count === 0 ? null : (
                <div className="sidebar-listitem-name">{item.count}</div>
              )}
            </li>;
          })} */}


          <li className="left-sidebar-listitem">
            <img src={dashboardicon} alt="" className="sidebar-listitem-icon" />
            <div className="sidebar-listitem-name">Dashboard</div>
          </li>
          <li className="left-sidebar-listitem">
            <img src={projecticon} alt="" className="sidebar-listitem-icon" />
            <div className="sidebar-listitem-name">Project</div>
          </li>
          <li className="left-sidebar-listitem">
            <img src={calendericon} alt="" className="sidebar-listitem-icon" />
            <div className="sidebar-listitem-name">Calender</div>
          </li>
          <li className="left-sidebar-listitem">
            <img src={messageicon} alt="" className="sidebar-listitem-icon" />
            <div className="sidebar-listitem-name">Messages</div>
            <div className="counts">5</div>
          </li>
          <li className="left-sidebar-listitem">
            <img src={notificationicon} alt="" className="sidebar-listitem-icon" />
            <div className="sidebar-listitem-name">Notifications</div>
            <div className="counts">5</div>
          </li>
          <li className="left-sidebar-listitem">
            <img src={contacticon} alt="" className="sidebar-listitem-icon" />
            <div className="sidebar-listitem-name">Contacts</div>
          </li>
        </ul>
        
        <div className="left-sidebar-promotion-list">
        <div className="promotion-heading">Promotions</div>
          <ul className="promotion-list">
            <li className="promotion-list-item">
              <img src={promotionicon} alt="" className="promotion-listitem-icon" />
              <div className="promotion-listitem-name">Promotions</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar;
