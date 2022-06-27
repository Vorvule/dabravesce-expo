import React from "react";

import { FaButton } from "../../FaButton";

import { Cols } from "../../../Common/Cols";

export const TopBarsButton = ({ cols }) => {
  return (
    <FaButton
      fa="fa-bars"
      title="Змест"
      size="w3-xlarge"
      classes="w3-border-right w3-hide-large"
      handler={() => Cols.toggleShow(cols, "left")}
    />
  );
};
