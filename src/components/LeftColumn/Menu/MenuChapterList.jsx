import React from "react";

export const MenuChapterList = ({ albumKey, bookKey, chapterList }) => {
  return chapterList.map((chapterText, chapterKey) => {
    const chapterName = chapterText.name.replace(/ \| .+/, "");

    const keys = [albumKey, bookKey, chapterKey];

    return (
      <li key={chapterKey} onClick={() => window.setKeys(keys)}>
        {chapterName}
      </li>
    );
  });
};
