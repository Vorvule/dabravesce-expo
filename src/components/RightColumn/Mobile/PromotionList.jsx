import React from "react";

import { PromotionListItem } from "./PromotionListItem";
import { iconsCollection } from "../../Icons/iconsCollection";

export const PromotionList = () => {
  return (
    <ul className="w3-ul" id="RightPromotion">
      {listIcons()}
    </ul>
  );
};

const listIcons = () => {
  return iconsCollection.map((icon) => {
    return (
      <PromotionListItem
        fa={icon.fa}
        url={icon.url}
        key={icon.name}
        item={icon.name}
        title={icon.name}
      />
    );
  });
};
