const MAL_API = require("../baseClass/Mal_Api");
const structures = require("./structures.json");

module.exports = class MAL_API_USER extends MAL_API {
  constructor(token) {
    super(token);
  }

  me(fields = structures.user) {
    return new Promise((resolve, reject) => {
      this.http
        .get(`/users/@me`, {
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
};
