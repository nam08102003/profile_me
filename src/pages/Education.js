import React from "react";
import { ListEdu } from "./Data";

function Education() {
  return (
    <div className="education-page">
      <div className="container">
        <div className="list-edu section-box">
          <ul>
            {ListEdu &&
              ListEdu.map((item, index) => {
                return (
                  <li key={index}>
                    <p>{item.time}</p>
                    <h4>{item.school}</h4>
                    <span>{item.major}</span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Education;
