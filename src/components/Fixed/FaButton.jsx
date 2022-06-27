import React from "react";

export const FaButton = ({ fa, title, classes, handler, size, strong }) => {
  const spanClasses = "w3-bar-item " + classes;
  const iClasses = "fa fa-fw " + size + " " + fa;

  return (
    <span className={spanClasses} title={title} onClick={handler}>
      <i className={iClasses}></i>
      {strong && (
        <strong className="w3-margin-left w3-hide-small">{strong}</strong>
      )}
    </span>
  );
};
