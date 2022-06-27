import React from "react";

import { HeaderH5 } from "../../Headers/HeaderH5";
import { PromotionList } from "./PromotionList";

export const Promotion = () => {
  return (
    <div className="w3-hide-large">
      <HeaderH5 header="Распаўсюд" />
      <PromotionList />
    </div>
  );
};
