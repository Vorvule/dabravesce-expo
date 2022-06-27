import React from "react";

import { HeaderH5 } from "../../Headers/HeaderH5";
import { Hests } from "./Hests";

export const Hest = () => {
  const [verses, source] = Hests.getHest();

  return (
    <>
      <HeaderH5 header="Слова Божае" />
      <div>
        <i className="fa fa-quote-right w3-margin-right" aria-hidden="true"></i>
        <span>{verses}</span>
      </div>
      <div className="w3-right-align">{source}</div>
    </>
  );
};
