import React from "react";
import SideBar from "../components/layouts/SideBar";
import Header from "../components/layouts/Header";

function LayoutDefault({ children }) {
  return (
    <div className="site-body grid">
      <div className="row">
        <SideBar />
        <div className="site-content col l-8 m-8 c-12">
          <Header />
          <div className="content-main">
            <div className="container">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutDefault;
