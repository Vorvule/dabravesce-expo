import React, { useEffect } from "react";

import { AudioPlayer } from "./AudioPlayer";
import { Core } from "../Common/Core";
import { HeaderH4 } from "../Headers/HeaderH4";
import { HeaderH5 } from "../Headers/HeaderH5";
import { ShareIcons } from "./ShareIcons";
import { Keys } from "../Common/Keys";

export const MiddleColumn = ({ keys }) => {
  const [
    albumName,
    bookName,
    chapterName,
    chapterJsx,
    paragraphs,
    audioSource,
  ] = Core.getContent(keys);

  useEffect(() => {
    const keysFromHistory = keys[3];

    Core.setTitle(bookName, chapterName);
    Core.setDescription(albumName, bookName, chapterName);

    window.scrollTo(0, 0);
    !keysFromHistory && Keys.pushIntoHistory(keys);
  });

  return (
    <div id="MiddleColumn" className="w3-col l6 w3-padding w3-animate-bottom">
      <HeaderH4 header={albumName} />
      <HeaderH5 header={bookName} />

      <h6 className="w3-center">
        <strong>{chapterJsx}</strong>
      </h6>

      <ShareIcons keys={keys} />
      {audioSource && <AudioPlayer source={audioSource} />}

      <div>{paragraphs}</div>
    </div>
  );
};
