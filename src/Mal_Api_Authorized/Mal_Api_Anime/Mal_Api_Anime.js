const MAL_API = require("../baseClass/Mal_Api");
const MAL_API_UTILS_ANIME = require("../../Helpers/Mal_Api_Utils_Anime");
const structures = require("./structures.json");

module.exports = class MAL_API_ANIME extends MAL_API {
  utils = new MAL_API_UTILS_ANIME();

  constructor(token) {
    super(token);
  }

  /**
   * List of animes via a query text search
   * @param  {String} q
   * @param  {Number} offset=0
   * @param  {Number} limit=100
   * @param {Array} fields=structures.animeInList
   */
  animes(q, offset = 0, limit = 100, fields = structures.animeInList) {
    return new Promise((resolve, reject) => {
      this.http
        .get("/anime", {
          params: {
            q,
            limit,
            offset,
            fields: fields.toString(),
          },
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err.response.data);
        });
    });
  }

  /**
   * Specific anime by id, and return the anime with all details
   * @param  {Number} id
   * @param {Array} fields=structures.animeFull
   */
  anime(id, fields = structures.animeFull) {
    return new Promise((resolve, reject) => {
      this.http
        .get(`/anime/${id}`, {
          params: {
            fields: fields.toString(),
          },
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err.response.data);
        });
    });
  }

  /**
   * Ranking animes, with all type of rankings
   * @param  {String =>  "all" | "airing" | "upcoming" | "tv" | "ova" | "movie" | "special" | "bypopularity" | "favorite"} ranking_type="all"
   * @param  {Number} offset=0
   * @param  {Number} limit=100
   * @param {Array} fields=structures.animeInList
   */
  animeRanking(
    ranking_type = "all",
    offset = 0,
    limit = 100,
    fields = structures.animeInList
  ) {
    return new Promise((resolve, reject) => {
      this.http
        .get("/anime/ranking", {
          params: {
            ranking_type,
            limit,
            offset,
            fields: fields.toString(),
          },
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err.response.data);
        });
    });
  }

  /**
   * Seasonal Anime, by default is filled at actual season
   * @param  {Number} year=currentYear
   * @param  {String => "winter" | "spring" | "summer" | "fall"} season=currentSeason
   * @param  {Number} offset=0
   * @param  {Number} limit=100
   * @param  {String => "anime_score" | "anime_num_list_users"} sort=""
   * @param {Array} fields=structures.animeInList
   */
  animeSeasonal(
    year = new Date().getFullYear(),
    season = this.utils.getSeasonForNumberMonth(new Date().getMonth()),
    offset = 0,
    limit = 100,
    sort = "",
    fields = structures.animeInList
  ) {
    return new Promise((resolve, reject) => {
      if (this.utils.checkIfMonthIsValid(season)) {
        this.http
          .get(`/anime/season/${year}/${season}`, {
            params: {
              sort,
              limit,
              offset,
              fields: fields.toString(),
            },
          })
          .then((response) => {
            resolve(response.data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      } else {
        reject("Enter a valid season: winter, spring, summer, fall");
      }
    });
  }

  /**
   * Anime suggestion from MAL
   * @param  {Number} offset=0
   * @param  {Number} limit=100
   * @param {Array} fields=structures.animeInList
   */
  animeSuggestions(offset = 0, limit = 100, fields = structures.animeInList) {
    return new Promise((resolve, reject) => {
      this.http
        .get("/anime/suggestions", {
          params: {
            limit,
            offset,
            fields: fields.toString(),
          },
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err.response.data);
        });
    });
  }
};
