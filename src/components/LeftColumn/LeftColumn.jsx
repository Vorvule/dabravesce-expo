import React from "react";

import { HeaderH4 } from "../Headers/HeaderH4";
import { Menu } from "./Menu/Menu";

export const LeftColumn = () => {
  return (
    <nav id="LeftColumn" className="w3-col l3 w3-animate-left">
      <div className="w3-padding">
        <HeaderH4 header="Змест" />
        <Menu />
      </div>
    </nav>
  );
};
