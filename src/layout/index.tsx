import React from "react";

import Header from "./header";
import "./style/layout.scss";

/* eslint-disable */
function Layout({ component }: { component: any }) {
  return (
    <>
      <Header />
      <div className="layout-continer">{React.createElement(component)}</div>
    </>
  );
}

export default Layout;
