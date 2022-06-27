import { allAlbums } from "../../../../albums/albums";

export class FooterArrow {
  static nextChapter(keys, goForward = true) {
    const [albumKey, bookKey, chapterKey] = keys;

    let newChapterKey, newBookKey, newAlbumKey;

    if (goForward) {
      if (chapterKey < this.lastChapterKey(albumKey, bookKey)) {
        newAlbumKey = albumKey;
        newBookKey = bookKey;
        newChapterKey = chapterKey + 1;
      } else if (bookKey < this.lastBookKey(albumKey)) {
        newAlbumKey = albumKey;
        newBookKey = bookKey + 1;
        newChapterKey = 0;
      } else if (albumKey < this.lastAlbumKey()) {
        newAlbumKey = albumKey + 1;
        newBookKey = 0;
        newChapterKey = 0;
      } else {
        newAlbumKey = 0;
        newBookKey = 0;
        newChapterKey = 0;
      }
    } else {
      if (chapterKey > 0) {
        newAlbumKey = albumKey;
        newBookKey = bookKey;
        newChapterKey = chapterKey - 1;
      } else if (bookKey > 0) {
        newAlbumKey = albumKey;
        newBookKey = bookKey - 1;
        newChapterKey = this.lastChapterKey(albumKey, newBookKey);
      } else if (albumKey > 0) {
        newAlbumKey = albumKey - 1;
        newBookKey = this.lastBookKey(newAlbumKey);
        newChapterKey = this.lastChapterKey(newAlbumKey, newBookKey);
      } else {
        newAlbumKey = this.lastAlbumKey();
        newBookKey = this.lastBookKey(newAlbumKey);
        newChapterKey = this.lastChapterKey(newAlbumKey, newBookKey);
      }
    }

    window.setKeys([newAlbumKey, newBookKey, newChapterKey]);
  }

  static lastChapterKey(albumKey, bookKey) {
    return allAlbums[albumKey].text[bookKey].text.length - 1;
  }

  static lastBookKey(albumKey) {
    return allAlbums[albumKey].text.length - 1;
  }

  static lastAlbumKey() {
    return allAlbums.length - 1;
  }
}
