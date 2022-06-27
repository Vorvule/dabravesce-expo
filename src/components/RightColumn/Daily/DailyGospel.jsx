import React from "react";

import { HeaderH5 } from "../../Headers/HeaderH5";
import { Daily } from "./Daily";

export const DailyGospel = () => {
  return (
    <>
      <HeaderH5 header="Евангелле дня" />
      <div>
        <i className="fa fa-bell-o w3-margin-right" aria-hidden="true"></i>
        <strong
          className="w3-text-blue-gray"
          onClick={() => window.setKeys(Daily.getDailyKeys())}
        >
          {Daily.getNames()}
        </strong>
      </div>
      <br />
    </>
  );
};
