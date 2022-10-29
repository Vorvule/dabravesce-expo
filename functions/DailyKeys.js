export class DailyKeys {
  static getDailyKeys() {
    const zeroBasedDayOfYearIndex = this.getDayOfTheYearIndex();

    if (zeroBasedDayOfYearIndex < 358) {
      const modulus = zeroBasedDayOfYearIndex % 89;
      switch (true) {
        case modulus < 28:
          return [0, 0, modulus];
        case modulus > 27 && modulus < 44:
          return [0, 1, modulus - 28];
        case modulus > 43 && modulus < 68:
          return [0, 2, modulus - 44];
        case modulus > 67:
          return [0, 3, modulus - 68];
        default:
          return [0, 0, 0];
      }
    } else {
      return [0, 2, 0]; // [albumIndex, bookIndex, chapterIndex]
    }
    // indexes 0-355 = 356 Days = 89 Gospel chapters x 4 Times
    // indexes 356, 357 = Mathew 1, 2 = fit for Christmas reading
    // indexes 358/359 = Christmas Eve/Christmas = Luke, 1 till EOY
  }

  static getDayOfTheYearIndex() {
    // Everything is in milliseconds
    let oneDay = 1000 * 60 * 60 * 24;
    let currentDay = new Date();
    let startOfYear = new Date(currentDay.getFullYear(), 0, 0);
    let daysDifference = currentDay - startOfYear;
    // Zero based day of the year
    return Math.floor(daysDifference / oneDay) - 1;
  }
}
