const MAL_API = require("../baseClass/Mal_Api");
const structures = require("./structures");
const querystring = require("querystring");

module.exports = class MAL_API_LIST_ANIME extends MAL_API {
    constructor(token) {
      super(token);
    }
  
    /**
     * Get list manga from a user, default its "@me"
     * @param  {String} user_name="@me"
     * @param  {Number} offset=0
     * @param  {Number} limit=100
     * @param  {Array} fields=structures
     */

    getList(user_name = "@me", offset = 0, limit = 100, fields = structures) {
      return new Promise((resolve, reject) => {
        this.http
          .get(`/users/${user_name}/mangalist`, {
            params: {
              fields: fields.toString(),
              offset,
              limit,
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
     * Delete a entry of the user's list.
     * @param  {Number} manga_id
     */
    deleteList(manga_id) {
      return new Promise((resolve, reject) => {
        this.http
          .delete(`/manga/${manga_id}/my_list_status`)
          .then((response) => {
            resolve(response.data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    }
  
    /**
     * Update a entry of the user's list.
     * @param  {Number} manga_id
     * @param  {Object} fieldsToUdpate
     * 
     * fieldsToUpdate:
     *        {
                status: "reading" | "completed" | "on_hold" | "dropped" | "plan_to_read",
                is_rereading: true | false,
                score: 0-10,
                num_volumes_read: Number,
                num_chapters_read: Number,
                priority: 0-2,
                num_times_reread: Number,
                reread_value: 0-5,
                tags: String,
                comments: String
              }
     */
  
    updateList(manga_id, fieldsToUdpate) {
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
  
      return new Promise((resolve, reject) => {
        this.http
          .put(
            `/manga/${manga_id}/my_list_status`,
            querystring.stringify(fieldsToUdpate),
            config
          )
          .then((response) => {
            resolve(response.data);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    }
  };