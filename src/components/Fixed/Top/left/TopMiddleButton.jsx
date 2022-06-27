import React from "react";

export const TopMiddleButton = () => {
  const middleCol = { left: false, middle: true, right: false };

  return (
    <span
      id="MiddleButton"
      title="Дабравесце"
      className="w3-bar-item w3-large w3-hide-large"
      onClick={() => window.setCols(middleCol)}
    >
      <i className="fa fa-book fa-fw w3-xlarge w3-margin-right"></i>
      <strong>Дабравесце</strong>
    </span>
  );
};
