const MAL_API = require("./baseClass/Mal_Api");

module.exports = class MAL_API_USER extends MAL_API {
  constructor(token) {
    super(token);
  }

  me() {
    return new Promise((resolve, reject) => {
      this.http
        .get(`/users/@me`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err.response.data);
        });
    });
  }
};
