module.exports = class MAL_API_UTILS_ANIME {
  #months = ["winter", "spring", "summer", "fall"];
  
  /**
   * @param  {Number => 0 -> 11} month
   */
  getSeasonForNumberMonth(month) {
    switch (month) {
      case month < 3:
        return "winter";
      case month > 2 && month < 6:
        return "spring";
      case month > 5 && month < 9:
        return "summer";
      default:
        return "fall";
    }
  }

  /**
   * @param  {String} month
   */
  checkIfMonthIsValid(month) {
    if (this.#months.indexOf(month) != -1) {
      return true;
    } else {
      return false;
    }
  }
};
