import React from "react";
import profilePic from "../shared/img/profile-pic.jpg";

function About() {
  return (
    <div className="bg-black">
      <div className="bg-white margin-5v pad-10h">
        <div className="flex">
          <div className="margin-5h mobile">
            <img className="max-height-200 border-rad-5" src={profilePic} />
          </div>
          <div className="flex-grow margin-5h">
            <div className="text-center text-large">
              <strong>Summary</strong>
            </div>
            <div>
              I recently finished the Midland Code Academy through Midland
              University, where I studied full-stack development. Before this, I
              was was studying Computer Science at UNO. <br />
              <br />
              My first degree is in Music Education from Hastings College. I
              spent the next 6 years after graduating working with at-risk
              children at a center that specializes in behavioral issues.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
