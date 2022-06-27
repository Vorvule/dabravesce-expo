export class Util {
  static pairIndex(index = 0) {
    index = index.toString();

    return index.length < 2 ? "0" + index : index;
  }

  static randomInteger(minIncluded, maxExcluded) {
    return (
      Math.floor(Math.random() * (maxExcluded - minIncluded)) + minIncluded
    );
  }
}
