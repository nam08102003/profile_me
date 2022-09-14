import React from "react";
import SideBarLinks from "./partials/SideBarNav";

function SideBar() {
  return (
    <div className="sidebar col l-4 m-4 c-0">
      <div className="container">
        <div className="sidebar-top">
          <div className="personal-info">
            <div className="avatar">
              <img
                src={require("../../assets/image/images.png")}
                alt="avatar"
              />
            </div>
            <h4 className="name">Lê Đức Nam</h4>
            <span>Web Developer</span>
          </div>
        </div>
        <div className="sidebar-bottom">
          <div className="link-contact">
            <ul>
              {SideBarLinks &&
                SideBarLinks.map((link, index) => {
                  if (link.linkOut) {
                    return (
                      <li key={index}>
                        <a className="link-title" href={link.path}>
                          {link.icon}
                          {link.name}
                        </a>
                        <span className="link-content">{link.content}</span>
                      </li>
                    );
                  } else {
                    return (
                      <li key={index}>
                        <span className="link-title">
                          {link.icon}
                          {link.name}
                        </span>
                        <span className="link-content">{link.content}</span>
                      </li>
                    );
                  }
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
