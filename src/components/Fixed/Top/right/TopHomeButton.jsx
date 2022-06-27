import React from "react";

import { FaButton } from "../../FaButton";

export const TopHomeButton = () => {
  return (
    <FaButton
      fa="fa-home"
      size="w3-xlarge"
      title="У пачатак"
      handler={() => window.setKeys([0, 0, 0])}
      classes="w3-right w3-border-left w3-hide-medium w3-hide-small"
    />
  );
};
