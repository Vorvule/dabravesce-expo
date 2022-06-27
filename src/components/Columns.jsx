import React, { useEffect } from "react";

import { LeftColumn } from "./LeftColumn/LeftColumn";
import { MiddleColumn } from "./MiddleColumn/MiddleColumn";
import { RightColumn } from "./RightColumn/RightColumn";

import { Cols } from "./Common/Cols";

export const Columns = ({ keys, cols }) => {
  useEffect(() => {
    window.setCols(Cols.getInitial());
  }, [keys]);

  return (
    <div className="w3-content page-container">
      <div className="w3-row">
        {cols.left && <LeftColumn />}
        {cols.middle && <MiddleColumn keys={keys} />}
        {cols.right && <RightColumn />}
      </div>
    </div>
  );
};
