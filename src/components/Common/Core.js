import { allAlbums } from "../../albums/albums";

export class Core {
  static getContent(keys) {
    const [albumKey, bookKey, chapterKey] = keys;

    const albumName = allAlbums[albumKey].name;
    const albumText = allAlbums[albumKey].text;

    const bookName = albumText[bookKey].name;
    const bookText = albumText[bookKey].text;

    const chapterName = bookText[chapterKey].name;
    const chapterNameJsx = this.getJsx(chapterName.split(" | "));

    const chapterText = bookText[chapterKey].text;
    const paragraphsJsx = this.getJsx(chapterText);

    const chapterAudio = bookText[chapterKey].audio;
    const audioSource = chapterAudio && "/audio/" + chapterAudio;

    return [
      albumName,
      bookName,
      chapterName,
      chapterNameJsx,
      paragraphsJsx,
      audioSource,
    ];
  }

  static getJsx(dataArray) {
    return dataArray.map((paragraph, index) => {
      return paragraph.length ? <p key={index}>{paragraph}</p> : <br />;
    });
  }

  static setTitle(bookName, chapterName) {
    const chapter = chapterName.split(" | ")[0];
    const title = "Дабравесце — " + bookName + ", " + chapter;
    document.title = title;
  }

  static setDescription(albumName, bookName, chapterName) {
    const description = albumName + ", " + bookName + ", " + chapterName;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", description);
  }
}
