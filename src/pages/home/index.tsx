import * as React from "react";
import { NavLink } from "react-router-dom";

import { VENDORS_LIST } from "../../routes/paths";

function Home() {
  return (
    <div>
      <NavLink to={VENDORS_LIST}>vendore-list</NavLink>
    </div>
  );
}

export default Home;
