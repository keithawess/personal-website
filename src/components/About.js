import React from "react";
import profilePic from "../shared/img/profile-pic.jpg";

function About() {
  return (
    <div className="bg-black">
      <div className="bg-white margin-5v pad-10h">
        <div className="flex">
          <div className="margin-5h">
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
      <div className="bg-white margin-5v">
        <div className="text-center text-large">
          <strong>Interests</strong>
        </div>
        <div className="flex">
          <div className="circle border border-white logo margin-right">
            <img />
          </div>
          <div>
            Here is a music interest that I am interested in. Isn't it interesting?
          </div>
        </div>
        <div className="flex">
          <div>
            Here is another thing that I'm interested in. ROCK CLIMBING!
          </div>
          <div className="circle border border-white logo margin-right">
            <img />
          </div>
        </div>
        <div className="flex">
          <div className="circle border border-white logo margin-right">
            <img />
          </div>
          <div>
Who doesn't love video games?          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
