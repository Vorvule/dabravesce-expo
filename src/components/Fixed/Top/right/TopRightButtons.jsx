import React from "react";

import { TopSlidersButton } from "./TopSlidersButton";
import { TopHomeButton } from "./TopHomeButton";

export const TopRightButtons = ({ cols }) => {
  return (
    <>
      <TopHomeButton />
      <TopSlidersButton cols={cols} />
    </>
  );
};
