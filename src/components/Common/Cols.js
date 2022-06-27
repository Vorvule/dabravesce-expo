const colSet = {
  all: { left: true, middle: true, right: true },
  left: { left: true, middle: false, right: false },
  middle: { left: false, middle: true, right: false },
  right: { left: false, middle: false, right: true },
};

export class Cols {
  static getInitial() {
    return this.screenIsLarge() ? colSet.all : colSet.middle;
  }

  static toggleShow(columns, column) {
    columns[column]
      ? window.setCols(colSet.middle)
      : window.setCols(colSet[column]);
  }

  // helpers

  static screenIsLarge() {
    return window.innerWidth > 992;
  }
}
