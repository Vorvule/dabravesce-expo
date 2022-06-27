import React from "react";

import { FaButton } from "../../FaButton";
import { FooterArrow } from "./FooterArrow";

export const FooterArrows = ({ keys }) => {
  return (
    <div id="Arrows" className="w3-content">
      <FaButton
        title="Назад"
        strong="Назад"
        fa="fa-arrow-left"
        handler={() => FooterArrow.nextChapter(keys, false)}
        classes="w3-large w3-center"
      />
      <FaButton
        title="Уверх"
        strong="Уверх"
        fa="fa-chevron-up"
        handler={() => window.scrollTo(0, 0)}
        classes="w3-large w3-center"
      />
      <FaButton
        title="Долу"
        strong="Долу"
        fa="fa-chevron-down"
        handler={() => window.scrollTo(0, document.body.scrollHeight)}
        classes="w3-large w3-center"
      />
      <FaButton
        title="Далей"
        strong="Далей"
        fa="fa-arrow-right"
        handler={() => FooterArrow.nextChapter(keys)}
        classes="w3-large w3-center"
      />
    </div>
  );
};
