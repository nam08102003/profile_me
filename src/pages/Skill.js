import React from "react";
import { ListSkill } from "./Data";

function Skill() {
  return (
    <div className="skill-page">
      <div className="list-skill">
        <ul>
          {ListSkill &&
            ListSkill.map((item, index) => {
              return (
                <li key={index} className="section-box">
                  <h4 className="section-title">
                    <span>{item.title}</span>
                  </h4>
                  <div className="list-tech">
                    {item.value &&
                      item.value.map((value, index) => {
                        return (
                          <span className="item-card" key={index}>
                            {value}
                          </span>
                        );
                      })}
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Skill;
