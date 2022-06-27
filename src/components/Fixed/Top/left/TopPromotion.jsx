import React from "react";

import { iconsCollection } from "../../../Icons/iconsCollection";
import { FaButton } from "../../FaButton";

export const TopPromotion = () => {
  return iconsCollection.map((icon) => {
    return (
      <FaButton
        fa={icon.fa}
        size="w3-xlarge"
        key={icon.name}
        title={icon.name}
        handler={() => window.open(icon.url)}
        classes="w3-hide-small w3-hide-medium w3-border-right"
      />
    );
  });
};
