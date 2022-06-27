import React from "react";

import { MenuChapterList } from "./MenuChapterList";
import { Ul } from "./Ul";

export const MenuBookList = ({ albumKey, bookList }) => {
  return bookList.map((bookContent, bookKey) => {
    const id = bookContent.idEn;

    return (
      <li key={id}>
        <div onClick={() => Ul.toggleShow(id)}>{bookContent.name}</div>
        <ul id={id} className="w3-ul w3-hide">
          <MenuChapterList
            albumKey={albumKey}
            bookKey={bookKey}
            chapterList={bookContent.text}
          />
        </ul>
      </li>
    );
  });
};
