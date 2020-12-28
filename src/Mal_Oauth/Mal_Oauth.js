const axios = require("axios").default;
const querystring = require("querystring");

module.exports = class MAL_OAUTH2 {
  urlbaseOAUTH2 = "https://myanimelist.net/v1/oauth2";
  urlAuthorize = `${this.urlbaseOAUTH2}/authorize`;
  urlAccessToken = `${this.urlbaseOAUTH2}/token`;

  constructor(clientId, clientSecret = undefined) {
    this.clientId = clientId;

    axios.defaults.headers["Content-Type"] =
      "application/x-www-form-urlencoded";

    this.clientSecret = clientSecret;
  }

  /**
   * @param  {String} codeChallenge
   */
  urlAuthorize(codeChallenge) {
    return `${this.urlAuthorize}?response_type=code&client_id=${
      this.clientId
    }&code_challenge=${codeChallenge}&code_challenge_method=plain`;
  }

  /**
   * @param  {String} code
   * @param  {String} codeVerifier
   */
  accessToken(code, codeVerifier) {
    return new Promise((resolve, reject) => {
      const query = {
        client_id: this.clientId,
        client_secret: this.clientSecret,
        code: code,
        code_verifier: codeVerifier,
        grant_type: "authorization_code",
      };

      axios
        .post(this.urlAccessToken, querystring.stringify(query))
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err.response.data);
        });
    });
  }

  /**
   * @param  {String} refreshToken
   */
  refreshToken(refreshToken) {
    return new Promise((resolve, reject) => {
      const query = {
        client_id: this.clientId,
        client_secret: this.clientSecret,
        refresh_token: refreshToken,
        grant_type: "refresh_token",
      };

      axios
        .post(this.urlAccessToken, querystring.stringify(query))
        .then((response) => {
          resolve(response.data);
        })
        .catch((err) => {
          reject(err.response);
        });
    });
  }
};
