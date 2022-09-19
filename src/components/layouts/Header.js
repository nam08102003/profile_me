import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavLinks from "./partials/HeaderNav";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
  const [mobile, setMobile] = useState(false);

  const ChangeMobile = () => {
    setMobile(!mobile);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header-nav">
          <ul className="header-menu">
            {NavLinks &&
              NavLinks.map((nav, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active" : undefined
                      }
                      // exact={true}
                      to={nav.path ? nav.path : ""}
                    >
                      {nav.icon}
                    </NavLink>
                  </li>
                );
              })}
          </ul>
          <ul className="icon-bar">
            <li onClick={ChangeMobile}>
              <FaBars />
            </li>
          </ul>
          <ul className={`header-menu-mobile ${mobile ? "show" : ""}`}>
            {NavLinks &&
              NavLinks.map((nav, index) => {
                return (
                  <li key={index} onClick={ChangeMobile}>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "active" : undefined
                      }
                      // exact={true}
                      to={nav.path ? nav.path : ""}
                    >
                      {nav.name}
                    </NavLink>
                  </li>
                );
              })}
            <button className="close-btn" onClick={ChangeMobile}>
              <AiOutlineClose />
            </button>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
