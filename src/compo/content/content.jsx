import React from "react";
import "./content.scss";
import Statscard from "./stats/statscard";

function Content() {
  return (
    <div className="content-container">
      {/* head */}
      <div className="welcome-note">Welcome back, Andrew!</div>
      <div className="welcome-message">
        Have a look at the Quick Progress Bar.
      </div>
      <div className="stats-container">
        <div className="stats-container-solo">
          <Statscard
            btnText="Live Projects"
            count="56"
            message="Currently, the projects is in progress"
            color="#7a9fff"
            svgname="liveicon"
          ></Statscard>
        </div>

        <div className="stats-container-combo">
          <Statscard
            viewall={false}
            color="#7AD1FF"
            mr="5px"
            btnText="In Progress"
            count="124"
            message="Projects in progress"
            svgname="progressicon"
          ></Statscard>
          <Statscard
            viewall={false}
            color="#B97AFF"
            ml="5px"
            btnText="Completed"
            count="24"
            message="Completed Projects"
            svgname="completedicon"
          ></Statscard>
        </div>
      </div>
    </div>
  );
}

export default Content;
