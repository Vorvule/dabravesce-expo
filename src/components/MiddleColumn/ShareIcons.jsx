import React from "react";

import { allAlbums } from "../../albums/albums";

import { Util } from "../Common/Util";

export const ShareIcons = ({ keys }) => {
  return (
    <div className="w3-center share-container">
      <div className="w3-padding" onClick={() => shareTo("twitter", keys)}>
        <i className="fa fa-twitter w3-xlarge w3-text-blue-gray"></i>
        <div className="w3-small">Twitter</div>
      </div>

      {/* <div className="w3-padding" onClick={() => shareSocial("telegram")}>
        <i className="fa fa-telegram w3-xlarge w3-text-blue-gray"></i>
        <div className="w3-small">Telegram</div>
      </div> */}

      <div className="w3-padding" onClick={() => copyUrl()}>
        <i className="fa fa-clone w3-xlarge w3-text-blue-gray"></i>
        <div className="w3-small">Спасылка</div>
      </div>

      <div className="w3-padding" onClick={() => shareTo("facebook", keys)}>
        <i className="fa fa-facebook w3-xlarge w3-text-blue-gray"></i>
        <div className="w3-small">Facebook</div>
      </div>
    </div>
  );
};

const shareTo = (socialNetwork, keys) => {
  let href;

  const [albumIndex, bookIndex, chapterIndex] = keys;

  const pairedKeys =
    Util.pairIndex(albumIndex) +
    Util.pairIndex(bookIndex) +
    Util.pairIndex(chapterIndex);
  // %23 = # url encoded
  const shareUrl = "https://www.dabravesce.by/index.html?k=" + pairedKeys;

  const bookName = allAlbums[albumIndex].text[bookIndex].name;
  const chapterName =
    allAlbums[albumIndex].text[bookIndex].text[chapterIndex].name;
  const shareInfo = `Сёння Вашай увазе прапануецца ${bookName}, ${chapterName}`;
  const hashTags =
    "%23Біблія+%23Евангелле+%23Библия+%23Евангелие+%23Bible+%23Gospel";
  // %0A = \n url encoded
  switch (socialNetwork) {
    case "twitter":
      href = `https://twitter.com/intent/tweet?text=${shareInfo}:&url=${shareUrl}%0A%0A`;
      href += `&hashtags=Біблія,Евангелле,Библия,Евангелие,Bible,Gospel`;
      break;
    case "facebook":
      href = `https://facebook.com/sharer.php?u=${shareUrl}&app_id=480142549312931`;
      href += `&quote=${shareInfo}%0A%0A${hashTags}`;
      break;
    case "telegram":
      href = `https://t.me/share/url?url=${shareUrl}%0A&text=${shareInfo}%0A%0A${hashTags}`;
      break;
    default:
      href = document.location.href;
  }

  document.location.href = href; // try .assign(href)
};

const copyUrl = () => {
  navigator.clipboard.writeText(window.location.href);
};
