import React from "react";

export const PromotionListItem = ({ fa, url, item }) => {
  const classes = "fa fa-fw w3-margin-right w3-large " + fa;

  return (
    <li title={item} onClick={() => window.open(url)}>
      <i className={classes} aria-hidden="true"></i>
      <span>{item}</span>
    </li>
  );
};
