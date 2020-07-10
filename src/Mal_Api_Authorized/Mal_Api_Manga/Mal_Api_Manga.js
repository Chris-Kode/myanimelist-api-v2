const MAL_API = require("../baseClass/Mal_Api");
const structures = require("./structures.json");

module.exports = class MAL_API_MANGA extends MAL_API {
  constructor(token) {
    super(token);
  }
  /**
   * List of mangas via a query text search
   * @param  {String} q
   * @param  {Number} offset=0
   * @param  {Number} limit=100
   * @param {Array} fields=structures.mangaInList
   */
  mangas(q, offset = 0, limit = 100, fields = structures.mangaInList) {
    return new Promise((resolve, reject) => {
      this.http
        .get("/manga", {
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
   * Specific manga by id, and return the manga with all details
   * @param  {Number} id
   * @param {Array} fields=structures.mangaFull
   */
  manga(id, fields = structures.mangaFull) {
    return new Promise((resolve, reject) => {
      this.http
        .get(`/manga/${id}`, {
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
   * Ranking mangas, with all type of rankings
   * @param  {String => "all" | "manga" | "novels" | "oneshots" | "doujin" | "manhwa" | "manhua" | "bypopularity" | "favorite"} ranking_type="all"
   * @param  {Number} offset=0
   * @param  {Number} limit=100
   * @param {Array} fields=structures.mangaInList
   */
  mangaRanking(
    ranking_type = "all",
    offset = 0,
    limit = 100,
    fields = structures.mangaInList
  ) {
    return new Promise((resolve, reject) => {
      this.http
        .get("/manga/ranking", {
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
          resolve(err.response.data);
        });
    });
  }
};
