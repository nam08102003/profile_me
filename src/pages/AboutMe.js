import React from "react";
import { ListInfo } from "./Data";

function AboutMe() {
  return (
    <div className="about-me-page grid">
      <div className="container row">
        <div className="information col l-6 m-6 c-12">
          <div className="section-title">
            <span>Information</span>
          </div>
          <div className="infomation-content section-box">
            <ul>
              {ListInfo &&
                ListInfo.map((item, index) => {
                  return (
                    <li key={index}>
                      <span className="title">{item.title} : </span>
                      <span className="value">{item.value}</span>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div className="experience col l-6 m-6 c-12">
          <div className="section-title">
            <span>Experience</span>
          </div>
          <div className="experience-content section-box">
            <h3>Not Experience</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
