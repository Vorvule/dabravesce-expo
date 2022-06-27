import React from "react";

import { FaButton } from "../../FaButton";

import { Cols } from "../../../Common/Cols";

export const TopSlidersButton = ({ cols }) => {
  return (
    <FaButton
      classes="w3-right w3-border-left w3-hide-large"
      title="Парады і Налады"
      size="w3-xlarge"
      fa="fa-sliders"
      handler={() => Cols.toggleShow(cols, "right")}
    />
  );
};
