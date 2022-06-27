import { allAlbums } from "../../../albums/albums";

import { Util } from "../../Common/Util";

const hestCollection = [
  // Matthew

  {
    bookKey: 0,
    chapterKey: 3,
    verseKeys: [6],
  },
  {
    bookKey: 0,
    chapterKey: 4,
    verseKeys: [4],
  },
  {
    bookKey: 0,
    chapterKey: 5,
    verseKeys: [33],
  },
  {
    bookKey: 0,
    chapterKey: 6,
    verseKeys: [0],
  },
  {
    bookKey: 0,
    chapterKey: 6,
    verseKeys: [5],
  },
  {
    bookKey: 0,
    chapterKey: 6,
    verseKeys: [11],
  },
  {
    bookKey: 0,
    chapterKey: 9,
    verseKeys: [7],
  },
  {
    bookKey: 0,
    chapterKey: 9,
    verseKeys: [15],
  },
  {
    bookKey: 0,
    chapterKey: 9,
    verseKeys: [33],
  },
  {
    bookKey: 0,
    chapterKey: 12,
    verseKeys: [11],
  },
  {
    bookKey: 0,
    chapterKey: 19,
    verseKeys: [15],
  },
  {
    bookKey: 0,
    chapterKey: 21,
    verseKeys: [34, 35, 36, 37, 38, 39],
  },

  // Mark

  {
    bookKey: 1,
    chapterKey: 1,
    verseKeys: [26],
  },
  {
    bookKey: 1,
    chapterKey: 5,
    verseKeys: [3],
  },
  {
    bookKey: 1,
    chapterKey: 8,
    verseKeys: [34],
  },
  {
    bookKey: 1,
    chapterKey: 8,
    verseKeys: [39],
  },
  {
    bookKey: 1,
    chapterKey: 11,
    verseKeys: [16],
  },

  // Luke

  {
    bookKey: 2,
    chapterKey: 5,
    verseKeys: [26],
  },
  {
    bookKey: 2,
    chapterKey: 5,
    verseKeys: [28],
  },
  {
    bookKey: 2,
    chapterKey: 10,
    verseKeys: [8],
  },
  {
    bookKey: 2,
    chapterKey: 11,
    verseKeys: [21, 22],
  },
  {
    bookKey: 2,
    chapterKey: 15,
    verseKeys: [9],
  },
  // {
  //   bookKey: 2,
  //   chapterKey: 16,
  //   verseKeys: [20],
  // },
  {
    bookKey: 2,
    chapterKey: 17,
    verseKeys: [23, 24],
  },
  {
    bookKey: 2,
    chapterKey: 20,
    verseKeys: [18],
  },
  {
    bookKey: 2,
    chapterKey: 22,
    verseKeys: [33],
  },

  // John

  {
    bookKey: 3,
    chapterKey: 7,
    verseKeys: [30, 31],
  },
  {
    bookKey: 3,
    chapterKey: 17,
    verseKeys: [35],
  },
];

export class Hests {
  static getHest() {
    const hestKey = Util.randomInteger(0, hestCollection.length);
    const hestData = hestCollection[hestKey];

    const bookKey = hestData.bookKey;
    const chapterKey = hestData.chapterKey;
    const versesArray = hestData.verseKeys;

    const album = allAlbums[0].text; // Gospel
    const bookBriefName = album[bookKey].idBe;
    const book = album[bookKey].text;
    const chapterText = book[chapterKey][1] || book[chapterKey].text;

    const verses = this.hestVerses(versesArray, chapterText);
    const source = this.hestSource(bookBriefName, chapterKey, versesArray);

    return [verses, source];
  }

  static hestSource(bookBriefName, chapterKey, versesArray) {
    return `${bookBriefName} ${chapterKey + 1}:${versesArray[0] + 1}`;
  }

  static hestVerses(versesArray, chapterContent) {
    let verses = "";
    const pattern = new RegExp(/\d+\. /);
    versesArray.forEach((verse) => {
      verses += chapterContent[verse].replace(pattern, "") + " ";
    });
    return verses;
  }
}
