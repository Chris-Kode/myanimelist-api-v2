const MAL_API_ANIME = require("./src/Mal_Api_Authorized/Mal_Api_Anime/Mal_Api_Anime");
const MAL_API_MANGA = require("./src/Mal_Api_Authorized/Mal_Api_Manga/Mal_Api_Manga");
const MAL_API_USER = require("./src/Mal_Api_Authorized/Mal_Api_User/Mal_Api_User");
const MAL_API_LIST_ANIME = require("./src/Mal_Api_Authorized/Mal_Api_List_Anime/Mal_Api_List_Anime");
const MAL_OAUTH = require("./src/Mal_Oauth/Mal_Oauth");

exports.API_ANIME = MAL_API_ANIME;
exports.API_LIST_ANIME = MAL_API_LIST_ANIME;
exports.API_MANGA = MAL_API_MANGA;
exports.API_USER = MAL_API_USER;
exports.OAUTH = MAL_OAUTH;
